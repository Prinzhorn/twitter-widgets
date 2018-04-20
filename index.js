(function(window) {
	var TwitterWidgetsLoader = {
		src: '//platform.twitter.com/widgets.js',
		loading: false,
		listeners: [],
		interval: 50,

		load: function(callback) {
			var _this = this;

			this.listeners.push(callback);

			if (window.twttr && window.twttr.widgets) {
				setTimeout(function() {
					_this.done();
				});
				return;
			}

			if (this.loading) {
				return;
			}

			this.loading = true;

			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = this.src;
			script.addEventListener('error', function() {
				_this.done(new Error('Twitter widgets JS failed to load. Is there an ad blocker enabled?'));
			});
			document.body.appendChild(script);

			this.poll();
		},

		poll: function() {
			if (window.twttr && window.twttr.widgets) {
				return this.done();
			}

			var _this = this;

			setTimeout(function() {
				_this.poll();
			}, this.interval);
		},

		done: function(error) {
			while (this.listeners.length) {
				this.listeners.pop()(error, window.twttr);
			}
		}
	};

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = TwitterWidgetsLoader;
	} else {
		window.TwitterWidgetsLoader = TwitterWidgetsLoader;
	}
})(window);
