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
            <div id="tip-custom">
              <input className="tip-custom" placeholder="CUSTOM" />
            </div>
          </div>
          <div className="">
            <label>Number of People</label>
            <label className="error">Can't be zero</label>
          </div>
          <input className="numberPeople" id="people-input" />
        </div>
        <TipAmount />
      </div>
    </div>
  );
}
