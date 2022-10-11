import { it, expect, describe } from 'vitest';

import { validateNotEmpty } from './validation';

const errorMessage = 'message';

describe('validateNotEmpty()', () => {
    it('should not throw an error if correct text and errorMessage arguments are provided', () => {
        const text = 'text';

        const resultFn = () => {
            validateNotEmpty(text, errorMessage);
        };

        expect(resultFn).not.toThrow();
    });

    it('should throw an error if text argument is a falsy value', () => {
        const input1 = false;
        const input2 = null;
        const input3 = undefined;
        const input4 = '';

        const result1 = () => validateNotEmpty(input1, errorMessage);
        const result2 = () => validateNotEmpty(input2, errorMessage);
        const result3 = () => validateNotEmpty(input3, errorMessage);
        const result4 = () => validateNotEmpty(input4, errorMessage);

        expect(result1).toThrow();
        expect(result2).toThrow();
        expect(result3).toThrow();
        expect(result4).toThrow();
    });

    it('should throw an error if a long string of white spaces is provided as text argument', () => {
        const input = '                  ';

        const resultFn = () => validateNotEmpty(input, errorMessage);

        expect(resultFn).toThrow();
    });

    it('should throw an error with the provided error message', () => {
        const input = '';

        const resultFn = () => validateNotEmpty(input, errorMessage);

        expect(resultFn).toThrow('error');
    });
});
