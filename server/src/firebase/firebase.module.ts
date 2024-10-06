import { Module } from '@nestjs/common';
import { FirebaseService } from './firebase.service';
import { FirebaseController } from './firebase.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';

const firebaseProvider = {
  provide: 'FIREBASE_APP',
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    const firebaseConfig = {
      apiKey: configService.get<string>('apiKey'),
      authDomain: configService.get<string>('authDomain'),
      databaseURL: configService.get<string>('databaseURL'),
      projectId: configService.get<string>('projectId'),
      storageBucket: configService.get<string>('storageBucket'),
      messagingSenderId: configService.get('messagingSenderId'),
      appId: configService.get<string>('appId'),
    } as admin.ServiceAccount;

    return admin.initializeApp(firebaseConfig);
  },
};

@Module({
  imports: [ConfigModule],
  controllers: [FirebaseController],
  providers: [FirebaseService, firebaseProvider],
})
export class FirebaseModule { }
