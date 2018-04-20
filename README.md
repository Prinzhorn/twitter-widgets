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

//The callback is optional.
TwitterWidgetsLoader.load();
// at some point later `window.twttr` will be defined.
```

## Changelog

### 2.0.0

* Make the callback parameter optional (#1)
* Error-first callback (#2)
* Always load the script via `https://` instead of protocol-relative

### 1.0.0

* Always call the callback asynchronously
* Fixed a bug with infinite recursion when nesting load() calls
