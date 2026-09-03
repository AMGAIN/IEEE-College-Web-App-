import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event, EventDocument } from './schemas/event.schema'
import { createEventDto } from './dto/create-event.dto';

@Injectable()
export class EventService {
    constructor(
        @InjectModel(Event.name)
        private eventModel: Model<EventDocument>
    ){}

    async getEvent() {
        return this.eventModel.find().exec();
    }

    async createEvent(eventData: createEventDto) {
        const newEvent = new this.eventModel(eventData);
        return newEvent.save();
    }
}
