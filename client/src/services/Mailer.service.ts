import { IMailer } from '@/interfaces/Mailer.interface'
import axios from 'axios';

export class MailerService {
  static async SendEmail(mailer: IMailer) {
    try {
      await axios.post('https://server-five-mu-25.vercel.app/sendEmail', mailer)
    } catch (error: any) {
      console.log(error)
    }
  }
}
