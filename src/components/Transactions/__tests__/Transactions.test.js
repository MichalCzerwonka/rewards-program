import { render, screen } from "@testing-library/react"
import Transactions from "../Transactions";
import * as hooks from "../../../hooks/useGetTransactions";
import { TRANSACTIONS_MOCK } from "../../../mocks/transactions";


const setup = () => render(<Transactions />)

describe('Transactions component', () => {
  test('should render transactions with loader', () => {
    setup();

    expect(screen.getByTestId('loader')).toBeVisible();
  })

  test('should render list of transactions', async () => {
    jest.spyOn(hooks, 'useGetTransactions').mockImplementation(() => ({
      isLoading: false,
      transactions: TRANSACTIONS_MOCK
    }));
    setup();

    const transactions = await screen.findAllByTestId('table-row');

    expect(transactions).toHaveLength(TRANSACTIONS_MOCK.length);
  })
});
