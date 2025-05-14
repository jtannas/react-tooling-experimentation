# react-tooling-experimentation

Repo for testing out different React tools

# To Experiment With

- Mise; https://mise.jdx.dev/
- Tanstack Router; https://tanstack.com/router/latest
  - Prefetching
  - Auth
  - Multi-tenant application
  - Transitions
- Tanstack Form; https://tanstack.com/form/latest
  - Integration w/ Tanstack Router for query parameter -> form init
- Zod validations in depth; https://zod.dev/
- Tanstack Table full feature set; https://tanstack.com/table/latest
- Tanstack Query advanced features; https://tanstack.com/query/latest
  - Infinite Queries
  - Parsing query data into local class
- Clerk advanced features:
  - organization features; https://clerk.com/docs/organizations/overview
  - subscriptions; https://clerk.com/billing
- Biome v2.0 (currently beta); https://biomejs.dev/blog/biome-v2-0-beta/
- ShadCN/UI; https://ui.shadcn.com/
- Storybook Component Testing; https://storybook.js.org/
- Playwright E2E testing; https://playwright.dev/
- Stripe Element; https://stripe.com/en-ca/payments/elements
- Supabase; https://supabase.com/
- React Joyride for guided tours; https://react-joyride.com/
- Bun unit testing; https://bun.sh/
- `fetch` automatic token renewal
  - `ky` as a possible simplification; https://github.com/sindresorhus/ky
- Zustand as primary local data store; https://zustand.docs.pmnd.rs/getting-started/introduction
- Tailwind v4 https://tailwindcss.com/blog/tailwindcss-v4
  - container queries
  - transitions
  - transforms
- React Compiler; https://react.dev/learn/react-compiler
- Recharts; https://recharts.org/en-US
- React Three Fiber; https://github.com/pmndrs/react-three-fiber
- React Loading Skeletong; https://github.com/dvtng/react-loading-skeleton
- Customizable Dashboard using react-grid-layout; https://github.com/react-grid-layout/react-grid-layout#demos
- React Query Builder: https://react-querybuilder.js.org/
- KBar command palette; https://kbar.vercel.app/

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
