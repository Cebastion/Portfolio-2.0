import { IMailer } from '@/interfaces/Mailer.interface'
import nodemailer from 'nodemailer';
export class MailerService {
  private static transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kdimon2006@gmail.com', // Your Gmail address
      pass: '2006Kdimon2006',  // Your Gmail password (or app-specific password)
    },
  })
  static async SendEmail(mailer: IMailer){
    try {
      await this.transporter.sendMail({
          from: 'kdimon2006@gmail.com', // Sender address
          to: mailer.email, // Recipient address from the IMailer interface
          subject: mailer.subject, // Subject from the IMailer interface
          text: mailer.message,
        })
    } catch (error: any) {
      console.log(error)
    }
  }
}