import { IMailer } from '@/interfaces/Mailer.interface'
import axios from 'axios';

export class MailerService {
  static async SendEmail(mailer: IMailer) {
    try {
      await axios.post('https://server-theta-beryl-89.vercel.app/sendEmail', mailer)
    } catch (error: any) {
      console.log(error)
    }
  }
}
