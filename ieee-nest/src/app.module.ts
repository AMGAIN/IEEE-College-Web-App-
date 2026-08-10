import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GalleryModule } from './module/gallery/gallery.module';
import { EventModule } from './module/event/event.module';
import { NewsModule } from './module/news/news.module';
import { TeamModule } from './module/team/team.module';

@Module({
  imports: [GalleryModule, EventModule, NewsModule, TeamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
