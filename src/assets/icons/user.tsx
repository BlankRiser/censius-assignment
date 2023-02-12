import type { SVGProps } from 'react';

export const UserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill='none' stroke='#EFF6FF' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2M16 3.13a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.85'
      stroke='currentColor'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
