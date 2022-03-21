import Cart from './cart';

describe('Cart', () => {
    let cart;
    //beforeEach means that before each test to be run, a new instance of Cart will be creted.
    beforeEach(() => {
        cart = new Cart();
    });

    it('should return 0 at getTotal when a new instance is creted.', () => {        
        expect(cart.getTotal()).toEqual(0);
    });

    it('should multiply quantity and price and receive the total amount', () => {
        const item = {
            product: {
                title: "Adidas running shoes - men",
                price: '35388'
            },
            quantity: 2,
        };
        cart.add(item);

        expect(cart.getTotal()).toBe(70776);
    });
});