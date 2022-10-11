import { it, expect, describe, beforeEach } from 'vitest';

import { HttpError, ValidationError } from './errors';

let httpError;
const statusCode = 200;
const message = 'test';
const data = {};

beforeEach(() => {
    httpError = new HttpError(statusCode, message, data);
});

describe('HttpError', () => {
    it('should have a statusCode property', () => {
        expect(httpError).toHaveProperty('statusCode');
    });

    it('should have a message property', () => {
        expect(httpError).toHaveProperty('message');
    });

    it('should have a data property', () => {
        expect(httpError).toHaveProperty('data');
    });
});

describe('ValidationError', () => {
    it('should have a message property', () => {
        const validationError = new ValidationError(message);

        expect(validationError).toHaveProperty('message');
    });
});
