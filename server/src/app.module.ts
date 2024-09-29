import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorksModule } from './works/works.module';
import { GmailModule } from './gmail/gmail.module';
import { FirebaseModule } from './firebase/firebase.module';

@Module({
  imports: [WorksModule, GmailModule, FirebaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
