import { createContext } from 'react';

type ISearchContext = [string, React.Dispatch<React.SetStateAction<string>>];

export const SearchContext = createContext<ISearchContext>(['', () => {}]);
