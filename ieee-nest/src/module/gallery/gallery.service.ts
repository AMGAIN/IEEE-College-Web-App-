import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Gallery, GalleryDocument  } from './schema/gallery.schema';
import { Model } from 'mongoose';
import { createImageDto } from './dto/create-image.dto';

@Injectable()
export class GalleryService {
    constructor(
            @InjectModel(Gallery.name)
            private galleryModel: Model<GalleryDocument>
        ){}

    async getImages() {
        return this.galleryModel.find().exec();
    }

    async createImage(galleryData: createImageDto){
        const newImage = new this.galleryModel(galleryData);
        return newImage.save();
    }
}
