# Book Order Application (book-service)

## Краткое описание

REST API сервиса книг приложения для аренды книг на NestJS. CRUD операции для книг, создание, получение, изменение, удаление.

## Стек

- NestJS --> фреймворк
- PostgreSQL + Prisma --> база данных
- @nestjs/passport (passport-jwt) --> аутентификация
- class-validator / class-transformer --> валидация запросов
- Docker --> контейнеризация
- BullMQ --> брокер сообщений
- Redis --> кэширование

## Запуск

### Локально

```bash
npm install
cp .env.example .env   # заполнить переменные DATABASE_URL и JWT-секрет
npx prisma migrate dev
npm run start:dev
```

### Через Docker
docker-compose находится в репозитории infrastructure, поднимает все сервисы приложения.

```bash
cp .env.example .env   # заполнить переменные DATABASE_URL и JWT-секрет
docker compose up -d --build
```

Приложение поднимется на `http://localhost:3003`.
Swagger документация на `http://localhost:3003/api`.