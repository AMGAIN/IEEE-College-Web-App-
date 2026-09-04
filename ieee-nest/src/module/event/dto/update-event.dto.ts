import { ApiProperty } from "@nestjs/swagger";

export class updateEventDto {
    @ApiProperty({required: false})
    title?: string;

    @ApiProperty({required: false})
    category?: string;

    @ApiProperty({required: false})
    status?: string;

    @ApiProperty({required: false})
    date?: string;

    @ApiProperty({required: false})
    time?: string;

    @ApiProperty({required: false})
    venue?: string;

    @ApiProperty({required: false})
    description?: string;

    @ApiProperty({required: false})
    image?: string;
}