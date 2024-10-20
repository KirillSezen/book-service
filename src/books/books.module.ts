import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FilterService } from './filter.service';
import { JwtStrategy } from 'infrastructure/dist/strategeis/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { CommonConfigModule } from 'infrastructure/dist/configs/configuration';
import { CommonCacheConfigModule } from 'infrastructure/dist/configs/cache-config';
import { BullModule } from '@nestjs/bull';

@Module({
  controllers: [BooksController],
  providers: [BooksService, FilterService, JwtStrategy],
  imports: [
    PrismaModule,
    PassportModule,
    CommonConfigModule,
    CommonCacheConfigModule,
    BullModule.registerQueue({
      name: 'order-queue',
    }),
  ],
})
export class BooksModule {}
