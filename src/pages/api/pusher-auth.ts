import {NextApiRequest, NextApiResponse} from "next";
import {createRouter} from "next-connect";
import PusherServer from "pusher";
import {PUSHER_APP_ID, PUSHER_CLUSTER, PUSHER_KEY, PUSHER_SECRET} from "../../../config";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(async (req, res) => {
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;

  const pusher = new PusherServer({
    appId: PUSHER_APP_ID,
    cluster: PUSHER_CLUSTER,
    secret: PUSHER_SECRET,
    key: PUSHER_KEY,
  });

  const authData = pusher.authorizeChannel(socketId, channel);
  res.send(authData);
});

export default router.handler();
