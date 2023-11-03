const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
// Private
const TELEGRAM_API_ID = Number(process.env.TELEGRAM_API_ID);
const TELEGRAM_API_HASH = String(process.env.TELEGRAM_API_HASH || ``);
const TELEGRAM_AUTH_STRING = String(process.env.TELEGRAM_AUTH_STRING);

// Public
const SITE_URL = String(process.env.NEXT_PUBLIC_SITE_URL || ``);

export {
  SITE_URL,
  TELEGRAM_API_HASH,
  TELEGRAM_API_ID,
  TELEGRAM_AUTH_STRING,
};
