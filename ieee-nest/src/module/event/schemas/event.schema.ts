import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EventDocument = HydratedDocument<Event>;

@Schema()
export class Event {
  @Prop({ required: true })
  title!: string;

  @Prop({ required: true })
  category!: string;

  @Prop({ required: true })
  status!: string;

  @Prop({ required: true })
  date!: string;

  @Prop()
  time!: string;

  @Prop()
  venue!: string;

  @Prop()
  description!: string;

  @Prop()
  image!: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);