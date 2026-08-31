import { Controller, Get, Post, Body } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) { }

  @Get('')
  getEvent() {
    return this.eventService.getEvent();
  }

  @Post('')
  createEvent(@Body() eventData: CreateEventDto) {
    return this.eventService.createEvent(eventData);
  }
}
