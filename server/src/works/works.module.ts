import { Module } from '@nestjs/common';
import { WorksService } from './works.service';
import { WorksController } from './works.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkSchema } from 'src/schema/work.schema';

@Module({
  controllers: [WorksController],
  providers: [WorksService],
  imports: [MongooseModule.forFeature([{ name: 'works', schema: WorkSchema }])],
})
export class WorksModule {}
