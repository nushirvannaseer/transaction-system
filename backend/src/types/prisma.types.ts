// This file centralizes types related to Prisma models

export interface Transaction {
  id: number;
  amount: number;
  type: string;
  timestamp: Date;
  createdAt: Date;
  updatedAt: Date;
}
