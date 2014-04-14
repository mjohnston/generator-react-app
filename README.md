[![Build Status](https://travis-ci.org/mjohnston/generator-react-app.svg?branch=master)](https://travis-ci.org/mjohnston/generator-react-app)

> [Yeoman](http://yeoman.io) generator

This generator creates a skeleton React project that uses [webpack](https://github.com/webpack/webpack "webpack") to bundle client-side JavaScript files. The webpack config is set up to require React from the node_modules directory.

In addition, the [LESS loader](https://github.com/webpack/less-loader "LESS loader") is enabled so that you can do the following from JavaScript:

```javascript
require('./app.less');
```

## Getting Started

### Installing

First, make sure you have yeoman installed.

```
$ npm install -g yo
```

Install the React app generator globally.

```
$ npm install -g generator-react-app
```

Finally, initiate the generator:

```
$ yo react-app my-app
```

### Component generator

There is also a component generator that will scaffold the resources necessary for a typical React component.

```
$ yo react-app:component foo-bar
```

This will create:

* src/components/foo-bar.js
* src/components/foo-bar.less

### Running the App

```
$ npm start
```

This will start a server on port 9000. The port number can be overriden
with `process.env.PORT`.

A watch task will also be triggered, watching any source files inside `src`. Live Reload is also enabled by default. A connect server will be generated at `index.js`, and the client-side code is generated in the `src` directory.

## License

MIT
