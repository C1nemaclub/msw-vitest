import { HttpResponse, http } from 'msw';

export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    return HttpResponse.json([
      { name: 'alice' },
      { name: 'bob' },
      { name: 'charlie' },
      { name: 'diana' },
      { name: 'eve' },
      { name: 'frank' },
      { name: 'grace' },
      { name: 'henry' },
      { name: 'iris' },
      { name: 'jack' },
    ]);
  }),
];
