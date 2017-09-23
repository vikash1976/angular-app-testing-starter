import {getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
    it('should return supported currencies', () => {
        const currencies = getCurrencies();
        expect(currencies).toContain('AUD');
        expect(currencies).toContain('INR');
        expect(currencies).toContain('USD');
        expect(currencies).toContain('GBP');
        expect(currencies).toContain('EUR');
    });

    it('should return 5 as supported currencies number', () => {
        const currencies = getCurrencies();
        expect(currencies.length).toBe(5);
    })
});