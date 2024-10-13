import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WorkDocument = WorkModule & Document;

@Schema()
export class WorkModule {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  year: string;

  @Prop()
  role: string;

  @Prop()
  link: string;

  @Prop()
  image: Buffer;
}

export const WorkSchema = SchemaFactory.createForClass(WorkModule);
