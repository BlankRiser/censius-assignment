import { getInitialsRegex } from '../../utils/get-initials';
import { Pattern } from './patterns';

interface Props {
  name: string;
  designation: string;
}

export function Card({ name, designation }: Props) {
  return (
    <a
      href='#'
      className='relative grid h-[15.25rem] w-[12rem] place-items-center rounded-2.5xl bg-primary-50 focus:outline-none  focus-visible:outline-primary-500 dark:bg-primary-900 dark:focus-visible:outline-primary-400'
    >
      <Pattern className='pointer-events-none absolute inset-0 stroke-primary-500 ' />
      <div className='flex flex-col items-center justify-center space-y-4'>
        <div className='grid h-24 w-24 place-items-center rounded-full bg-primary-600'>
          <p className='text-white text-headline'>{getInitialsRegex(name)}</p>
        </div>
        <div className='text-center'>
          <h2 className='text-neutral-900 text-label dark:text-neutral-100'>{name}</h2>
          <span className='text-neutral-500 text-description dark:text-neutral-300 '>{designation}</span>
        </div>
      </div>
    </a>
  );
}
