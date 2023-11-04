import {NextApiRequest, NextApiResponse} from "next";
import {createRouter} from "next-connect";
import PusherClient from "pusher-js";
import {PUSHER_CLUSTER, PUSHER_KEY} from "../../../config";
import {TELEGRAM_AUTH_EVENT, TELEGRAM_CHANNEL, TelegramAuthEventType} from "../../controllers/telegram/const";
import {telegram} from "../../controllers/telegram/telegram";
import {wait} from "../../utils/utils";

const router = createRouter<NextApiRequest, NextApiResponse>();

const phoneCodeCB = async (): Promise<string> => {
  const pusher = new PusherClient(PUSHER_KEY, {
    cluster: PUSHER_CLUSTER,
    channelAuthorization: {
      transport: `ajax`,
      endpoint: `http://192.168.0.142:3000/api/pusher-auth`,
    }
  });

  let code = ``;
  const channel = pusher.subscribe(TELEGRAM_CHANNEL);
  channel.bind(TELEGRAM_AUTH_EVENT, (data: any) => {
    console.log(data);
    const {type} = data;

    if (type === TelegramAuthEventType.GET_CODE) {
      code = data.data;
      channel.unbind(TELEGRAM_AUTH_EVENT);
    }
  });

  let timer = 0;
  while (!code) {
    console.log(`Цикл старт ${timer}`);

    if (timer > 5 * 60 * 1000) {
      break;
    } else {
      timer += 300;
    }

    await wait(300);
  }

  return String(code);
};

const auth = async (phone: string) => {
  const authString = await telegram.auth({
    phoneNumber: phone,
    onError: (error) => {
      console.log(`Telegram auth error`, error);
    },
    phoneCode: phoneCodeCB,
  });

  console.log(`auth string:`, authString);
  process.env[`TELEGRAM_AUTH_STRING`] = authString;
};

router.get(async (req, res) => {
  const {phone} = req.query;

  if (phone) {
    auth(phone as string);
  }

  res.status(200).json({success: true});
});

export default router.handler();
