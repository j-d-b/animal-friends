# min-react-setup
A fairly minimal React app setup designed to facilitate comprehension of the underlying tools.

I wanted a boilerplate for setting up a new React project without the full array of tools and abstractions that come with [`create-react-app`](https://github.com/facebook/create-react-app) (CRA).

## Inspiration
Some beginners don't grasp that "React is just JavaScript" because CRA and JSX make it feel like you're working with a magic framework. React is great because it's just a UI library. The aim of this project is to demystify CRA development and give the developer complete understanding, and thus control of the toolchain.

This boilerplate provides:
* A hot-reloading development server
* Bundling with [webpack](https://webpack.js.org/)
* Compiling with [Babel](https://babeljs.io/)
* A basic HTML template (for [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin)) and sample favicon
* A production build script (literally `yarn build`)

In comparison to CRA, I didn't include a bunch of comments in all the config/template code, so you won't have to go remove all those when you're making this your own. The code is still understandable because `min-react-setup` is *less complex* than CRA. This also means it does not include all the the functionality of CRA and is not a replacement. I like to understand exactly what is happening when I run `yarn start`, and want to include only what I use for the cleanest possible setup, adding more packages and webpack loaders & plugins as needed.

## Getting Started
### Prerequisites
The following sections assume you have the following installed:
* [Node.js](https://nodejs.org/en/) runtime
* [Yarn](https://yarnpkg.com/en/) package manager

## Usage
Install the dependency packages.
```
yarn install
```

Bundle and transform the input files (with webpack), start & open the development server, and serve the output.
```
yarn develop
```

### What's Happening?
1. `yarn develop` runs the `develop` script in `package.json` (`webpack-dev-server --hot --open --mode development`)

This will use the configuration set in `webpack-config.js`

2. webpack will bundle and transform the input from the `src/index.js` entrypoint (all modules and files `import`ed here) using the loaders and plugins specified in `webpack-config.js`

We're only using *one loader* and *one plugin* here.

a. `webpack-config.js` specifies `babel-loader` which will transform all files with a `.js` extension using the babel configuration set in `.babelrc`.

b. `webpack-config.js` specifies the `html-webpack-plugin`, which will inject a script tag referencing the bundled JavaScript into the end of the `<body>` specified in `public/index.html`. It will also include a `<link>` to `public/favicon.ico` in the `<head>`.

3. The development server will serve the built application using the configuration set in `webpack-config.js` (http://localhost:5000).

### Production
```
yarn build
```
Bundles and transforms src files with webpack mode set to production. Outputs to `/dist`, which can then by served.

## Recommended additions
As your project grows, you'll likely want to add some features:
* Additional webpack loaders (e.g. [`file-loader`](https://github.com/webpack-contrib/file-loader), [`css-loader`](https://github.com/webpack-contrib/css-loader)) *(I often use [styled-components](https://www.styled-components.com/), so I didn't want to include these by default)*
* A separate `webpack.config.dev.js` and `webpack.config.prod.js` (see https://webpack.js.org/guides/production/)
* Add `historyApiFallback: true` to `devServer` in `webpack.config.js` for true single index.html SPAs.

## Dependencies
This project only has two client dependencies, `react` and `react-dom`.

For the toolchain, we also need:
* Babel (`@babel/core`, `@babel/corepreset-env`, `@babel/corepreset-react`, `babel-loader`)
* `webpack` and `webpack-dev-server` (and `webpack-cli`)
* `html-webpack-plugin`

The full list is given below, from `package.json`.
```json
"devDependencies": {
  "@babel/core": "^7.1.2",
  "@babel/preset-env": "^7.1.0",
  "@babel/preset-react": "^7.0.0",
  "babel-loader": "^8.0.4",
  "html-webpack-plugin": "^3.2.0",
  "webpack": "^4.20.2",
  "webpack-cli": "^3.1.2",
  "webpack-dev-server": "^3.1.9"
},
"dependencies": {
  "react": "^16.5.2",
  "react-dom": "^16.5.2"
}
```
