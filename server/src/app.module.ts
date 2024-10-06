import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorksModule } from './works/works.module';
import { GmailModule } from './gmail/gmail.module';
import { FirebaseModule } from './firebase/firebase.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    WorksModule,
    GmailModule,
    FirebaseModule,
    ConfigModule.forRoot({ cache: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
