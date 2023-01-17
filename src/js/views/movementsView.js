import { UserView } from './userView.js';

const btnSort = document.querySelector('.btn--sort');

class MovementsView extends UserView {
  _generateString(sort = false) {
    let movs = this._user.movements;

    if (sort) {
      movs = sort ? movs.slice().sort((a, b) => a - b) : movs;
    }

    const arr = movs.map(function (mov, i) {
      const type = mov > 0 ? 'deposit' : 'withdrawal';

      const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
        i + 1
      } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
          `;

      return html;
    });

    return arr.reverse().join('');
  }

  addHandlerSort(handler) {
    btnSort.addEventListener('click', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new MovementsView();
