import { Injectable } from '@nestjs/common';

@Injectable()
export class WorksService {
  create() {
    return 'This action adds a new work';
  }

  findAll() {
    return `This action returns all works`;
  }

  update(id: number) {
    return `This action updates a #${id} work`;
  }

  remove(id: number) {
    return `This action removes a #${id} work`;
  }
}
