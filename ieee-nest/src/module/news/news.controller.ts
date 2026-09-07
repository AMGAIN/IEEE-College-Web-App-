import { Controller, Get, Post, Put, Body, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { NewsService } from './news.service';
import { createNewsDto } from './dto/create-news.dto';
import { updateNewsDto } from './dto/update-news.dto';
import { ApiOperation, ApiBody, ApiConsumes } from '@nestjs/swagger';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) { }

  @Get('')
  @ApiOperation({ summary: 'Get all news articles' })
  getNews() {
    return this.newsService.getNews();
  }

  @Post('')
  @ApiOperation({ summary: 'Create new news articles' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: {type: 'string'},
        category: {type: 'string'},
        date: {type: 'string'},
        excerpt: {type: 'string'},
        content: {type: 'string'},
        image: {type: 'string',format: 'binary'},
      },
    },
  })
  @UseInterceptors(
    FileInterceptor('image', {
      dest: './uploads/news',
    }),
  )
  createNews(@Body() newsData: createNewsDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.newsService.createNews(newsData, file);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update the news articles' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {title: {type: 'string',},
        category: {type: 'string'},
        date: {type: 'string'},
        excerpt: {type: 'string'},
        content: {type: 'string'},
        image: {type: 'string',format: 'binary'},
      },
    },
  })
  @UseInterceptors(
    FileInterceptor('image', {
      dest: './uploads/news',
    }),
  )
  updateNews(
    @Param('id') id: string,
    @Body() newsData: updateNewsDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    return this.newsService.updateNews(id, newsData, file);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete news article' })
  deleteNews(@Param('id') id: string) {
    return this.newsService.deleteNews(id);
  }

}
