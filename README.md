# react-tooling-experimentation

Repo for testing out different React tools

# To Experiment With

- [x] Mise; https://mise.jdx.dev/
- [ ] Tanstack Router; https://tanstack.com/router/latest
  - [ ] Prefetching
  - [ ] Auth
  - [ ] Multi-tenant application
  - [ ] Transitions
- [ ] Tanstack Form; https://tanstack.com/form/latest
  - [ ] Integration w/ Tanstack Router for query parameter -> form init
- [ ] Zod validations in depth; https://zod.dev/
- [ ] Tanstack Table full feature set; https://tanstack.com/table/latest
- [ ] Tanstack Query advanced features; https://tanstack.com/query/latest
  - [ ] Infinite Queries
  - [ ] Parsing query data into local class
- [ ] Clerk advanced features:
  - [ ] organization features; https://clerk.com/docs/organizations/overview
  - [ ] subscriptions; https://clerk.com/billing
- [x] Biome v2.0 (currently beta); https://biomejs.dev/blog/biome-v2-0-beta/
- [ ] ShadCN/UI; https://ui.shadcn.com/
- [ ] Storybook Component Testing; https://storybook.js.org/
- [ ] Playwright E2E testing; https://playwright.dev/
- [ ] Stripe Element; https://stripe.com/en-ca/payments/elements
- [ ] Supabase; https://supabase.com/
- [ ] React Joyride for guided tours; https://react-joyride.com/
- [ ] Bun unit testing; https://bun.sh/
- [ ] `fetch` automatic token renewal
  - [ ] `ky` as a possible simplification; https://github.com/sindresorhus/ky
- [ ] Zustand as primary local data store; https://zustand.docs.pmnd.rs/getting-started/introduction
- [x] Tailwind v4 https://tailwindcss.com/blog/tailwindcss-v4
  - [ ] container queries
  - [ ] transitions
  - [ ] transforms
- [ ] React Compiler; https://react.dev/learn/react-compiler
- [ ] Recharts; https://recharts.org/en-US
- [ ] React Three Fiber; https://github.com/pmndrs/react-three-fiber
- [ ] React Loading Skeleton; https://github.com/dvtng/react-loading-skeleton
- [ ] Customizable Dashboard using react-grid-layout; https://github.com/react-grid-layout/react-grid-layout#demos
- [ ] React Query Builder: https://react-querybuilder.js.org/
- [ ] KBar command palette; https://kbar.vercel.app/

# Tanstack Router CheatSheet

- Develop while running the dev server and it will handle creating all the `createFileRoute` brouhaha when you create or rename a route file
- Routes can either be defined using folders (e.g. `posts/$id/edit.tsx`) or with periods (e.g. `posts.$id.edit.tsx`)
  I haven't seen a preference in the docs for one or the other so I'm going to default to folders for now.
- `src/routes`: contains all of the routing files
  - `__root.tsx`: The root layout of the application
  - `index.tsx`: The route matching `/`
  - `-MyComponent.tsx`: files & folders starting with `-` are excluded from routing
  - `_MyGroup/`: does not affect the routing path but files inside of this directory will share a common layout
    - `route.tsx`: defines the common layout for `_MyGroup`
  - `(MyOtherGroup)/`: does not affect the routing path or layout of components
  - `MyPostsGroup/`: creates a routing grouping with a shared layout
    - `route.tsx`: defines the common layout for `MyPostsGroup`
    - `index.tsx`: The route matching `/MyPostsGroup`
    - `$id.tsx`: Matches `/MyPostsGroup/1`, `/MyPostsGroup/2`, `/MyPostsGroup/3`, etc...
  - `MyPostsGroup_.$id.edit.tsx`: Matches `/MyPostsGroup/1/edit` but ignores the common layout for `MyPostsGroup`
  - `$.tsx`: matches anything not matched otherwise and sticks it into the `_splat` param. Good for 404 pages.