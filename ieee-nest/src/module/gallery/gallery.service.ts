import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Gallery, GalleryDocument } from './schema/gallery.schema';
import { Model } from 'mongoose';
import { createImageDto } from './dto/create-image.dto';
import { updateImageDto } from './dto/update-image.dto';

type UpdateGalleryWithImage = updateImageDto & { image?: string };

@Injectable()
export class GalleryService {
    constructor(
        @InjectModel(Gallery.name)
        private galleryModel: Model<GalleryDocument>
    ) { }

    async getImages() {
        return this.galleryModel.find().exec();
    }

    async createImage(
        galleryData: createImageDto,
        file: Express.Multer.File
    ) {
        const newImage = new this.galleryModel({
            ...galleryData,
            image: file?.path
        });
        return newImage.save();
    }

    async updateImage(id: string, galleryData: updateImageDto, file: Express.Multer.File) {
        const updateImage: UpdateGalleryWithImage = {
            ...galleryData,
        };
        if (file) {
            updateImage.image = file.path;
        }
        const updatedImage = this.galleryModel.findByIdAndUpdate(id,
            galleryData,
            { returnDocument: "after" }
        ).exec();
        return updatedImage;
    }

    async deleteImage(id: string) {
        const deletedImage = this.galleryModel.findByIdAndDelete(id);
        return deletedImage;
    }
}
