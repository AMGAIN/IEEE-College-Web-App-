import { ApiProperty } from "@nestjs/swagger";

export class RegisterDto{

    @ApiProperty()
    name!: String
    
    @ApiProperty()
    email!: String

    @ApiProperty()
    password!: String

}