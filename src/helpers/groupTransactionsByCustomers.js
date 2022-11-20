export const groupTransactionsByCustomers = (transactions) =>
  Object.values(transactions.reduce((acc, current) => {
    return {
      ...acc,
      [current.customerId]: {
        customer: current.customer,
        transactions: [...(acc[current.customerId]?.transactions ? acc[current.customerId]?.transactions : []), current]
      }
    }
  }, {}))
