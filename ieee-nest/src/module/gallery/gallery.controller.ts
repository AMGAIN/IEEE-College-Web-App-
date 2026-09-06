import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { createImageDto } from './dto/create-image.dto';
import { updateImageDto } from './dto/update-image.dto';

@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) { }

  @Get('')
  getImage() {
    return this.galleryService.getImages();
  }

  @Post('')
  createImage(@Body() galleryData: createImageDto) {
    return this.galleryService.createImage(galleryData);
  }

  @Put(':id')
  updateImage(
    @Param('id') id: string,
    @Body() galleryData: updateImageDto
  ) {
    return this.galleryService.updateImage(id, galleryData);
  }

  @Delete(':id')
  deleteImage(@Param('id') id: string) {
    return this.galleryService.deleteImage(id);
  }
}
