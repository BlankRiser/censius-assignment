import { useState } from 'react';
import { InboxIcon, MoonIcon, ProductIcon, SunIcon, UserIcon } from '../../assets/icons';

export function Sidebar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    const root = window.document.documentElement;
    root.classList.toggle('dark');
  };

  return (
    <aside className='fixed inset-0 w-64 bg-neutral-50 dark:bg-neutral-900'>
      <Spacer />
      <div className='mb-8 flex h-[calc(100%-4.5rem)] flex-col justify-between  py-4 pr-4'>
        <ul className='space-y-3'>
          {sidebarList.map(({ page, icon: Icon, isCurrent }, index) => {
            return (
              <li key={index}>
                <a
                  href='#'
                  className={`
                  ${
                    isCurrent
                      ? 'bg-primary-600 text-white dark:text-primary-50'
                      : 'text-primary-700 dark:text-primary-500'
                  } flex items-center justify-start gap-2.5 rounded-r-lg p-3  text-subtitle hover:bg-primary-600 hover:text-white focus:outline-none focus-visible:outline-primary-500
                    dark:hover:text-primary-50 dark:focus-visible:outline-primary-400
                  `}
                >
                  <span>
                    <Icon />
                  </span>
                  <span>{page}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <button
          onClick={toggleTheme}
          className='flex items-center justify-start gap-2.5 rounded-r-lg p-3 text-primary-700 text-subtitle hover:bg-primary-600 hover:text-white focus:outline-none focus-visible:outline-primary-500 dark:text-primary-500  dark:hover:text-primary-50 dark:focus-visible:outline-primary-400'
        >
          {darkMode ? (
            <>
              <span>
                <SunIcon />
              </span>
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <span>
                <MoonIcon />
              </span>
              <span>Dark Mode</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}

function Spacer() {
  return <div className='h-16.5' />;
}

const sidebarList = [
  {
    page: 'Team Members',
    icon: () => <UserIcon />,
    isCurrent: true,
  },
  {
    page: 'Products',
    icon: () => <ProductIcon />,
    isCurrent: false,
  },
  {
    page: 'Inbox',
    icon: () => <InboxIcon />,
    isCurrent: false,
  },
];
