import "./App.css";
import TipAmount from "./Component/TipAmount";
import "./Component/TipCalculator";
import TipCalculator from "./Component/TipCalculator";

function App() {
  return (
    <div className="App">
      <TipCalculator />
      <TipAmount />
    </div>
  );
}

export default App;
