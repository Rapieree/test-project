// Private
const TELEGRAM_API_ID = Number(process.env.TELEGRAM_API_ID);
const TELEGRAM_API_HASH = String(process.env.TELEGRAM_API_HASH || ``);
const PUSHER_APP_ID = String(process.env.PUSHER_APP_ID);
const PUSHER_SECRET = String(process.env.PUSHER_SECRET || ``);
const PUSHER_CLUSTER = String(process.env.NEXT_PUBLIC_PUSHER_CLUSTER || ``);
const TELEGRAM_AUTH_STRING = String(process.env.TELEGRAM_AUTH_STRING);
const POSTGRES_CONNECTION_URL = String(process.env.POSTGRES_CONNECTION_URL || ``);
const JWT_ACCESS_KEY = String(process.env.JWT_ACCESS_KEY || ``);

// Public
const SITE_URL = String(process.env.NEXT_PUBLIC_SITE_URL || ``);
const PUSHER_KEY = String(process.env.NEXT_PUBLIC_PUSHER_KEY || ``);

module.exports = {
  JWT_ACCESS_KEY,
  POSTGRES_CONNECTION_URL,
  PUSHER_APP_ID,
  PUSHER_CLUSTER,
  PUSHER_KEY,
  PUSHER_SECRET,
  SITE_URL,
  TELEGRAM_API_HASH,
  TELEGRAM_API_ID,
  TELEGRAM_AUTH_STRING,
};
