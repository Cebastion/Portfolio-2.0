import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WorksService } from './works.service';
import { WorkDto } from './dto/work.dto';

@Controller('works')
export class WorksController {
  constructor(private readonly worksService: WorksService) {}

  @Post()
  create(@Body() createWorkDto: WorkDto) {
    return this.worksService.create();
  }

  @Get()
  findAll() {
    return this.worksService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkDto: WorkDto) {
    return this.worksService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.worksService.remove(+id);
  }
}
