import { useEffect, useState } from "react";
import { getTransactionsWithCustomers } from "../services/transactions";
import ErrorLoger from "../helpers/errorLogger";

export const useGetTransactions = () => {
  const [transactions, setTransactions] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState();

  useEffect(() => {
    getTransactionsWithCustomers()
      .then((data) => {
        setTransactions(data)
      })
      .catch(e => {
        ErrorLoger(e);
        setIsError(e);
      })
      .finally(() => setIsLoading(false))
  }, [])

  return {
    transactions,
    isLoading,
    isError,
    isEmpty: !transactions.length
  }
}