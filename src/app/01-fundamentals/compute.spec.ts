import { compute } from './compute';

describe('compute', () => {
    it('should return 0 when called with negative numbers', () => {
        let result = compute(-1);
        expect(result).toBe(0);
    });

    it('should increment by 1 when called with non negative numbers', () => {
        const parameter = 1;
        let result = compute(parameter);
        expect(result).toBe(parameter + 1);
    });
});