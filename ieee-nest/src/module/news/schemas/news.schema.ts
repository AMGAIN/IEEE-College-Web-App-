import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type NewsDocument = HydratedDocument<News>;

@Schema()
export class News{
    @Prop({required: true})
    title!: String;

    @Prop({required: true})
    category!: String;

    @Prop({required: true})
    date!: Date;

    @Prop()
    excerpt!: String;

    @Prop()
    content!: String;

    @Prop()
    image!: String;
}

export const NewsSchema = SchemaFactory.createForClass(News);