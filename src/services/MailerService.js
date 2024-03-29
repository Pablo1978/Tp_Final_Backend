import nodemailer from "nodemailer";
import Handlebars from "handlebars";
import fs from "fs";
import config from "../config/config.js";
import DMailInfo from "../constants/DMailInfo.js";
import __dirname from "../utils.js";

export default class MailerService {
  constructor() {
    this.client = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      auth: {
        user: config.mailer.USER,
        pass: config.mailer.PASS,
      },
    });
  }

  sendMail = async (emails, template, payload) => {
    const mailInfo = DMailInfo[template];
    const html = await this.generateMailTemplate(template, payload);
    const result = await this.client.sendMail({
      from: "Acuario Pablo´s <pabloeltano78.pf@gmail.com>",
      to: emails,
      html,
      ...mailInfo,
    });
    return result;
  };

  generateMailTemplate = async (template, payload) => {
    const content = await fs.promises.readFile(
      `${__dirname}/templates/${template}.handlebars`,
      "utf-8"
    );
    const preCompiledContent = Handlebars.compile(content);
    const finalContent = preCompiledContent(payload);
    return finalContent;
  };
}
