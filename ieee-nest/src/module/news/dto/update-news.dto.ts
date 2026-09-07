import { ApiProperty } from "@nestjs/swagger";

export class updateNewsDto {
    @ApiProperty({ required: false })
    title?: string;

    @ApiProperty({ required: false })
    category?: string;

    @ApiProperty({ required: false })
    date?: string;

    @ApiProperty({ required: false })
    excerpt?: string;

    @ApiProperty({ required: false })
    content?: string;

}