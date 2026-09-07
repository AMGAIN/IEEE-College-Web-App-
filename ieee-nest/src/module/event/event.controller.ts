import { Controller, Get, Post, Put, Body, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { EventService } from './event.service';
import { createEventDto } from './dto/create-event.dto';
import { updateEventDto } from './dto/update-event.dto';
import { ApiOperation, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) { }

  @Get('')
  @ApiOperation({ summary: 'Get all Event List' })
  getEvent() {
    return this.eventService.getEvent();
  }

  @Post('')
  @ApiOperation({ summary: 'Create new Event' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string' },
        category: { type: 'string' },
        status: { type: 'string' },
        date: { type: 'string' },
        time: { type: 'string' },
        venue: { type: 'string' },
        description: { type: 'string' },
        image: { type: 'string', format: 'binary' },
      },
    },
  })
  @UseInterceptors(
    FileInterceptor('image', {
      dest: './uploads/event',
    }),
  )
  createEvent(@Body() eventData: createEventDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    return this.eventService.createEvent(eventData, file);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update existing Event' })
  updateEvent(
    @Param('id') id: string,
    @Body() eventData: updateEventDto
  ) {
    return this.eventService.updateEvent(id, eventData);
  }

  @Delete(':id')
  @ApiOperation({ summary: ' Delete Event' })
  deleteEvent(@Param('id') id: string) {
    return this.eventService.deleteEvent(id);
  }

}
