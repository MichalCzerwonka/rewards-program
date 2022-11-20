import { getMonthNumber } from "./getMonthNumber";


export const groupTransactionsByMonth = (transactions, howManyMonths = 3) => {
  const months = new Array(howManyMonths).fill(0).map((_, index) => getMonthNumber(index));
  const initialArray = new Array(howManyMonths).fill([]);

  return transactions.reduce((acc, currentTransaction) => {
    const transactionDate = new Date(currentTransaction.date);

    for (let i = 0; i < howManyMonths; i++) {
      if (months[i] === transactionDate.getMonth()) {
        acc[i] = [...acc[i], currentTransaction]
      }
    }

    return acc;
  }, initialArray)
}