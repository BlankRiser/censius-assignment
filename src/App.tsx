import { useState } from 'react';
import { TeamMemberslist } from './components/features/team-members-list';
import { GlobalLayout } from './components/layout';
import { SearchContext } from './context/search-context';

function App() {
  const store = useState<string>('');

  return (
    <SearchContext.Provider value={store}>
      <GlobalLayout>
        <main className='ml-auto w-[calc(100%-16rem)] bg-neutral-50 text-white dark:bg-neutral-900'>
          <TeamMemberslist />
        </main>
      </GlobalLayout>
    </SearchContext.Provider>
  );
}

export default App;
