import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { News, NewsDocument } from './schemas/news.schema';
import { createNewsDto } from './dto/create-news.dto';
import { updateNewsDto } from './dto/update-news.dto';

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

    async updateNews(id: string, newsData: updateNewsDto){

        const changedNews = this.newsModel.findByIdAndUpdate(id, newsData, {returnDocument: "after" },).exec();
        return changedNews;
    }

    async deleteNews(id: string){
        const deletedNews = this.newsModel.findByIdAndDelete(id).exec();
        return deletedNews;
    }
}
