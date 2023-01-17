import "../App";

import { useState } from "react";

export default function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [peopleNumber, setPeopleNumber] = useState(1);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const [tip, setTip] = useState(1.10);
  // const [numberOfPeople, setNumberOfPeople] = useState(0);

  const updateValueBill = (e) => {
    setBill(e.target.value);
    handleClick(e.target.value, peopleNumber);
  };
  const updateNumOfPeople = (e) => {
    setPeopleNumber(e.target.value);
    handleClick(bill, e.target.value);
  };

  const handleClick = (bill, peopleNumber) => {
    let total = bill * tip
    let totalTip = total - bill
    const amount = total / peopleNumber
    setTotalPerPerson(amount);
    const tipPerPerson = totalTip / peopleNumber
    
    // let total = (bill * tipAmount) / peopleNumber;
    setTipPerPerson(tipPerPerson);
  };
  // bill / number of people = amount

  // 100 / 2 = 50

  // 50 + 10% = 55 por person + tip

  // amount - number of % = tip
  return (
    <div className="App">
      <div className="logo">
        <img src={require("../images/logo.svg").default} alt="logo" />
      </div>
      <div className="tipCalculator">
        <div className="sectionOne">
          <label className="labelBill">Bill</label>
          <input
            onChange={updateValueBill}
            className="billInput"
            id="bill-input"
          />
          {bill}
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
          <div className="peopleLabel">
            <label>Number of People</label>
            <label className="error">Can't be zero</label>
          </div>
          <input
            className="billInput"
            id="people-input"
            onChange={updateNumOfPeople}
          />
          <p>{peopleNumber}</p>
        </div>

        <div className="result">
          <div className="tip-amount">
            <div className="text">
              <p>Tip Amount</p>
              <p className="person">/person</p>
            </div>
            <p className="amount">
              {tipPerPerson}
            </p>
          </div>
          <div className="total">
            <div className="text">
              <p>Total</p>
              <p className="person">/person</p>
            </div>
            <div className="amount" id="total-amount">
              {totalPerPerson}
            </div>
          </div>
          <div className="reset">Reset</div>
        </div>
      </div>
    </div>
  );
}
