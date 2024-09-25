import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FilterService } from './filter.service';
import { CacheModule } from '@nestjs/cache-manager';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { redisStore } from 'cache-manager-redis-store';

@Module({
  controllers: [BooksController],
  providers: [BooksService, FilterService, JwtStrategy],
  imports: [
    PrismaModule,
    CacheModule.register({
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      ttl: Number(process.env.REDIS_TTL),
    }),
    PassportModule,
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET',
      signOptions: {
        expiresIn: '2h',
      },
    }),
  ],
})
export class BooksModule {}
