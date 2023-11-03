const TELEGRAM_CHANNEL = `private-telegram`;
const TELEGRAM_AUTH_EVENT = `client-auth`;

enum TelegramAuthEventType {
  START_AUTH = `start-auth`,
  GET_NUMBER = `request-phone`,
  GET_CODE = `set-code`,
}

export {
  TELEGRAM_CHANNEL,
  TELEGRAM_AUTH_EVENT,
  TelegramAuthEventType,
};

