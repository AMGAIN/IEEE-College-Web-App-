import { Controller, Get, Post, Put, Body, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { NewsService } from './news.service';
import { createNewsDto } from './dto/create-news.dto';
import { updateNewsDto } from './dto/update-news.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) { }

  @Get('')
    @ApiOperation({ summary: 'Get all news articles' })
    @ApiResponse({ status: 200, description: 'Returns all news articles' })
  getNews() {
    return this.newsService.getNews();
  }

  @Post('')
  createNews(@Body() newsData: createNewsDto) {
    return this.newsService.createNews(newsData);
  }

  @Put(':id')
  updateNews(
    @Param('id') id: string,
    @Body() newsData: updateNewsDto
  ) {
    return this.newsService.updateNews(id, newsData);
  }

  @Delete(':id')
  deleteNews(@Param('id') id: string) {
    return this.newsService.deleteNews(id);
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('image', {
      dest: './uploads/news',
    }),
  )
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    console.log(file);

    return {
      filename: file.filename,
      path: file.path,
    };
  }
}
