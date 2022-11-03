import '../App'
export default function TipAmount() {
  return (
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
        <div className="amount" id="total-amount">
          $4.27
        </div>
        <div className="reset">Reset</div>
      </div>
    </div>
  );
}
