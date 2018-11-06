# Animal Friends 🐕
A basic, (largely) un-styled, example React/Redux app (also using [React Hooks](https://reactjs.org/docs/hooks-intro.html)!).

Add some cute animal friends and watch them grow! Favorites are saved to `localStorage`.

Built using [`min-react-starter`](https://github.com/j-d-b/min-react-starter).

## Usage
Install the dependency packages.
```
yarn install
```

Bundle and transform the input files (with webpack), start & open the development server, and serve the output.
```
yarn develop
```

### Production
```
yarn build
```
Bundles and transforms src files with webpack mode set to production. Outputs to `/dist`, which can then by served (e.g. by a CDN; I like [Netlify](https://www.netlify.com/)).

## Inspiration
I wanted to practice using Redux and React Hooks, so I thought I'd do it all in one (and try to do something *a bit more exciting* than a Todo app).
