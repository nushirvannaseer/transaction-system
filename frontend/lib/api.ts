"use server";

import { Transaction, TransactionsResponse } from "./types";

const API_URL = process.env.API_URL;

export async function fetchTransactions(): Promise<Transaction[]> {
  const response = await fetch(`${API_URL}/transactions`);

  if (!response.ok) {
    throw new Error(`Failed to fetch transactions: ${response.statusText}`);
  }

  const result: TransactionsResponse = await response.json();

  if (result.status !== "success") {
    throw new Error(`API error: ${result.message}`);
  }

  return result.data;
}
