import {
  BadRequestException,
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { WorksService } from './works.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { WorkDto } from './dto/work.dto';

@Controller('works')
export class WorksController {
  constructor(private readonly worksService: WorksService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(
    @Body() body: Omit<WorkDto, 'img'>, // Body without the image
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new BadRequestException('Image is required');
    }

    const newWork: WorkDto = {
      ...body,
      image: file.buffer, // Ensure 'img' is of type Buffer
    };

    return this.worksService.create(newWork);
  }

  @Get()
  findAll() {
    return this.worksService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.worksService.remove(id);
  }
}
