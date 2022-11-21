import Loader from "../Loader/Loader";
import Table from "../Table/Table";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { getUserPoints } from "../../helpers/getUsertPoints";

const Points = () => {
  const { transactions: allTransactions, isLoading, isEmpty } = useGetTransactions()
  const customerTransactionsWithPoints = getUserPoints(allTransactions);

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