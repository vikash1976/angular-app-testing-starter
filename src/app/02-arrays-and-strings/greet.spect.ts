import { greet } from './greet';

describe('greet', () => {
    it('should contain passed param in the message', () => {
        const parameter = 'Vikash';
        expect(greet(parameter)).toContain(parameter);
    });
});