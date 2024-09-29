import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorksModule } from './works/works.module';
import { OffersModule } from './offers/offers.module';
import { GmailModule } from './gmail/gmail.module';

@Module({
  imports: [WorksModule, OffersModule, GmailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
