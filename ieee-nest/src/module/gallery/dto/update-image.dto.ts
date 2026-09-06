import { ApiProperty } from "@nestjs/swagger";

export class updateImageDto{
    @ApiProperty({required: false})
    src?: string

    @ApiProperty({required: false})
    alt?: string

    @ApiProperty({required: false})
    category?: string
}