import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateBookDto {
  @ApiProperty({
    description: 'The name of the book',
    example: 'It',
    minLength: 2,
    maxLength: 30,
  })
  @IsString({ message: 'Must be a string' })
  @MinLength(2)
  @MaxLength(30)
  @IsNotEmpty({ message: 'Is Required' })
  name: string;

  @ApiProperty({
    description: 'The price of the book',
    example: 9.99,
  })
  @IsNumber({}, { message: 'Must be a number' })
  @IsNotEmpty({ message: 'Is Required' })
  price: number;

  @ApiProperty({
    description: 'The author of the book',
    example: 'Steven King',
    minLength: 5,
    maxLength: 300,
  })
  @MinLength(5)
  @MaxLength(300)
  @IsString({ message: 'Must be a string' })
  author: string;

  @ApiProperty({
    description: 'The genre of the book',
    example: 'horror',
    minLength: 5,
    maxLength: 300,
  })
  @MinLength(5)
  @MaxLength(300)
  @IsString({ message: 'Must be a string' })
  genre: string;

  @ApiProperty({
    description: 'The description of the book',
    example: 'This is the description of book.',
    minLength: 5,
    maxLength: 300,
  })
  @MinLength(5)
  @MaxLength(300)
  @IsString({ message: 'Must be a string' })
  description?: string;

  orderId: number;
}
