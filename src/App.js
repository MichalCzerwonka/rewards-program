import './App.css';
import Transactions from "./components/Transactions/Transactions";
import Points from "./components/Points/Points";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Rewards Program</h1>
      </header>
      <main className="app-body">
        <Points />
        <Transactions />
      </main>
    </div>
  );
}

export default App;
