import type { SVGProps } from 'react';

export const ProductIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} stroke='#2563EB' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3ZM12 12l8-4.5M8.2 9.8l7.6-4.6M12 12v9M12 12 4 7.5'
      stroke='currentColor'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
