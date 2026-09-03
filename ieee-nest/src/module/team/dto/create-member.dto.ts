import { ApiProperty } from '@nestjs/swagger';

export class createMemberDto {
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