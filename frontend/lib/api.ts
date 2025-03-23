"use server";

import { TransactionsResponse } from "./types";

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
