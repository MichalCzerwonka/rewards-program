import customers from './../data/customers.json';
import { delay } from "./helpers";

export const getCustomers = async () => {
  await delay();
  return customers;
}