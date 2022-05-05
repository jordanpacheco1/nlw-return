import { MailAdapter, SendMailData } from "../mail-adapter";

import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "df159261cc1b97",
    pass: "091cb553f5150b",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Jordan Pacheco <jordanrune@gmail.com>",
      subject,
      html: body,
    });
  }
}
