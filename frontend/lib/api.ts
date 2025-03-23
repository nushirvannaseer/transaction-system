"use server";

import { Transaction, TransactionsResponse } from "./types";

const API_URL = process.env.API_URL;

export async function fetchTransactions({
  page = 1,
  limit = 10,
}: {
  page?: number;
  limit?: number;
} = {}) {
  const response = await fetch(
    `${API_URL}/transactions?page=${page}&limit=${limit}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch transactions: ${response.statusText}`);
  }

  const result: TransactionsResponse = await response.json();

  if (result.status !== "success") {
    throw new Error(`API error: ${result.message}`);
  }

  return result.data;
}

export async function createTransaction(transaction: Partial<Transaction>) {
  console.log(transaction);
  const response = await fetch(`${API_URL}/transactions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transaction),
  });

  if (!response.ok) {
    throw new Error(`Failed to create transaction: ${response.statusText}`);
  }

  return await response.json();
}
