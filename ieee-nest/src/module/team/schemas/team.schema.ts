import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type MemberDocument = HydratedDocument<Member>;

@Schema()
export class Member{
    @Prop({required: true})
    name!: String

    @Prop({required: true})
    position!: String

    @Prop({required: true})
    department!: String

    @Prop({required: true})
    email!: String

    @Prop({required: true})
    image!: String
}

export const MemberSchema = SchemaFactory.createForClass(Member);