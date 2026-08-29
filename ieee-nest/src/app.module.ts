import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GalleryModule } from './module/gallery/gallery.module';
import { EventModule } from './module/event/event.module';
import { NewsModule } from './module/news/news.module';
import { TeamModule } from './module/team/team.module';
import { MembershipModule } from './module/membership/membership.module';
import { HomeModule } from './module/home/home.module';
import { AboutModule } from './module/about/about.module';

@Module({
  imports: [
    // Makes variables from .env available throughout the application
    ConfigModule.forRoot({
      isGlobal: true
    }),
    // Connects NestJS to MongoDB using MONGODB_URI from .env
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
    }),
    GalleryModule,
    EventModule,
    NewsModule,
    TeamModule,
    MembershipModule,
    HomeModule,
    AboutModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
