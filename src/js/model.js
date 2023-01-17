export const state = {
  accounts: [
    {
      owner: 'Jonas Schmedtmann',
      movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
      interestRate: 1.2, // %
      pin: 1111,
    },

    {
      owner: 'Jessica Davis',
      movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
      interestRate: 1.5,
      pin: 2222,
    },

    {
      owner: 'Steven Thomas Williams',
      movements: [200, -200, 340, -300, -20, 50, 400, -460],
      interestRate: 0.7,
      pin: 3333,
    },

    {
      owner: 'Sarah Smith',
      movements: [430, 1000, 700, 50, 90],
      interestRate: 1,
      pin: 4444,
    },
  ],

  currentAccount: {},
};

export const calcBalance = function () {
  state.currentAccount.balance = state.currentAccount.movements.reduce(
    (accum, val) => accum + val,
    0
  );
};

export const calcSummary = function () {
  state.currentAccount.summary = {};

  state.currentAccount.summary.income = state.currentAccount.movements
    .filter(val => val > 0)
    .reduce((acc, val) => acc + val, 0);

  state.currentAccount.summary.out = state.currentAccount.movements
    .filter(val => val < 0)
    .reduce((acc, val) => acc + Math.abs(val), 0);

  state.currentAccount.summary.interest = state.currentAccount.movements
    .filter(val => val > 0)
    .map(val => (val = (val * state.currentAccount.interestRate) / 100))
    .filter(val => val > 1)
    .reduce((acc, val) => acc + val, 0);
};

export const findByUsername = function (username) {
  return state.accounts.find(acc => acc.username === username);
};

export const widthraw = function (amount, acc) {
  acc.movements.push(-amount);
};

export const deposit = function (amount, acc) {
  acc.movements.push(amount);
};

export const deleteAccount = function () {
  const index = state.accounts.findIndex(
    acc => acc.username === state.currentAccount.username
  );
  state.accounts.splice(index, 1);
};

// prettier-ignore
// IIFE since we need to create usernames only ones when we start our apps
const createUsernames = function () {
  state.accounts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};

createUsernames();
