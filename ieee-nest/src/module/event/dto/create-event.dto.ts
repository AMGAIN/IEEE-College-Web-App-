import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty()
  title!: string;

  @ApiProperty()
  category!: string;

  @ApiProperty()
  status!: string;

  @ApiProperty()
  date!: string;

  @ApiProperty()
  time!: string;

  @ApiProperty()
  venue!: string;

  @ApiProperty()
  description!: string;

  @ApiProperty()
  image!: string;
}