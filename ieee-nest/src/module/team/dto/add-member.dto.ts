import { ApiProperty } from '@nestjs/swagger';

export class addMemberDto {
    @ApiProperty()
    name!: String

    @ApiProperty()
    postition!: String

    @ApiProperty()
    department!: String

    @ApiProperty()
    email!: String

    @ApiProperty()
    image!: String
}