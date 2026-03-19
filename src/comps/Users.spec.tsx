import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import Users from './Users';

describe('Users', () => {
  it('Should retrieve users', async () => {
    const mockFn = vi.fn();
    render(<Users onUser={mockFn} />);
    const user = userEvent.setup();

    const getUsersBtn = screen.getByRole('button', { name: /get users/i });
    await user.click(getUsersBtn);
    const users: HTMLParagraphElement[] =
      await screen.findAllByRole('paragraph');

    const samUser = await screen.findByText(/eve/i);
    await user.click(samUser);
    expect(mockFn).toHaveBeenCalledWith('eve');

    expect(users.length).toBe(10);
  });

  it('should multiply', () => {
    expect(2 * 2.4).toBe(4.8);
  });
});
