import Loader from "../Loader/Loader";
import Table from "../Table/Table";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { formatDate } from "../../helpers/formatDate";

const Transactions = () => {
  const { transactions, isLoading, isEmpty } = useGetTransactions()

  return <div>
    <h3>Transactions</h3>
    {isLoading && <Loader />}
    {!isLoading && isEmpty && "No transactions!"}
    {!isLoading && !isEmpty &&
      <Table
        headers={['ID', 'Product', 'Customer', 'Amount', 'Date']}
        rows={transactions.map(({ id, product, customer, amount, date }) => [
          id, product, customer.fullName, amount, formatDate(date)
        ])}
      />
    }
  </div>
}

export default Transactions;