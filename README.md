# VNTable

__COMPONENT DESCRIPTION GOES HERE__


## Demo & Examples

Live demo: [cmihalyi.github.io/vntable](http://cmihalyi.github.io/vntable/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use vntable is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/vntable.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install vntable --save
```


## Usage

__EXPLAIN USAGE HERE__

```
var VnTable = require('vntable');

<VnTable>Example</VnTable>
```

### Properties

* __DOCUMENT PROPERTIES HERE__

`className` - STR - add a class to the component
`head={columns}` -
`body={data}`
`preSortColumn={columns[1]}`
`initialRowSelected={data[0]}`

| Properties        | Type          | Description
| ----------------- |:-------------:| -----------
| className         | str           | add class name to table for styling purposes
| head              | array         | data object for the headers of the table
| body              | array         | data object for the content rows of the table
| preSortColumn     | obj           | object for the column you would like the table sorted by on mounting
| initialRowSelected| obj           | object for the row you would like selected on mount
| onRowClick        | function      | listener for row click
| onLinkClick       | function      | listener for link click


### Notes

__ADDITIONAL USAGE NOTES__


## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

__PUT LICENSE HERE__

Copyright (c) 2017 chris mihalyi.
