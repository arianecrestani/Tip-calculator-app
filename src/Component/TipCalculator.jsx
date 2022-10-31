export default function TipCalculator() {
  return (
    <div>
      <div>
        <img src={require("../images/logo.svg").default} alt="logo" />
      </div>
      <div className="tipCalculator">
        <div className="sectionOne">
          <label className="labelBill">Bill</label>
          <input className="billInput" id="bill-input" />
          <label>Select Tip %</label>
          <div className="tip">
            <div className="tip-5">5%</div>
            <div className="tip-10">10%</div>
            <div className="tip-15">15%</div>
            <div className="tip-25">25%</div>
            <div className="tip-50">50%</div>
            <div id="tip-custom">
              <input className="tip-custom" placeholder="CUSTOM" />
            </div>
          </div>
          <div className="secondSection">
            <label>Number of People</label>
            <label className="error">Can't be zero</label>
          </div>
          <input />
        </div>
        <div className="result">
          <div className="tip-amount">
            <div className="text">
              <p>Tip Amount</p>
              <p className="person">/person</p>
            </div>
            <div className="amount">$4.27</div>
          </div>
          <div className="total">
            <div className="text">
              <p>Tip Amount</p>
              <p className="person">/person</p>
            </div>
            <div className="amount">$4.27</div>
          </div>
        </div>
      </div>
    </div>
  );
}
