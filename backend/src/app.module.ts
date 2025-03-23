import { Router } from "express";
import { TransactionsModule } from "./modules/transactions/transactions.module";
import { PrismaModule } from "./prisma/prisma.module";

// Create a root router
const rootRouter = Router();

// Register all module routers
rootRouter.use("/transactions", TransactionsModule.router);

// Export the app module
export const AppModule = {
  router: rootRouter,
  modules: {
    transactions: TransactionsModule,
    prisma: PrismaModule,
  },
};
