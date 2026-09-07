import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { News, NewsDocument } from './schemas/news.schema';
import { createNewsDto } from './dto/create-news.dto';
import { updateNewsDto } from './dto/update-news.dto';

type UpdateNewsWithImage = updateNewsDto & { image?: string };

@Injectable()
export class NewsService {
    constructor(
        @InjectModel(News.name)
        private newsModel: Model<NewsDocument>
    ) { }

    async getNews() {
        return this.newsModel.find().exec()
    }

    async createNews(
        newsData: createNewsDto,
        file: Express.Multer.File
    ) {
        const newNews = new this.newsModel({
            ...newsData,
            image: file?.path
        });
        return newNews.save();
    }

    async updateNews(id: string, newsData: updateNewsDto, file: Express.Multer.File) {
        const updateNews: UpdateNewsWithImage = {
            ...newsData,
        };
        if (file) {
            updateNews.image = file.path;
        }
        const updatedNews = await this.newsModel.findByIdAndUpdate(
            id,
            newsData,
            { returnDocument: "after" }
        ).exec();
        return updatedNews;
    }

    async deleteNews(id: string) {
        const deletedNews = this.newsModel.findByIdAndDelete(id).exec();
        return deletedNews;
    }
}
