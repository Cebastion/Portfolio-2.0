import { Module } from '@nestjs/common';
import { WorksService } from './works.service';
import { WorksController } from './works.controller';
import { FirebaseModule } from 'src/firebase/firebase.module';

@Module({
  controllers: [WorksController],
  providers: [WorksService],
  imports: [FirebaseModule],
})
export class WorksModule { }
