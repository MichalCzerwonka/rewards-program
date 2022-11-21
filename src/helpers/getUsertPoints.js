import { calculatePoints } from "./calculatePoints";
import { groupTransactionsByCustomers } from "./groupTransactionsByCustomers";
import { groupTransactionsByMonth } from "./groupTransactionsByMonth";
import { sumPointsFromTransactions } from "./sumPointsFromTransactions";

export const getUserPoints = (allTransactions) => {
  const transactionsWithPoints = allTransactions.map(({ amount, ...rest }) => ({
    ...rest,
    points: calculatePoints(amount),
  }));

  const transactionsByCustomers = groupTransactionsByCustomers(transactionsWithPoints);

  const transactionsByCustomerByMonth = transactionsByCustomers.map(({ transactions, ...rest }) => ({
    transactions: groupTransactionsByMonth(transactions),
    ...rest,
  }))

  return transactionsByCustomerByMonth.map(({ transactions, ...rest }) => ({
    transactions: transactions.map(sumPointsFromTransactions),
    ...rest
  }));
}