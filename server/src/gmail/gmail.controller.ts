import { Controller } from '@nestjs/common';
import { GmailService } from './gmail.service';

@Controller()
export class GmailController {
  constructor(private readonly gmailService: GmailService) {}
}
