(function(window) {
	var TwitterWidgetsLoader = {
		src: 'https://platform.twitter.com/widgets.js',
		loading: false,
		listeners: [],
		interval: 50,

		load: function(callback) {
			var _this = this;

			if(callback) {
				this.listeners.push(callback);
			}

			if (window.twttr && window.twttr.widgets) {
				setTimeout(function() {
					_this._done();
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
				_this._done(new Error('Twitter widgets JS failed to load. Is there an ad blocker enabled?'));
			});
			document.body.appendChild(script);

			this._poll();
		},

		_poll: function() {
			if (window.twttr && window.twttr.widgets) {
				return this._done();
			}

			var _this = this;

			setTimeout(function() {
				_this._poll();
			}, this.interval);
		},

		_done: function(error) {
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
