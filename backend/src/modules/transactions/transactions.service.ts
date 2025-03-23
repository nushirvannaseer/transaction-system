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

  async getAllTransactions(): Promise<Transaction[]> {
    return transactionsRepository.findAll();
  }

  async getTransactionById(id: number): Promise<Transaction | null> {
    return transactionsRepository.findById(id);
  }
}

// Export a singleton instance
export const transactionsService = new TransactionsService();
