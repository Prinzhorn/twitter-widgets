# twitter-widgets

Wrapper for dynamically loading the Twitter widgets script (follow button, embedded tweets etc.)

```
npm install twitter-widgets
```

Can be used with browserify or global `window.TwitterWidgetsLoader`.

```js
var TwitterWidgetsLoader = require('twitter-widgets');

TwitterWidgetsLoader.load(function(err, twttr) {
	if (err) {
		//do some graceful degradation / fallback
		return;
	}

	twttr.widgets.createTweet('20', document.getElementById('tweet'));
});

TwitterWidgetsLoader.load(function(err, twttr) {
	if (err) {
		//do some graceful degradation / fallback
		return;
	}

	twttr.widgets.createFollowButton('Prinzhorn', document.getElementById('follow'));
});
```

## Changelog

### 2.0.0

* Error-first callback

### 1.0.0

* Always call the callback asynchronously
* Fixed a bug with infinite recursion when nesting load() calls
