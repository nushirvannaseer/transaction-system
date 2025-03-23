import { Transaction } from "../../types/prisma.types";
import { TransactionDto } from "./dto";
import { TransactionsRepository } from "./transactions.repository";
const transactionsRepository = new TransactionsRepository();

export class TransactionsService {
  async createTransaction(
    transactionData: TransactionDto
  ): Promise<Transaction> {
    return transactionsRepository.create(transactionData);
  }

  async getAllTransactions(
    page = 1,
    limit = 10
  ): Promise<{
    transactions: Transaction[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  }> {
    const { transactions, total } = await transactionsRepository.findAll(
      page,
      limit
    );
    const totalPages = Math.ceil(total / limit);

    return {
      transactions,
      total,
      page,
      limit,
      totalPages,
    };
  }

  async getTransactionById(id: number): Promise<Transaction | null> {
    return transactionsRepository.findById(id);
  }
}

// Export a singleton instance
export const transactionsService = new TransactionsService();
