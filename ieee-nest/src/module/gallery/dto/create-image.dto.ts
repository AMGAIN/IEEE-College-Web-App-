import { ApiProperty } from '@nestjs/swagger';

export class createImageDto {
    @ApiProperty()
    alt!: string

    @ApiProperty()
    category!: string
}