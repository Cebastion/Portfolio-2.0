import { Injectable } from '@nestjs/common';
import { WorkDto } from './dto/work.dto';
import { FirebaseService } from 'src/firebase/firebase.service';

@Injectable()
export class WorksService {
  constructor(private firebaseService: FirebaseService) {}

  create(Work: WorkDto) {
    return Work;
  }

  findAll() {
    return `This action returns all works`;
  }

  update(id: number, Work: WorkDto) {
    return `This action updates a #${id} work ${Work}`;
  }

  remove(id: number) {
    return `This action removes a #${id} work`;
  }
}
