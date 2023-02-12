import { CustomSearch } from '@/components/shared/custom-search';
import { render } from '@testing-library/react';
import { test } from 'vitest';

test('should render an input element', () => {
  const { container } = render(<CustomSearch />);

  expect(container.querySelector('input')?.type).toBe('text');
});
