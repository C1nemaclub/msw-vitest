import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import Users from './Users';

describe('Users', () => {
  it('Should retrieve users', async () => {
    render(<Users />);
    const user = userEvent.setup();

    const getUsersBtn = screen.getByRole('button', { name: /get users/i });
    await user.click(getUsersBtn);
    const users: HTMLParagraphElement[] =
      await screen.findAllByRole('paragraph');
    expect(users.length).toBe(10);
  });
});
