import * as model from './model.js';
import movementsView from './views/movementsView.js';
import textView from './views/textView.js';
import userView from './views/userView.js';

let sorted = false; // movements arr

const updateAccount = function () {
  model.calcBalance();
  model.calcSummary();
  textView.setTextViews();
  movementsView.render();
};

const controlLogin = function (username, pin) {
  model.state.currentAccount = model.findByUsername(username);

  if (model.state.currentAccount?.pin === pin) {
    userView.loginUser(model.state.currentAccount);
    updateAccount();
    userView.showInterface();
  }
};

const controlSort = function () {
  sorted = !sorted;
  sorted === false ? movementsView.render() : movementsView.render(true);
};

const controlTransfer = function (amount, receiver) {
  receiver =
    model.findByUsername(receiver) !== model.state.currentAccount
      ? model.findByUsername(receiver)
      : undefined;

  if (!receiver || model.state.currentAccount.balance < amount || amount <= 0)
    return;

  model.widthraw(amount, model.state.currentAccount);
  model.deposit(amount, receiver);

  updateAccount();
};

const controlLoan = function (amount) {
  if (
    model.state.currentAccount.movements.some(
      val => val > 0 && val > amount * 0.1
    ) &&
    amount > 0
  ) {
    model.deposit(amount, model.state.currentAccount);

    updateAccount();
  }
};

const controlClose = function (pin, username) {
  if (
    username === model.state.currentAccount.username &&
    pin === model.state.currentAccount.pin
  ) {
    model.deleteAccount();
    userView.hideInterface();
  }
};

const init = function () {
  userView.addHandlerLogin(controlLogin);
  userView.addHandlerTransfer(controlTransfer);
  userView.addHandlerLoan(controlLoan);
  userView.addHandlerClose(controlClose);
  movementsView.addHandlerSort(controlSort);
};

init();
