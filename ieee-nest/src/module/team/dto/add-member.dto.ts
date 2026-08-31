import { ApiProperty } from '@nestjs/swagger';

export class addMemberDto {
    @ApiProperty()
    name!: String

    @ApiProperty()
    position!: String

    @ApiProperty()
    department!: String

    @ApiProperty()
    email!: String

    @ApiProperty()
    image!: String
}