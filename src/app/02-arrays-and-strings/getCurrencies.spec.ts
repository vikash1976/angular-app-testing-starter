import {getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
    it('should return supported currencies', () => {
        const currencies = getCurrencies();
        expect(currencies).toContain('AUD');
        expect(currencies).toContain('INR');
        expect(currencies).toContain('USD');
    })
});