const obscureCreditCard = require('./creditCard');

describe('Obscure Credit Card Number', () => {

    test('should obscure a valid 12-digit credit card number', () => {
        expect(obscureCreditCard('123456781234')).toBe('********1234');
    });

    test('should obscure a valid 16-digit credit card number', () => {
        expect(obscureCreditCard('1234567812345678')).toBe('************5678');
    });

    test('should return "Invalid Credit Card" for a number shorter than 12 digits', () => {
        expect(obscureCreditCard('1234')).toBe('Invalid Credit Card');
    });

    test('should return "Invalid Credit Card" for a number longer than 16 digits', () => {
        expect(obscureCreditCard('12345678123456789')).toBe('Invalid Credit Card');
    });

});
