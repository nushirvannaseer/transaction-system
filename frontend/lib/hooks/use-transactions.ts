"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchTransactions } from "../api";

export function useTransactions() {
  return useQuery({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
  });
}
