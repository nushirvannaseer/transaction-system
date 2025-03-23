export interface Transaction {
  id: number;
  amount: number;
  type: "credit" | "debit";
  timestamp: string;
  createdAt: string;
  updatedAt: string;
}

export interface TransactionsResponse {
  status: string;
  message: string;
  data: {
    transactions: Transaction[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}
