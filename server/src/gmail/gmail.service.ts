import { Injectable } from '@nestjs/common';
import { MailerDTO } from './dto/Mailer.dto';
import * as nodemailer from 'nodemailer';
import { configDotenv } from 'dotenv';

configDotenv();

@Injectable()
export class GmailService {
  private transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });
  }
  async sendEmail(Mailer: MailerDTO) {
    const Maileropts = {
      from: Mailer.email,
      to: process.env.GMAIL_GETTER_USER,
      subject: Mailer.subject,
      text: Mailer.message,
    };
    try {
      await this.transporter.sendMail(Maileropts);
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }
}
