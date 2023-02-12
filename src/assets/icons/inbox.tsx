import type { SVGProps } from 'react';

export const InboxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill='none' stroke='#2563EB' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z'
      stroke='currentColor'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M4 13h3l3 3h4l3-3h3'
      stroke='currentColor'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
