(function(window) {
	var TwitterWidgetsLoader = {
		src: '//platform.twitter.com/widgets.js',
		loading: false,
		listeners: [],
		interval: 50,

		load: function(callback) {
			this.listeners.push(callback);

			if(window.twttr && window.twttr.widgets) {
				this.done();
				return;
			}

			if(this.loading) {
				return;
			}

			this.loading = true;

			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = this.src;
			document.body.appendChild(script);

			this.poll();
		},

		poll: function() {
			if(window.twttr && window.twttr.widgets) {
				return this.done();
			}

			var self = this;

			setTimeout(function() {
				self.poll();
			}, this.interval);
		},

		done: function() {
			for(var listenerIndex = 0; listenerIndex < this.listeners.length; listenerIndex++) {
				this.listeners[listenerIndex](window.twttr);
			}

			this.listeners.length = 0;
		}
	};

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = TwitterWidgetsLoader;
	} else {
		window.TwitterWidgetsLoader = TwitterWidgetsLoader;
	}
}(window));