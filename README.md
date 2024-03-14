# Concourse Challenge

This project integrates the commit graph of GitHub for Facebook's React repository. The challenge was created by [Stephen D'Andrea](https://github.com/stephendandrea) and implemented by [German Quintela](https://github.com/germanquintela). The project is deployed at the following URL [Vercel](https://concourse-contribution-graph.vercel.app/).

## Setting Up the Project

Before you begin, ensure the following requirements are met:

- Must have npm installed on your system.
- Git CLI must be installed.

To set up the project, follow these steps:

1. Clone the repository using the command: 
```JS
git clone https://github.com/germanquintela/concourse-contribution-graph
```
2. Install dependencies with 
```JS
npm install
```
3. Run the project using
```JS
`npm run dev`
```
4. The project can be viewed at [http://localhost:5173/](http://localhost:5173/).

## Technologies

### Styles


##### Theme

Considering Concourse uses Material as a library for styles, it was decided to integrate it into the project. 

- A `ThemeProvider` was created and a `theme` was imported following the design guidelines, including colors and some tokens as specified in my design challenge [Figma challange German Quitnela](https://www.figma.com/file/jawNAF2Dx9FgHVK7fNn0nk/Concourse?type=design&node-id=33-23459&mode=design&t=CCezwcUwD23O4yeU-4).

Theme file:

```/src/theme.ts```
 
Theme Provider usage:

```/src/main.tsx```

```tsx
<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

##### Components

- For custom components, the `styled` module from MUI system was used, incorporating and utilizing the project's own theme. The order of styles followed the convention outlined [here](https://aerolab.co/blog/write-better-css-to-improve-your-code-quality).

```css
/* Concept */
.selector {
  /* layout */
  /* position and dimensions */
  /* margin and padding */
  /* box enhancements */
  /* font enhancements */
  /* others */
}
```

### Animations

The [framer-motion](https://www.npmjs.com/package/framer-motion) library was used for animations. A reusable component named `FadeIn.tsx` was created for quick animation implementations:

```js

const FadeIn = ({ children, delay = 0, duration = 0.4 }: FadeInType) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration,
      delay,
    }}
  >
    {children}
  </motion.div>
);

// Usage
<FadeIn delay={2} duration={0.6}>
  <Component />
</FadeIn>
```

### Component Generation

To enhance the coding experience, `plop` was added with custom templates. By running `npm run new-component`, the following files are created with basic content to start working on, decoupling logic into different files:

```/src/components/```
- `index.ts` (entry point)
- `Component.tsx` (component and presentation logic)
- `types.ts` (typing)
- `styles.tsx` (styles consumed only by this component)

### Hooks

A custom hook was created for data fetching, allowing the extraction of logic from the component. This hook handles errors and loading states efficiently.

```/src/hooks/useFetchContributions.tsx```

### Improvements

- Adding testing with React Testing Library and, if the project scales, Storybook for visual regression testing.
- Implementing Commit Lint with conventional commits and Husky for best practices and standardization of commits.
- Incorporating Release It for project versioning.

