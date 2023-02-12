import type { SVGProps } from 'react';

export const MagnifyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.667 11.333a4.667 4.667 0 1 0 0-9.333 4.667 4.667 0 0 0 0 9.333ZM14 14l-4-4'
      stroke='#6B7280'
      strokeWidth={1.6}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
