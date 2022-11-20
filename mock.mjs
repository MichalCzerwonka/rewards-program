import { faker } from '@faker-js/faker';
import * as fs from 'fs';

const CUSTOMERS_COUNT = 100;
const TRANSACTION_COUNT = 1000;

const randomIndex = () => Math.floor((Math.random() * CUSTOMERS_COUNT))

const generateCustomers = () => {
  const customers = [];

  for (let i = 0; i < CUSTOMERS_COUNT; i++) {
    customers.push({
      id: faker.random.alphaNumeric(10),
      fullName: faker.name.fullName(),
    })
  }

  return customers;
}

const generatedCustomers = generateCustomers();

const generateTransactions = () => {
  const transactions = [];

  for (let i = 0; i < TRANSACTION_COUNT; i++) {
    transactions.push({
      id: faker.random.alphaNumeric(10),
      product: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
      customerId: generatedCustomers[randomIndex()].id,
      amount: faker.finance.amount(1, 1000),
      date: faker.date.between('2022-08-19T00:00:00.000Z', '2022-11-19T00:00:00.000Z')
    })
  }

  return transactions;
}


try {
  fs.writeFileSync('src/data/customers.json', JSON.stringify(generatedCustomers))
  console.log(`${CUSTOMERS_COUNT} customers generated successfully!`);
} catch (err) {
  console.error("Sorry, failed to generate customers", err);
}

try {
  fs.writeFileSync('src/data/transactions.json', JSON.stringify(generateTransactions()))
  console.log(`${TRANSACTION_COUNT} transactions generated successfully!`);
} catch (err) {
  console.error("Sorry, failed to generate transactions", err);
}