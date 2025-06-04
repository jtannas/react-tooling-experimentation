# react-tooling-experimentation

Repo for testing out different React tools

# To Experiment With

- [x] Mise; https://mise.jdx.dev/
- [x] Tanstack Router; https://tanstack.com/router/latest
  - [x] Prefetching
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

## File Based Routing

- Develop while running the dev server and it will handle creating all the `createFileRoute` brouhaha when you create or rename a route file
- They **highly** recommend file based routing because of all the nastiness that it handles for you.
  If you want to get a sense of it, take a look inside of `src/routeTree.gen.ts`
- Routes can either be defined using folders (e.g. `posts/$id/edit.tsx`) or with periods (e.g. `posts.$id.edit.tsx`)
  Tanstack Router calls these "Directory Routes" and "Flat Routes". They recommend mixing between the two based on what makes sense for your project.
  Generally - directory routes for multiple routes and flat routes for individual deeply nested routes.
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

## Loaders

### Why put loaders in the router?

- The router is the first thing to know when a user wants to go to a new page.
- It can even make educated guesses about the next page by watching for the user to hover over a link.
- Because of this, it can automatically initiate data loading for a page before anything else in the app can.
- This can go a long way towards making the app feel "snappy".
  - Typical human response time to a visual stimulus is between 200ms and 300ms.
  - Let's assume it takes 250ms between hover on link and click.
  - By starting data loading that much earlier, the page appear to load that much faster.
  - It's a lot easier to start a 300ms API call earlier than it is to turn it into a 50ms API call.
- This is important for some apps that need it, but an unnecessary optimization for others.
- Thankfully, the way they've structured it in TanstackRouter brings a ton of benefits even if you don't need the speed.
- The biggest one TR can hugely improve parallel data loading for your page. Example:
  - Imagine we're loading `/posts/1/edit`.
    - The page layout at `__root.tsx` needs global user data
    - The `posts/route.tsx` needs to check for new posts to show an indicator
    - The `posts/$id/edit.tsx` needs to load the relevant post
  - In a traditional app, each layer needs to render to cause the next to start.
  - This causes a waterfall of API requests as each component is rendered.
  - In TR, it knows from the URL that all those pages are relevant and will trigger all the loaders in parallel.

### General Design

- Loaders run before the page component is rendered
- In the case of "preload on hover (a.k.a. on intent), they can run significantly before render
- To handle this, they require at least some ability to cache data.
- They tend to deal a lot of API calls, so there's also going to need to be loading states, error handling, etc...
- Effectively, they need a lot of the same stuff that TanstackQuery provides.
- If you already understand TanstackQuery, a good way to think of the design is:
  - Each route (plus whatever search params you choose) is the `queryKey`
    - e.g `queryKey: ['organizations/$id/users', { params: { id: 1 }, search: { page: 2 }}`]
  - The loaders are the `queryFn`
- The limitation to this approach is that data is loaded per-route. It is not shared across multiple routes.
  - e.g. `posts/1`, `posts/1/edit`, `posts/1/delete` might all need to make individual calls to `/api/v1/posts/1`
- If there's not much overlap in data between your pages, TanstackRouter will be a "good enough for now" solution.
- For a more complex app with shared data, combine TanstackRouter (route level) with TanstackQuery (API call level).

### Stale-while-revalidate

- Similar to Tanstack Query, there are controls for caching information
  - `staleTime`, `gcTime`, `shouldReload()`, etc...
- There is a slight difference for `preload` though.
- A `staleTime: 0` might make sense for a page that changes often, but would immediately invalidate any preloaded data.
- This would cause a new preload on every single mouse hover event, potentially causing API call spam
- This is compensated for by having `preloadStaleTime` that controls how often a preload can occur (default 30 seconds)

### Route Context

- Each route has a "context". It's like a built in `React.useContext` minus the annoying bits.
- This consists of two parts
  1) The context of the parent route
  2) Context added in by the `beforeLoad` function
- Since this is added to by `beforeLoad`, the context is not intended for async `loader` data 
- Instead, it aims to assist with the testing/configuration difficulties introduced by having so much wrapped into the router
- It is effectively a tool for dependency injection. You can inject whatever you need at an upper route and have it propagate down the entire route tree.
- Interestingly, it also allows you to pass data _up_ the component tree to layouts and root routes via `useRouterState`
- This makes it very useful for breadcrumbs

### Promise Handling

- Since promise resolution can take awhile, there are a few features to handle it.
- By default, all promises must complete before the page is rendered
- There is a setting for `pendingMs` that controls when a `pendingComponent` is rendered as a loading state.
  - To prevent `pendingComponent` from flashing, `pendingMsMin` determines the minimum amount of time the loading state is shown
- If you want to render the page even while a promise is unresolved, wrap the usage of it in the page with the `<Await>` component
  - This can be used to mix strategies.
  - Critical data (e.g. the current user auth) can use `async/await` in the loader to ensure it is loaded prior to the page render
  - Non-critical data (e.g. the post comments) can use `<Await>` to allow rendering the rest of the page while the data is loading
- Ensuring data is loaded before render helps a lot for search indexing, because you can be sure the critical data is available on first render to search engines

### Tanstack Query Integration

- Not much to say here really.
- In the route `loaders`, use TQ's functions `queryClient.prefetchQuery` & `await queryClient.ensureQueryData` to start loading.
- In your component, use TQ's `useQuery` / `useSuspenseQuery` to access the data per usual.
- TanstackRouter basically acts as a _coordinator_ for other state management tools.
  - It tells them when to run, but lets them handle their own business of what to do.
