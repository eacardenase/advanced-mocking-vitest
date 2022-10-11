import { HttpError } from './errors.js';

export async function sendDataRequest(data) {
    const response = await fetch('https://dummy-site.dev/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        // body: data,
    });

    const responseData = await response.json();

    if (!response.ok) {
        // throw new Error('Built in error!');
        throw new HttpError(
            response.status,
            'Sending the request failed.',
            responseData
        );
    }

    return responseData;
}
