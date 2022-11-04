import '../App'
import TipAmount from './TipAmount';
export default function TipCalculator() {
  return (
    <div className="App">
      <div className="logo">
        <img src={require("../images/logo.svg").default} alt="logo" />
      </div>
      <div className="tipCalculator">
        <div className="sectionOne">
          <label className="labelBill">Bill</label>
          <input className="billInput" id="bill-input" />
          <label>Select Tip %</label>
          <div id="tip">
            <div className="tips tip-5">5%</div>
            <div className="tips tip-10">10%</div>
            <div className="tips tip-15 active-tip">15%</div>
            <div className="tips tip-25">25%</div>
            <div className="tips tip-50">50%</div>
            <div className="tip-custom">
              <input id="tip-custom" placeholder="CUSTOM" />
            </div>
          </div>
          <div className="errorLabel">
            <label>Number of People</label>
            <label className="error">Can't be zero</label>
          </div>
          <input className="billInput" id="people-input" />
        </div>
        <TipAmount />
      </div>
    </div>
  );
}
