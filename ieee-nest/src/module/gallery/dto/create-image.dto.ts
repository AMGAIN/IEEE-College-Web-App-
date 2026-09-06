import { ApiProperty } from '@nestjs/swagger';

export class createImageDto {
    @ApiProperty()
    src!: string

    @ApiProperty()
    alt!: string

    @ApiProperty()
    category!: string
}