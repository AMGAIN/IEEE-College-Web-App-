import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { EventService } from './event.service';
import { createEventDto } from './dto/create-event.dto';
import { updateEventDto } from './dto/update-event.dto';

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

  @Put(':id')
  updateEvent(
    @Param('id') id:string,
    @Body() eventData: updateEventDto
  ) {
    return this.eventService.updateEvent(id, eventData);
  }
}
