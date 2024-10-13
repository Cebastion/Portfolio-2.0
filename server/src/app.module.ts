import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorksModule } from './works/works.module';
import { GmailModule } from './gmail/gmail.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    WorksModule,
    GmailModule,
    MongooseModule.forRoot(
      'mongodb+srv://kdimon2006:wUynNDXw1En2wKCZ@portfolio.pwsxs9f.mongodb.net/',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
