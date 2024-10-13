import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WorkDocument } from 'src/schema/work.schema';
import { WorkDto } from './dto/work.dto';

@Injectable()
export class WorksService {
  constructor(@InjectModel('works') private WorkModel: Model<WorkDocument>) {}

  async create(createWorkDto: WorkDto) {
    const createdWork = new this.WorkModel(createWorkDto);
    return createdWork.save();
  }

  findAll() {
    return this.WorkModel.find().exec();
  }

  remove(_id: string) {
    this.WorkModel.findByIdAndDelete(_id).exec();
    return this.WorkModel.find().exec();
  }
}
