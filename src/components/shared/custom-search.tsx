import { useContext } from 'react';
import { MagnifyIcon } from '../../assets/icons';
import { SearchContext } from '../../context/search-context';

export function CustomSearch() {
  const store = useContext(SearchContext);
  const [_search, setSearch] = store;
  return (
    <div className='flex items-center justify-center gap-1 rounded-lg border border-neutral-400 bg-neutral-100 px-3 outline-none  focus-within:ring-1 focus-within:ring-primary-900  dark:border-neutral-500 dark:bg-neutral-800 dark:focus-within:ring-primary-400'>
      <input
        type='text'
        placeholder='Search...'
        onChange={(e) => setSearch(e.target.value)}
        className='rounded-lg  bg-neutral-100  py-2 text-neutral-800 text-description focus:outline-none   dark:bg-neutral-800 dark:text-neutral-100 '
      />
      <MagnifyIcon width={16} height={16} />
    </div>
  );
}
