import { ApiProperty } from "@nestjs/swagger";

export class createNewsDto{
    @ApiProperty()
    title!: String;

    @ApiProperty()
    category!: String;

    @ApiProperty()
    date!: Date;

    @ApiProperty()
    excerpt!: String;

    @ApiProperty()
    content!: String;

    @ApiProperty()
    image!: String;
}