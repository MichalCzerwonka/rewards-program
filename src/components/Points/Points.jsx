import Loader from "../Loader/Loader";
import Table from "../Table/Table";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { groupTransactionsByCustomers } from "../../helpers/groupTransactionsByCustomers";
import { groupTransactionsByMonth } from "../../helpers/groupTransactionsByMonth";
import { calculatePoints } from "../../helpers/calculatePoints";
import { sumPointsFromTransactions } from "../../helpers/sumPointsFromTransactions";

const Points = () => {
  const { transactions: allTransactions, isLoading, isEmpty } = useGetTransactions()

  const transactionsWithPoints = allTransactions.map(({ amount, ...rest }) => ({
    ...rest,
    points: calculatePoints(amount),
  }));

  const transactionsByCustomers = groupTransactionsByCustomers(transactionsWithPoints);

  const transactionsByCustomerByMonth = transactionsByCustomers.map(({ transactions, ...rest }) => ({
    transactions: groupTransactionsByMonth(transactions),
    ...rest,
  }))

  const customerTransactionsWithPoints = transactionsByCustomerByMonth.map(({ transactions, ...rest }) => ({
    transactions: transactions.map(sumPointsFromTransactions),
    ...rest
  }));


  return <div>
    <h3>Points</h3>
    {isLoading && <Loader />}
    {!isLoading && isEmpty && "No transactions!"}
    {!isLoading && !isEmpty &&
      <Table
        headers={['No', 'Customer', '2 Month ago', '1 Month ago ', 'This Month', 'Sum']}
        rows={customerTransactionsWithPoints.map(({ customer, transactions }, index) => [
          index + 1,
          customer.fullName,
          transactions[2],
          transactions[1],
          transactions[0],
          transactions[0] + transactions[1] + transactions[2]
        ])}
      />
    }
  </div>
}

export default Points;