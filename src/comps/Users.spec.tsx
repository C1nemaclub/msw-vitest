import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { describe, expect, it, vi } from 'vitest';
import { test } from '../../tests/test-extend';
// import {test as mwsTest } from "../../tests/msw-extend"

import Users from './Users';

describe('Users', () => {
  // it('Should retrieve users', async () => {
  //   const mockFn = vi.fn();
  //   render(<Users onUser={mockFn} />);
  //   const user = userEvent.setup();

  //   const getUsersBtn = screen.getByRole('button', { name: /get users/i });
  //   await user.click(getUsersBtn);
  //   const users: HTMLParagraphElement[] =
  //     await screen.findAllByRole('paragraph');

  //   const samUser = await screen.findByText(/eve/i);
  //   await user.click(samUser);
  //   expect(mockFn).toHaveBeenCalledWith('eve');
  //   expect(users.length).toBe(10);
  // });

  it('should multiply', () => {
    expect(2 * 2.4).toBe(4.8);
  });

  // test('Should retrieve users', async ({ worker }) => {
  //   worker.use(
  //     http.get('https://jsonplaceholder.typicode.com/users', () => {
  //       return HttpResponse.json([
  //         { name: 'alice' },
  //         { name: 'bob' },
  //         { name: 'charlie' },
  //         { name: 'diana' },
  //         { name: 'eve' },
  //         { name: 'frank' },
  //         { name: 'grace' },
  //         { name: 'henry' },
  //         { name: 'iris' },
  //         { name: 'jack' },
  //       ]);
  //     }),
  //   );
  //   const mockFn = vi.fn();
  //   render(<Users onUser={mockFn} />);
  //   const user = userEvent.setup();

  //   const getUsersBtn = screen.getByRole('button', { name: /get users/i });
  //   await user.click(getUsersBtn);
  //   const users: HTMLParagraphElement[] =
  //     await screen.findAllByRole('paragraph');

  //   const samUser = await screen.findByText(/eve/i);
  //   await user.click(samUser);
  //   expect(mockFn).toHaveBeenCalledWith('eve');
  //   expect(users.length).toBe(10);
  // });

  test('Should retrieve users 2', async ({ worker }) => {
    worker.use(
      http.get('https://jsonplaceholder.typicode.com/users', () => {
        return HttpResponse.json([{ name: 'alice' }, { name: 'sammy' }]);
      }),
    );
    const mockFn = vi.fn();
    render(<Users onUser={mockFn} />);
    const user = userEvent.setup();

    const getUsersBtn = screen.getByRole('button', { name: /get users/i });
    await user.click(getUsersBtn);
    const users: HTMLParagraphElement[] =
      await screen.findAllByRole('paragraph');

    const samUser = await screen.findByText(/sammo/i);
    await user.click(samUser);
    expect(mockFn).toHaveBeenCalledWith('sammy');
    expect(users.length).toBe(2);
  });
});
