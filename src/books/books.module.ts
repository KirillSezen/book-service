import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FilterService } from './filter.service';
import { JwtStrategy } from 'mypackage/dist/strategeis/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { CommonConfigModule } from 'mypackage/dist/configs/configuration.module';
import { CommonCacheConfigModule } from 'mypackage/dist/configs/cache-config.module';
import { QueueModule } from 'mypackage/dist/queues/queue/queue.module';

@Module({
  controllers: [BooksController],
  providers: [BooksService, FilterService, JwtStrategy],
  imports: [
    PrismaModule,
    PassportModule,
    CommonConfigModule,
    CommonCacheConfigModule,
    QueueModule,
  ],
})
export class BooksModule {}
