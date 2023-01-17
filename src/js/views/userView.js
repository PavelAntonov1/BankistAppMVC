const containerApp = document.querySelector('.app');

const btnLogin = document.querySelector('.login__btn');
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');

const btnTransfer = document.querySelector('.form__btn--transfer');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');

const btnLoan = document.querySelector('.form__btn--loan');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');

const btnClose = document.querySelector('.form__btn--close');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

export class UserView {
  static _user;

  loginUser(user) {
    UserView.prototype._user = user;
  }

  render(sort = false) {
    const container = document.querySelector('.movements');
    container.innerHTML = '';

    container.innerHTML = !sort
      ? this._generateString()
      : this._generateString(true);
  }

  showInterface() {
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
  }

  hideInterface() {
    containerApp.style.opacity = 0;
  }

  addHandlerLogin(handler) {
    btnLogin.addEventListener('click', function (e) {
      e.preventDefault();
      handler(inputLoginUsername.value, +inputLoginPin.value);
    });
  }

  addHandlerTransfer(handler) {
    btnTransfer.addEventListener('click', function (e) {
      e.preventDefault();
      handler(+inputTransferAmount.value, inputTransferTo.value);
      inputTransferAmount.value = inputTransferTo.value = '';
    });
  }

  addHandlerLoan(handler) {
    btnLoan.addEventListener('click', function (e) {
      e.preventDefault();
      handler(+inputLoanAmount.value);
      inputLoanAmount.value = '';
    });
  }

  addHandlerClose(handler) {
    btnClose.addEventListener('click', function (e) {
      e.preventDefault();
      handler(+inputClosePin.value, inputCloseUsername.value);
      inputClosePin.value = inputCloseUsername.value = '';
    });
  }
}

export default new UserView();
