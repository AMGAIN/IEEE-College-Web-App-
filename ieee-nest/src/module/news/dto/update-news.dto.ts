import { ApiProperty } from "@nestjs/swagger";

export class updateNewsDto {
    @ApiProperty({ required: false })
    title?: string;

    @ApiProperty({ required: false })
    category?: string;

    @ApiProperty({ required: false })
    date?: Date;

    @ApiProperty({ required: false })
    excerpt?: string;

    @ApiProperty({ required: false })
    content?: string;

    @ApiProperty({ required: false })
    image?: string;
}