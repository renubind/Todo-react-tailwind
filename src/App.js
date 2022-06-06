import "./App.css";
// import Todo from "./Todos/Todo";
import Header from "./component/Header";
import Balance from "./component/Balance";
import AddTransaction from "./component/AddTransaction";
import TransactionList from "./component/TransactionList";

function App() {
  return (
    <div className="mx-auto">
      {/* <Todo/> */}
      <Header />
      <div >
        <Balance />
        <div className="flex  justify-center text-center">
          
          <AddTransaction />
        
          <TransactionList />
        </div>
      </div>
    </div>
  );
}

export default App;
