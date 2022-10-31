import './App.css'
import "./tipCalculator.css";
import "./tipAmount.css";
import TipAmount from "./Component/TipAmount";
import "./Component/TipCalculator";
import TipCalculator from "./Component/TipCalculator";

function App() {
  return (
    <div className="AppStyle">
      <TipCalculator />
      <TipAmount />
    </div>
  );
}

export default App;
