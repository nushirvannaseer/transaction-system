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

  async findAll(): Promise<Transaction[]> {
    return prismaService.getClient().transaction.findMany({
      orderBy: {
        timestamp: "desc",
      },
    });
  }

  async findById(id: number): Promise<Transaction | null> {
    return prismaService.getClient().transaction.findUnique({
      where: { id },
    });
  }
}

export const transactionsRepository = new TransactionsRepository();
