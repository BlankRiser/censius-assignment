# Ram's Assignment

## Assumptions

- Not using React-Router as there's only one page.
- The app should be resposve till Tablet i.e. 800px
- The cards in team members are clickable so wrapping them in a `<a>` makes them accessible.
- Folders like `features`, `layout` and `shared` are used to group components based on their functionality, and `components` folder is used to encapsulate them.

## Drawbacks

- Using tailwind css for styling:
- CSS variables need to be used for compoenents where details like height and width are important (Ex. Navbar, Sidebar, etc.) which also need to be introdcued to its config as well to make it more modular.
- A lot of inline classes affect the readability of the code.
- Using the input component to search from the navbar with use-context even with debounce may lead to many re-renders.

## Commit convention

- `features` : Any new feature like a component for Team members
- `fix` : Any bug fix
- `a11y` : Any accessibility improvement
- `refactor` : Any code refactoring
- `docs` : Any documentation update
- `chore` : Any other changes like adding dependencies, changing config, etc.
- `test` : Any test related changes

## Suggested Improvements (Bonus Points)

- I can create a custom `ButtonLink` component to render a button or link based on prop.
- We can use a global state management library like Zustand or Jotai to avoid re-renders due to use-context.
- If more members are added to team members page, it is preferrable to show them in a tabular format.
- Making the search-bar also available only to pages would be beneficial, and have a better performance than making it global.
- Using a library like `react-query` or `useSWR` to fetch data from the API and cache it for better performance.
- Server rendering can be used to improve the performance of the app. Switching to Next.js would be a good option.
