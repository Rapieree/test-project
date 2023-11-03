import {clsx} from "clsx";
import Pusher from "pusher-js";
import React, {useEffect, useState} from "react";
import {PUSHER_CLUSTER, PUSHER_KEY} from "../../../config";
import {TELEGRAM_AUTH_EVENT, TELEGRAM_CHANNEL, TelegramAuthEventType} from "../../controllers/telegram/const";
import telegramAuthFormStyle from "./telegram-auth-form.module.css";

type TProps = {
  className?: string,
}

Pusher.logToConsole = true;

const TelegramAuthForm: React.FC<TProps> = ({className}) => {
  const [isRequestedCode, setIsRequestedCode] = useState(false);
  const [pusher, setPusher] = useState<Pusher|null>(null);
  const [numberPhone, setNumberPhone] = useState(``);
  const [code, setCode] = useState(``);

  useEffect(() => {
    const pusher = new Pusher(PUSHER_KEY, {
      cluster: PUSHER_CLUSTER,
      channelAuthorization: {
        transport: `ajax`,
        endpoint: `/api/pusher-auth`,
      }
    });
    setPusher(pusher);

    return () => {
      pusher.unsubscribe(TELEGRAM_CHANNEL);
    };
  }, []);

  const onRequestButtonClick = async () => {
    if (!pusher) {
      alert(`Invalid connect`);
      return;
    }

    pusher.subscribe(TELEGRAM_CHANNEL);
    const res = await fetch(`/api/telegram-auth?phone=${numberPhone}`);
    const result = await res.json();

    console.log(result);

    setIsRequestedCode(true);
  };

  const onSendCodeButtonClick = () => {
    if (!pusher) {
      alert(`Invalid connect`);
      return;
    }

    pusher.channel(TELEGRAM_CHANNEL).trigger(TELEGRAM_AUTH_EVENT, {
      type: TelegramAuthEventType.GET_CODE,
      data: Number(code),
    });
  };

  return (
    <div className={clsx(telegramAuthFormStyle.wrapper, className)}>
      <form className={clsx(className, telegramAuthFormStyle.form)}>
        <fieldset disabled={isRequestedCode}>
          <label>
            Номер телефона:
            <input type={`number`} onChange={(evt) => setNumberPhone(evt.target.value)} value={numberPhone} />
          </label>
          <button type={`button`} onClick={onRequestButtonClick}>Запросить код</button>
        </fieldset>
      </form>

      <form className={clsx(className, telegramAuthFormStyle.form)}>
        <fieldset disabled={!isRequestedCode}>
          <label>
            Код подтверждения:
            <input type={`number`} onChange={(evt) => setCode(evt.target.value)} value={code} />
          </label>

          <button type={`button`} onClick={onSendCodeButtonClick}>Отправить</button>
        </fieldset>
      </form>
    </div>

  );
};

export default TelegramAuthForm;
