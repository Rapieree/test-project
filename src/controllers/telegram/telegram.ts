import {StringSession} from "telegram/sessions";
import {TELEGRAM_AUTH_STRING} from "../../../config";
import {Telegram} from "../../service/telegram";

const telegram = new Telegram(new StringSession(TELEGRAM_AUTH_STRING));

export {
  telegram,
};
