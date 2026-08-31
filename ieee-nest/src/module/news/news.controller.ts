import { Controller , Get, Post, Body} from '@nestjs/common';
import { NewsService } from './news.service';
import { createNewsDto } from './dto/create-news.dto';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get('')
  getNews(){
    return this.newsService.getNews();
  }

  @Post('')
  createNews(@Body() newsData : createNewsDto){
    return this.newsService.createNews( newsData);
  }
}
