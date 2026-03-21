// // test/msw-test.ts
// import type { SetupWorker } from 'msw/browser';
// import type { SetupServerApi } from 'msw/node';
// import { test as base } from 'vitest';
// import { worker } from './browser';
// import { server } from './server';

// const isCI = !!process.env.CI;

// export const test = base.extend<{
//   msw: SetupWorker | SetupServerApi;
// }>({
//   msw: [
//     // eslint-disable-next-line no-empty-pattern
//     async ({}, use) => {
//       if (isCI) {
//         server.listen();
//         await use(server);
//         server.close();
//       } else {
//         await worker.start();
//         await use(worker);
//         worker.stop();
//       }
//     },
//   ],
// });
