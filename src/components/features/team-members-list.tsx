import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../context/search-context';
import { User } from '../../types/member';
import { getData } from '../../utils/get-data';
import { Card } from '../shared/card';

export function TeamMemberslist() {
  const [data, setData] = useState<any>([]);
  const store = useContext(SearchContext);
  const [searchQuery] = store;

  useEffect(() => {
    getData<User[]>({ url: '/members.json' }).then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div className='w-full rounded-tl-2xl bg-neutral-100 px-8 py-12 dark:bg-neutral-800'>
      {!data ? (
        'loading...'
      ) : (
        <div className='flex flex-wrap items-center justify-center gap-8 gap-y-8'>
          {data
            .filter((item: any) => {
              return item.name.toLowerCase().includes(searchQuery.toLowerCase());
            })
            .map((item: any) => {
              return <Card key={item.id} designation={item.designation} name={item.name} />;
            })}
        </div>
      )}
    </div>
  );
}
