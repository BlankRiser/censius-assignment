import { ReactNode } from 'react';
import { Navbar } from './navbar';
import { Sidebar } from './sidebar';

type Props = {
  children: ReactNode;
};

export function GlobalLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div>{children}</div>
    </>
  );
}
