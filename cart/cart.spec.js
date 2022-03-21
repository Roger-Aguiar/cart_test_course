import Cart from "./cart";
import { item, item2, checkoutList, summary } from "../mocks/cart.mock";

describe("Cart", () => {
  let cart;

  //beforeEach means that before each test to be run, a new instance of Cart will be creted.
  beforeEach(() => {
    cart = new Cart();
  });

  describe("getTotal()", () => {
    it("should return 0 at getTotal when a new instance is creted.", () => {
      expect(cart.getTotal().getAmount()).toEqual(0);
    });

    it("should multiply quantity and price and receive the total amount", () => {
      cart.add(item);
      expect(cart.getTotal().getAmount()).toBe(70776);
    });

    it("should ensure that no more than one product exists at a time", () => {
      cart.add(item);
      cart.add(item);
      expect(cart.getTotal().getAmount()).toBe(70776);
    });

    it("should update total when a product is added or removed.", () => {
      cart.add(item);
      cart.add(item2);
      cart.remove(item.product);
      expect(cart.getTotal().getAmount()).toBe(112648);
    });
  });

  describe("checkout", () => {
    it("should return an object with the total and the list of items", () => {
      cart.add(item);
      cart.add(item2);
      expect(cart.checkout()).toEqual(checkoutList);
    });

    it("should reset the cart when checkout is called", () => {
      cart.add(item2);
      cart.checkout();
      expect(cart.getTotal().getAmount()).toEqual(0);
    });

    it("should return an object with the total and the list of items", () => {
      cart.add(item);
      cart.add(item2);
      cart.getSummary();
      expect(cart.getSummary()).toEqual(summary);
      expect(cart.getTotal().getAmount()).toBeGreaterThan(0);
    });
  });
});
