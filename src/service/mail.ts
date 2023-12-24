import nodemailer from "nodemailer";
import {SMTP_HOST, SMTP_PORT, SMTP_LOGIN, SMTP_PASSWORD} from "../../config";

const FROM = `Pet Project <${SMTP_LOGIN}>`;

type TSendMailOptions = {
  to: string,
  title: string,
  text?: string,
  html?: string,
}

const createTransport = () => {
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: true,
    auth: {
      user: SMTP_LOGIN,
      pass: SMTP_PASSWORD,
    }
  });
};

const mailService = {
  async sendMail({to, html, title, text}: TSendMailOptions) {
    const transport = createTransport();

    return await transport.sendMail({
      from: FROM,
      to,
      subject: title,
      text: text || ``,
      html: html || ``,
      attachDataUrls: true,
    });
  }
};

export {
  mailService,
};
