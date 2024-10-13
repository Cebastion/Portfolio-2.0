import { Body, Controller, Post } from '@nestjs/common';
import { GmailService } from './gmail.service';
import { MailerDTO } from './dto/Mailer.dto';

@Controller()
export class GmailController {
  constructor(private readonly gmailService: GmailService) {}

  @Post('sendEmail')
  sendEmail(@Body() Mailer: MailerDTO) {
    this.gmailService.sendEmail(Mailer);
  }
}
