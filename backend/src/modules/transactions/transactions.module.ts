import { transactionsController } from "./transactions.controller";
import { transactionsService } from "./transactions.service";
import { transactionsRepository } from "./transactions.repository";
import { Router } from "express";
import { validateRequest } from "../../common/middlewares/validation.middleware";
import { CreateTransactionDto } from "./dto";

// Create router
const transactionsRouter = Router();

// Define routes
transactionsRouter.post(
  "/",
  validateRequest(CreateTransactionDto),
  (req, res) => transactionsController.createTransaction(req, res)
);

transactionsRouter.get("/", (req, res) =>
  transactionsController.getAllTransactions(req, res)
);

transactionsRouter.get("/:id", (req, res) =>
  transactionsController.getTransactionById(req, res)
);

// Export the module
export const TransactionsModule = {
  router: transactionsRouter,
  providers: {
    controller: transactionsController,
    service: transactionsService,
    repository: transactionsRepository,
  },
};
