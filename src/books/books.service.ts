import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FilterDto } from './dto/filter.dto';
import { FilterService } from './filter.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class BooksService {
  constructor(
    private prisma: PrismaService,
    private filterService: FilterService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  async create(createBookDto: CreateBookDto) {
    const result = await this.prisma.book.create({
      data: { ...createBookDto },
    });
    return result;
  }

  async findAll(filterDto: FilterDto) {
    const cacheKey = `books:${JSON.stringify(filterDto)}`;

    const cachedBooks = await this.cacheManager.get(cacheKey);
    if (cachedBooks) {
      return cachedBooks;
    }

    const books = await this.filterService.filterBooks(filterDto);

    await this.cacheManager.set(cacheKey, books, 180);

    return books;
  }

  async findOne(id: number) {
    const book = await this.prisma.book.findUnique({ where: { id } });
    if (!book) {
      throw new HttpException(
        'book with such id doesnt exist',
        HttpStatus.BAD_REQUEST,
      );
    }
    return book;
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const book = await this.prisma.book.findUnique({ where: { id } });
    if (!book) {
      throw new HttpException(
        'book with such id doesnt exist',
        HttpStatus.BAD_REQUEST,
      );
    }
    const result = await this.prisma.book.update({
      where: { id },
      data: updateBookDto,
    });
    return result;
  }

  async remove(id: number) {
    const book = await this.prisma.book.findUnique({ where: { id } });
    if (!book) {
      throw new HttpException(
        'book with such id doesnt exist',
        HttpStatus.BAD_REQUEST,
      );
    }
    const result = await this.prisma.book.delete({
      where: { id },
    });
    return result;
  }
}
