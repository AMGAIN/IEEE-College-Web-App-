import { Controller, Get, Post, Body, Put, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { createImageDto } from './dto/create-image.dto';
import { updateImageDto } from './dto/update-image.dto';
import { ApiOperation, ApiConsumes, ApiBody } from '@nestjs/swagger';

import { FileInterceptor } from '@nestjs/platform-express';

@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) { }

  @Get('')
  @ApiOperation({ summary: 'Get all Images' })
  getImage() {
    return this.galleryService.getImages();
  }

  @Post('')
  @ApiOperation({ summary: 'Create new Image' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        image: { type: 'string', format: 'binary' },
        alt: { type: 'string' },
        category: { type: 'string' },
      },
    },
  })
  @UseInterceptors(
    FileInterceptor('image', {
      dest: './uploads/gallery',
    }),
  )
  createImage(
    @Body() galleryData: createImageDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    return this.galleryService.createImage(galleryData, file);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update existing Image' })
  updateImage(
    @Param('id') id: string,
    @Body() galleryData: updateImageDto
  ) {
    return this.galleryService.updateImage(id, galleryData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Image' })
  deleteImage(@Param('id') id: string) {
    return this.galleryService.deleteImage(id);
  }
}
