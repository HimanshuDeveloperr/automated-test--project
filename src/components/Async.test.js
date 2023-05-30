// Async.test.js
import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('renders list items after fetching data', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'first post' }],
    });

    render(<Async />);

    const items = await screen.findAllByRole('listitem');
    expect(items).not.toHaveLength(0);
  });
});
