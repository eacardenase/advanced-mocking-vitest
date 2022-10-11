import { it, expect, describe, beforeEach } from 'vitest';

import { HttpError, ValidationError } from './errors';

let httpError;
const testStatusCode = 200;
const testMessage = 'test';
const testData = { key: 'test' };

beforeEach(() => {
    httpError = new HttpError(testStatusCode, testMessage, testData);
});

describe('class HttpError', () => {
    it('should have a statusCode property', () => {
        expect(httpError).toHaveProperty('statusCode');
    });

    it('should have a message property', () => {
        expect(httpError).toHaveProperty('message');
    });

    it('should have a data property', () => {
        expect(httpError).toHaveProperty('data');
    });

    it('should contain the provided status code, message and data', () => {
        expect(httpError.statusCode).toBe(testStatusCode);
        expect(httpError.message).toBe(testMessage);
        expect(httpError.data).toBe(testData);
    });
});

describe('class ValidationError', () => {
    it('should have a message property', () => {
        const validationError = new ValidationError(testMessage);

        expect(validationError).toHaveProperty('message');
    });

    it('should contain the provided message', () => {
        const validationError = new ValidationError(testMessage);

        expect(validationError.message).toBe(testMessage);
    });
});
