import { ApiProperty } from '@nestjs/swagger';

export class createImageDto {
    @ApiProperty()
    src!: String

    @ApiProperty()
    alt!: String

    @ApiProperty()
    category!: String
}