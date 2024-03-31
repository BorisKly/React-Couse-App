import CostItem from "./components/CostItem";

function App() {

  const costs = [
    {
    date: new Date(2021, 2, 12),
    description: "IPhone",
    amount: 999.99,
    },
    {
    date: new Date(2023, 4, 12),
    description: "MacBook",
    amount: 1999.99,
    },
    {
    date: new Date(2022, 5, 12),
    description: "IPad",
    amount: 1299.99,
    }
  ]

  return ( 
    <div> 
      <h1> Розпочнемо вивчення React! </h1>
      <CostItem date={costs[0].date} 
      description = {costs[0].description}
      amount = {costs[0].amount} >
      </CostItem>
        <CostItem date={costs[1].date} 
      description = {costs[1].description}
      amount = {costs[1].amount} >
      </CostItem>
        <CostItem date={costs[2].date} 
      description = {costs[2].description}
      amount = {costs[2].amount} >
    </CostItem>
      </div>
  );
}

export default App;
