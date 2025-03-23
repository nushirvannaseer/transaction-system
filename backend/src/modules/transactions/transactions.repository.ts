import { prismaService } from "../../prisma/prisma.service";
import { Transaction } from "../../types/prisma.types";

export class TransactionsRepository {
  async create(data: {
    amount: number;
    type: string;
    timestamp?: Date;
  }): Promise<Transaction> {
    return prismaService.getClient().transaction.create({
      data,
    });
  }

  async findAll(
    page = 1,
    limit = 10
  ): Promise<{ transactions: Transaction[]; total: number }> {
    const skip = (page - 1) * limit;

    const [transactions, total] = await Promise.all([
      prismaService.getClient().transaction.findMany({
        orderBy: {
          timestamp: "desc",
        },
        skip,
        take: limit,
      }),
      prismaService.getClient().transaction.count(),
    ]);

    return { transactions, total };
  }

  async findById(id: number): Promise<Transaction | null> {
    return prismaService.getClient().transaction.findUnique({
      where: { id },
    });
  }
}

export const transactionsRepository = new TransactionsRepository();
