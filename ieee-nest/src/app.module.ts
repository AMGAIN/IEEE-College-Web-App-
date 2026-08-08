import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GalleryModule } from './module/gallery/gallery.module';
import { EventModule } from './module/event/event.module';

@Module({
  imports: [GalleryModule, EventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
