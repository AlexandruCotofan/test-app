import "./BankAccountsContainer.css";
import BankAccountItem from "../BankAccountItem/BankAccountItem.js";

function BankAccountsContainer() {
  return (
    <section className='bank-accounts-container'>
      <div className='bank-accounts-title'>
        <p>Bank Accounts</p>
        <button className='create-btn'>CREATE</button>
      </div>
      <BankAccountItem />
      <BankAccountItem />
      <BankAccountItem />
    </section>
  );
}

export default BankAccountsContainer;
