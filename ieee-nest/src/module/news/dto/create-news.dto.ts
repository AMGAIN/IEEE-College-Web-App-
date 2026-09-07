import { ApiProperty } from "@nestjs/swagger";

export class createNewsDto{
    @ApiProperty()
    title!: string;

    @ApiProperty()
    category!: string;

    @ApiProperty()
    date!: string;

    @ApiProperty()
    excerpt!: string;

    @ApiProperty()
    content!: string;
}