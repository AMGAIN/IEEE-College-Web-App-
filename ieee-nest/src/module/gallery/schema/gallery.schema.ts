import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type GalleryDocument = HydratedDocument<Gallery>;

@Schema()
export class Gallery{
    @Prop()
    src!: String;

    @Prop()
    alt!: String;

    @Prop()
    category!: String;
}

export const GallerySchema = SchemaFactory.createForClass(Gallery);