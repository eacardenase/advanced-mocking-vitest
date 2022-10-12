import fs from 'fs';
import path from 'path';

import { beforeEach, expect, it, vi, describe } from 'vitest';
import { Window } from 'happy-dom';

import { showError } from './dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath, 'utf8');

const window = new Window();
const document = window.document;

vi.stubGlobal('document', document);

describe('dom elements', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
        document.write(htmlDocumentContent);
    });

    it('should add an error paragraph to the id="errors" element', () => {
        showError('Test error');

        const errorsEl = document.getElementById('errors');
        const errorParagraph = errorsEl.firstElementChild;

        expect(errorParagraph).not.toBeNull();
    });

    it('should not contain an error paragraph initially', () => {
        const errorsEl = document.getElementById('errors');
        const errorParagraph = errorsEl.firstElementChild;

        expect(errorParagraph).toBeNull();
    });
});
