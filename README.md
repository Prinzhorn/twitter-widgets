# twitter-widgets
Wrapper for dynamically loading the Twitter widgets script (follow button, embedded tweets etc.)

```
npm install twitter-widgets
```

```js
var TwitterWidgetsLoader = require('twitter-widgets');

TwitterWidgetsLoader.load(function(twttr) {
	twttr.widgets.createTweet('20', document.getElementById('tweet'));
});

TwitterWidgetsLoader.load(function(twttr) {
	twttr.widgets.createFollowButton('Prinzhorn', document.getElementById('follow'));
});
```