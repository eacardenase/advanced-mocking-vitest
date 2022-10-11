import { it, expect, describe, vi } from 'vitest';

import { sendDataRequest } from './http';

const testResponseData = { testKey: 'testData' };

const testFetch = vi.fn((url, options) => {
    return new Promise((resolve, reject) => {
        if (typeof options.body !== 'string') {
            return reject('Not a string');
        }

        const testResponse = {
            ok: true,
            json() {
                return new Promise((resolve, reject) => {
                    resolve(testResponseData);
                });
            },
        };

        return resolve(testResponse);
    });
});

vi.stubGlobal('fetch', testFetch);

describe('sendDataRequest()', () => {
    it('should return any available response data', () => {
        const testData = {
            key: 'test',
        };

        return expect(sendDataRequest(testData)).resolves.toEqual(
            testResponseData
        );
    });

    it('should convert the provided data to JSON before sending the request', async () => {
        const testData = {
            key: 'test',
        };

        // return expect(sendDataRequest(testData)).not.rejects.toBe('Not a string')

        let errorMessage;

        try {
            await sendDataRequest(testData);
        } catch (error) {
            errorMessage = error;
        }

        expect(errorMessage).not.toBe('Not a string');
    });
});
