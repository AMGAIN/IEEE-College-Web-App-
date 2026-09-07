import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { createImageDto } from './dto/create-image.dto';
import { updateImageDto } from './dto/update-image.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) { }

  @Get('')
  @ApiOperation({ summary: 'Get all Images'})
  getImage() {
    return this.galleryService.getImages();
  }

  @Post('')
  @ApiOperation({ summary: 'Create new Image'})
  createImage(@Body() galleryData: createImageDto) {
    return this.galleryService.createImage(galleryData);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update existing Image'})
  updateImage(
    @Param('id') id: string,
    @Body() galleryData: updateImageDto
  ) {
    return this.galleryService.updateImage(id, galleryData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Image'})
  deleteImage(@Param('id') id: string) {
    return this.galleryService.deleteImage(id);
  }
}
