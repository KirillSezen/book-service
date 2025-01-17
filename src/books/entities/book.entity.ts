import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class BookEntity {
  @ApiProperty({
    description: 'The unique identifier of the book',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Book name',
    example: 'It',
  })
  name: string;

  @IsOptional()
  @ApiProperty({
    description: 'Book price',
    example: 9.99,
  })
  price: number;

  @ApiProperty({
    description: 'Book author',
    example: 'Steven King',
  })
  author: string;

  @ApiProperty({
    description: 'Book genre',
    example: 'horror',
  })
  genre: string;

  @ApiProperty({
    description: 'Order description',
    example: 'Special order description',
  })
  description?: string;

  @ApiProperty({
    description: 'The date and time when the order was created',
    example: '2024-07-21T12:00:00Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'The date and time when the order was last updated',
    example: '2024-07-21T15:30:00Z',
  })
  updatedAt: Date;
}
