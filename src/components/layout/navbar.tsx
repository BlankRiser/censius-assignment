import { CustomSearch } from '@/components/shared/custom-search';

export function Navbar() {
  return (
    <header>
      <nav className='ml-auto flex h-16.5 w-[calc(100%-16rem)] items-center bg-neutral-50 px-8  py-3 dark:bg-neutral-900'>
        <ul className='flex w-full items-center justify-between'>
          <li className='text-neutral-800 text-title dark:text-neutral-100'>Team Members</li>
          <li>
            <CustomSearch />
          </li>
        </ul>
      </nav>
    </header>
  );
}
