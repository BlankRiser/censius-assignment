import { Card } from '@/components/shared/card';
import { render } from '@testing-library/react';
import { test } from 'vitest';

const name = 'Apex';
const designation = 'Developer';
const initials = 'A';

test('should render an input element', () => {
  const { container } = render(<Card designation={designation} name={name} />);

  expect(container.querySelector('h2')?.textContent).toBe(name);
  expect(container.querySelector('p')?.textContent).toBe(initials);
  expect(container.querySelector('span')?.textContent).toBe(designation);
});
