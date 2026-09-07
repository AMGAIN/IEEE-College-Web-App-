import { Controller, Get, Post, Put, Body, Param, Delete } from '@nestjs/common';
import { EventService } from './event.service';
import { createEventDto } from './dto/create-event.dto';
import { updateEventDto } from './dto/update-event.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) { }

  @Get('')
  @ApiOperation({ summary: 'Get all Event List'})
  getEvent() {
    return this.eventService.getEvent();
  }

  @Post('')
  @ApiOperation({ summary: 'Create new Event'})
  createEvent(@Body() eventData: createEventDto) {
    return this.eventService.createEvent(eventData);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update existing Event'})
  updateEvent(
    @Param('id') id:string,
    @Body() eventData: updateEventDto
  ) {
    return this.eventService.updateEvent(id, eventData);
  }

  @Delete(':id')
  @ApiOperation({ summary: ' Delete Event'})
  deleteEvent( @Param('id') id: string){
    return this.eventService.deleteEvent(id);
  }

}
