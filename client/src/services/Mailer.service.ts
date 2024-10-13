import { IMailer } from '@/interfaces/Mailer.interface'
import axios from 'axios';

export class MailerService {
  static async SendEmail(mailer: IMailer) {
    try {
      await axios.post('https://server-elrcvgfwo-cebastions-projects.vercel.app/sendEmail', mailer)
    } catch (error: any) {
      console.log(error)
    }
  }
}
