import { Controller, Get, Post, Body } from '@nestjs/common';
import { EventService } from './event.service';
import { createEventDto } from './dto/create-event.dto';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) { }

  @Get('')
  getEvent() {
    return this.eventService.getEvent();
  }

  @Post('')
  createEvent(@Body() eventData: createEventDto) {
    return this.eventService.createEvent(eventData);
  }
}
