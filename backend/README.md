# Transaction Logging System (Backend)

A REST API to handle transaction logging with Node.js, Express, Prisma ORM, and PostgreSQL, using a NestJS-like modular architecture.

## Project Structure

This project follows a NestJS-like structure while using Express.js:

```
├── prisma/               # Prisma-specific files
│   ├── migrations/       # Database migrations
│   ├── schema.prisma     # Prisma schema file
├── src/                  # Application source code
│   ├── common/           # Shared utilities
│   │   ├── errors/       # Error classes
│   │   ├── middlewares/  # Express middlewares
│   │   └── utils/        # Utility functions
│   ├── config/           # Configuration
│   ├── modules/          # Feature modules
│   │   ├── transactions/ # Transactions module
│   │   │   ├── dto/      # Data Transfer Objects
│   │   │   ├── transactions.controller.ts
│   │   │   ├── transactions.module.ts
│   │   │   ├── transactions.repository.ts
│   │   │   ├── transactions.service.ts
│   ├── prisma/           # Prisma service
│   │   ├── prisma.module.ts
│   │   ├── prisma.service.ts
│   ├── types/            # Type definitions
│   ├── app.controller.ts # Root controller
│   ├── app.module.ts     # Root module
│   ├── app.service.ts    # Root service
│   ├── main.ts           # Entry point
├── .env                  # Environment variables
├── .env.example          # Example environment file
├── package.json          # Dependencies and scripts
└── tsconfig.json         # TypeScript config
```

## Tech Stack

- **Node.js & Express.js**: Core backend framework
- **TypeScript**: For static typing
- **Prisma ORM**: For database access and migrations
- **PostgreSQL**: Database
- **Joi**: For request validation
- **PNPM**: Package management

## Setup Instructions

1. **Clone the repository**

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Configure environment variables**

   - Copy `.env.example` to `.env`
   - Update `DATABASE_URL` with your PostgreSQL connection string:
     ```
     DATABASE_URL="postgresql://username:password@localhost:5432/transaction_db?schema=public"
     ```

4. **Run database migrations**

   ```bash
   pnpm prisma:migrate
   ```

5. **Generate Prisma client**

   ```bash
   pnpm prisma:generate
   ```

6. **Start the development server**
   ```bash
   pnpm dev
   ```

## API Endpoints

### Transactions

| Method | Endpoint              | Description                                                   |
| ------ | --------------------- | ------------------------------------------------------------- |
| POST   | /api/transactions     | Add a new transaction (amount, type: credit/debit, timestamp) |
| GET    | /api/transactions     | Fetch all transactions                                        |
| GET    | /api/transactions/:id | Fetch a specific transaction by ID                            |

## Request Examples

### Add a transaction

```bash
curl -X POST http://localhost:3000/api/transactions \
  -H "Content-Type: application/json" \
  -d '{"amount": 100.50, "type": "credit"}'
```

### Get all transactions

```bash
curl http://localhost:3000/api/transactions
```

### Get transaction by ID

```bash
curl http://localhost:3000/api/transactions/1
```
