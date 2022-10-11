import { describe, expect, it } from 'vitest';

import { extractPostData } from './posts';

describe('extractPostData()', () => {
    it('should extract title and content from the provided form data', () => {
        const testTitle = 'Test title';
        const testContent = 'Test content';
        const testFormData = {
            title: testTitle,
            content: testContent,
            get(key) {
                return this[key];
            },
        };

        const result = extractPostData(testFormData);

        const expectedResult = { title: testTitle, content: testContent };
        expect(result).toEqual(expectedResult);
    });
});
