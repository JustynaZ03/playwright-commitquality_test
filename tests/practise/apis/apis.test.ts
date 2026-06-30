import { test, expect } from '@playwright/test';
const practiseAPI = 'https://commitquality.com/practice-api';

test('is API response status code 200', async({request}) => { 
    const response = await request.get(practiseAPI);
    expect(response.status()).toBe(200);
});

test('is API response body correct', async({page}) => {
    await page.goto(practiseAPI);
    await page.getByRole('button', {name: 'Make API Request(GET)'}).click();
    const exampleOFJson = {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    };
    const responsePromise = page.waitForResponse(response =>
            response.url().includes('https://jsonplaceholder.typicode.com/todos/1') &&
            response.status() === 200 &&
            response.request().method() === 'GET'
    );

    const response = await responsePromise;
    const actualJson = await response.json();
    expect(actualJson).toMatchObject(exampleOFJson);
});

test('is API response header correct', async({page}) => {
    await page.goto(practiseAPI);
    await page.getByRole('button', {name: 'Make API Request(GET)'}).click();

        const responsePromise = page.waitForResponse(response =>
            response.url().includes('https://jsonplaceholder.typicode.com/todos/1') &&
            response.status() === 200 &&
            response.request().method() === 'GET'
    );
    const response = await responsePromise;
    const contentType = response.headers()['content-type'];
    expect(contentType).toBe('application/json; charset=utf-8');
});