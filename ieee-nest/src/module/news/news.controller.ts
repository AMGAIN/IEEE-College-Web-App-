import { Controller , Get, Post, Put, Body, Param, Delete} from '@nestjs/common';
import { NewsService } from './news.service';
import { createNewsDto } from './dto/create-news.dto';
import { updateNewsDto } from './dto/update-news.dto';

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

  @Put(':id')
  updateNews(
    @Param('id') id: string,
    @Body() newsData : updateNewsDto
  ) {
    return this.newsService.updateNews(id, newsData);
  }

  @Delete(':id')
  deleteNews( @Param('id') id: string){
    return this.newsService.deleteNews(id);
  }
}
