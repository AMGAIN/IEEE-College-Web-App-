import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { News, NewsDocument } from './schemas/news.schema';
import { createNewsDto } from './dto/create-news.dto';

@Injectable()
export class NewsService {
    constructor(
        @InjectModel(News.name)
        private newsModel: Model<NewsDocument>
    ){}

    async getNews(){
        return this.newsModel.find().exec()
    }

    async createNews(newsData: createNewsDto){
        const newNews = new this.newsModel(newsData);
        return newNews.save();
    }
}
