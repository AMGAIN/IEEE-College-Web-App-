import { ApiProperty } from "@nestjs/swagger";

export class updateMemberDto{
    @ApiProperty({required: false})
    name?: String

    @ApiProperty({required: false})
    position?: String

    @ApiProperty({required: false})
    department?: String

    @ApiProperty({required: false})
    email?: String

    @ApiProperty({required: false})
    image?: String
}