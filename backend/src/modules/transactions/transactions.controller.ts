import { Request, Response } from "express";
import { transactionsService } from "./transactions.service";
import { sendSuccess, sendError } from "../../common/utils/response.utils";

export class TransactionsController {
  async createTransaction(req: Request, res: Response): Promise<void> {
    try {
      const transaction = await transactionsService.createTransaction(req.body);
      sendSuccess(res, transaction, "Transaction created successfully", 201);
    } catch (error) {
      sendError(
        res,
        "Failed to create transaction",
        500,
        error instanceof Error ? error.message : "Unknown error"
      );
    }
  }

  async getAllTransactions(req: Request, res: Response): Promise<void> {
    try {
      const page = parseInt(req.query.page as string, 10) || 1;
      const limit = parseInt(req.query.limit as string, 10) || 10;

      // Ensure valid pagination values
      const validatedPage = page > 0 ? page : 1;
      const validatedLimit = limit > 0 && limit <= 100 ? limit : 10;

      const result = await transactionsService.getAllTransactions(
        validatedPage,
        validatedLimit
      );
      sendSuccess(res, result, "Transactions fetched successfully");
    } catch (error) {
      sendError(
        res,
        "Failed to fetch transactions",
        500,
        error instanceof Error ? error.message : "Unknown error"
      );
    }
  }

  async getTransactionById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);

      if (isNaN(id)) {
        sendError(res, "Invalid transaction ID", 400);
        return;
      }

      const transaction = await transactionsService.getTransactionById(id);

      if (!transaction) {
        sendError(res, "Transaction not found", 404);
        return;
      }

      sendSuccess(res, transaction, "Transaction fetched successfully");
    } catch (error) {
      sendError(
        res,
        "Failed to fetch transaction",
        500,
        error instanceof Error ? error.message : "Unknown error"
      );
    }
  }
}

// Export a singleton instance
export const transactionsController = new TransactionsController();
