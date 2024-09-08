function obscureCreditCard(cardNumber) {
    const length = cardNumber.length;

    if (length < 12 || length > 16) {
        return 'Invalid Credit Card';
    }

    return '*'.repeat(length - 4) + cardNumber.slice(-4);
}

module.exports = obscureCreditCard;
