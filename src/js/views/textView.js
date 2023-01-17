import { UserView } from './userView.js';

const labelWelcome = document.querySelector('.welcome');
const labelBalance = document.querySelector('.balance__value');

const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');

class TextView extends UserView {
  setTextViews() {
    labelWelcome.textContent = `Wellcome back, ${
      this._user.owner.split(' ')[0]
    }`;
    labelBalance.textContent = `${this._user.balance.toFixed(2)}€`;

    // Displaying Summary
    labelSumIn.textContent = `${this._user.summary.income.toFixed(2)}€`;
    labelSumOut.textContent = `${this._user.summary.out.toFixed(2)}€`;
    labelSumInterest.textContent = `${this._user.summary.interest.toFixed(2)}€`;
  }
}

export default new TextView();
