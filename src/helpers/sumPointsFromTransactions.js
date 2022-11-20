export const sumPointsFromTransactions = (transactions) =>
  transactions.length > 0 ?
    transactions.reduce((acc, current) => {
      acc += current.points
      return acc;
    }, 0) : 0;