# Animal Friends 🐕
A basic, (largely) un-styled, example React/Redux app (also using [React Hooks](https://reactjs.org/docs/hooks-intro.html)!).

Add some cute animal friends, feed them berries, and watch them grow! Favorites are persisted using `localStorage`.

Built using my own [`min-react-starter`](https://github.com/j-d-b/min-react-starter).

Play around with a live version [here](https://animal-friends.netlify.com/).

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

## Testing
Uses [Jest](https://jestjs.io).

```
yarn test
```

## Inspiration
I wanted to practice using Redux, React Hooks, and container/component separation, so I thought I'd do it all in one (and try to do something *a bit more exciting* than a Todo app).

As I wanted to learn new tools/concepts, I found myself coming back to `animal-friends` as a good place to practice implementation. The current step is adding a few tests; next is styling (likely with [emotion](https://emotion.sh/), as I want to compare to [styled-components](https://www.styled-components.com/)).

I'm trying to incrementally add to this project, because it's kind of fun.

## Todo
* Styling
* More test coverage
* CI
