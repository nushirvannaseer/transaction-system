"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTransactions } from "../api";

export function useTransactions(initialPage = 1, initialLimit = 10) {
  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);

  const query = useQuery({
    queryKey: ["transactions", page, limit],
    queryFn: () => fetchTransactions({ page, limit }),
  });

  return {
    ...query,
    page,
    limit,
    setPage,
    setLimit,
  };
}
