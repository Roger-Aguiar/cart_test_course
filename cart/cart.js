import { find, remove } from "lodash";
import Dinero from "dinero.js";

const Money = Dinero;
Money.defaultCurrency = "BRL";
Money.defaultPrecision = 2;

export default class Cart {
  items = [];

  add(item) {
    const itemToFind = { product: item.product };
    if (find(this.items, itemToFind)) {
      remove(this.items, itemToFind);
    }

    this.items.push(item);
  }

  remove(product) {
    remove(this.items, product);
  }

  getTotal() {
    return this.items.reduce((accumulator, item) => {
      return accumulator.add(
        Money({ amount: item.quantity * item.product.price })
      );
    }, Money({ amount: 0 }));
  }

  getSummary() {
    const total = this.getTotal().getAmount();
    const items = this.items;

    return {
      total,
      items,
    };
  }

  checkout() {
    const { total, items } = this.getSummary();
    this.items = [];

    return {
      total,
      items,
    };
  }
}
