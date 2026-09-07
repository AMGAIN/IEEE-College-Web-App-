import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type NewsDocument = HydratedDocument<News>;

@Schema()
export class News{
    @Prop({required: true})
    title!: string;

    @Prop({required: true})
    category!: string;

    @Prop({required: true})
    date!: string;

    @Prop()
    excerpt!: string;

    @Prop()
    content!: string;

    @Prop()
    image!: string;
}

export const NewsSchema = SchemaFactory.createForClass(News);