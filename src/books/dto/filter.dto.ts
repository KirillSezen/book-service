import { PartialType } from '@nestjs/swagger';
import { PaginationDto } from './pagination.dto';
import { IsOptional, IsString } from 'class-validator';

export class FilterDto extends PartialType(PaginationDto) {
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  search?: string;

  @IsOptional()
  @IsString({ message: 'Must be a string' })
  description?: string;

  @IsOptional()
  @IsString({ message: 'Must be a string' })
  sort?: string;

  @IsOptional()
  @IsString({ message: 'Must be a string' })
  order?: string;
}
