import { Controller, Get, Post, Body } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { createImageDto } from './dto/create-image.dto';

@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Get('')
  getImage(){
    return this.galleryService.getImages();
  }

  @Post('')
  createImage(@Body() galleryData : createImageDto){
    return this.galleryService.createImage(galleryData);
  }
}
