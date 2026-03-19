// import { cleanup } from '@testing-library/react';
// import { afterAll, afterEach, beforeAll } from 'vitest';
// import { mockedServer } from './server';

// afterEach(() => {
//   cleanup();
// });

// beforeAll(() => {
//   mockedServer.listen();
// });

// afterAll(() => {
//   mockedServer.close();
// });

// afterEach(() => {
//   mockedServer.resetHandlers();
// });

//Worker
import { cleanup } from '@testing-library/react';
import { setupWorker } from 'msw/browser';
import { afterAll, afterEach, beforeAll } from 'vitest';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

afterEach(() => {
  cleanup();
});

beforeAll(async () => {
  await worker.start();
});

afterAll(() => {
  worker.stop();
});
