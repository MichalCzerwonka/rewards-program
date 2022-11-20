import transactions from './../data/transactions.json';
import { getCustomers } from "./customers";
import { delay } from "./helpers";

export const getTransactions = async () => {
  await delay();
  return transactions
};

export const getTransactionsWithCustomers = async () => {
  const transactions = await getTransactions();
  const customers = await getCustomers();

  return transactions.map((transaction) => {
    const customer = customers.find(({ id }) => id === transaction.customerId)
    return { ...transaction, customer };
  });
}