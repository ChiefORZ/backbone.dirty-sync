# backbone.dirty-sync

Creates an abstraction of the Backbone.sync Method - that figures out, which attributes of the Backbone Model or Collection has changed since the last sync.

## Installation

The component can be used as a Common JS module, an AMD module, or a global.

### Usage with Browserify

Install with npm, use with [Browserify](http://browserify.org/)

```
> npm install backbone.dirty-sync
```

and in your code

```javascript
var Backbone      = require('backbone');
var Backbone.sync = require('backbone.dirty-sync');
```

### Usage as browser global

You can include `backbone.dirty-sync.js` directly in a script tag. Make 
sure that it is loaded after underscore and backbone. It overwrites the default `Backbone.sync` with the abstraction.

```HTML
<script src="underscore.js"></script>
<script src="backbone.js"></script>
<script src="backbone.dirty-sync.js"></script>
```

## License

MIT
