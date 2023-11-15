import {TelegramClient} from "telegram";
import {UserAuthParams} from "telegram/client/auth";
import {StringSession} from "telegram/sessions";
import {TELEGRAM_API_HASH, TELEGRAM_API_ID} from "../../config";
import {log} from "../utils/utils";

const SERVICE_NAME = `Telegram`;

class Telegram {
  public client: TelegramClient;
  private readonly stringSession: StringSession;
  private authString: string = ``;

  constructor(stringSession: StringSession) {
    this.stringSession = stringSession;
    this.client = new TelegramClient(this.stringSession, TELEGRAM_API_ID, TELEGRAM_API_HASH, {
      connectionRetries: 5,
    });
  }

  async auth(authParams: UserAuthParams): Promise<string> {
    await this.client.start(authParams);
    log(SERVICE_NAME, `Success auth`);

    this.authString = this.client.session.save() as unknown as string;
    log(SERVICE_NAME, `auth string: ${this.authString}`);

    return this.authString;
  }

  async getClient() {
    return this.client;
  }
}

export {
  Telegram,
};
