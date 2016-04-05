/*!
 * fonoApi v1.0.0 (https://fonoapi.freshpixl.com/)
 * Author : @shakee93
 * Licensed under the MIT license
 */

if( typeof Object.create != 'function') {
	Object.create = function( obj ) {
		function F() {};
		F.prototype = obj;
		return new F();
	}

};

(function($ , window, document, undefined) {

	var Api = {
		init : function(options, elem) {

			var self = this;	

			self.elem = elem;
			self.$elem = $(elem);
			
			if( typeof options === "string") {
				self.device = options;
			}else {
				self.device = options.device;
				self.brand = options.brand;
				self.position = options.position;
			}

			self.options = $.extend({},$.fn.fonoApi.options, options);

			if(self.options.token == null) {
				console.error('Token Missing. Generate a Token at fonoapi.freshpixl.com');
			}

			self.refresh();
		},

		refresh : function() {
			var self = this;

			self.fetch().done(function( results ) {

				if(results.status) {

					if(typeof self.options.onFailed === "function") {
						self.options.onFailed.apply(self.elem, arguments);
					}else {
						self.displayError(results);
					}

				}else {
					// limit ammendment
					results = self.limit(results, self.options.limit);

					// set user template or run default
					if(typeof self.options.template === "function") {
						var template = self.options.template.apply(self.elem, results);
						self.setTemplate(template);
					}else {
						self.setDefaultTemplate(results);
					}

					self.display();
				}
				
				// trigger onComplete
				if(typeof self.options.onComplete === "function") {
					self.options.onComplete.apply(self.elem, arguments);
				}

			}).fail(function (jqXHR, textStatus) {

				// handle AJAX fails
				console.log(jqXHR);	
				if(typeof self.options.onFailed === "function") {
					self.options.onFailed.apply(self.elem, arguments);
				}else {
					self.displayError(textStatus);
				}
			});;
		},
		fetch : function() {
			return $.ajax({
				url : this.options.url,
				data : {
					token : this.options.token,
					device : this.device,
					brand : this.brand,
					position : self.position
				},
				dataType : "json"
			});
		},
		setDefaultTemplate : function(results) {
			var self = this;

			self.devices = $.map(results, function(obj, i) {
				
				content  = '<h3>'+ obj.DeviceName + '</h3>';
				content += '<table class="table table-striped" style="width:100%">';
				content += '<tr><th>info</th><th>Description</th></tr>';
				
				for(var key in obj){
				  content += "<tr><td>" + key + "</td><td>" + obj[key] + "</td><tr>";
				}

				content += "</table>";
				return $('<div class="table-responsive"></div>').append(content);
				
			});
		},
		setTemplate : function(template) {
			var self = this;
			self.devices = template;
		},
		display : function() {
			var self = this;
			// triggere onDisplay
			if(typeof self.options.onDisplay === "function") {
				self.options.onDisplay.apply(self.elem, arguments);
			}

			this.$elem.html(this.devices);
		},
		limit : function(obj, count) {
			return obj.slice(0, count);
		},
		displayError : function(results) {

			// handle error displays
			if(results.status){
				this.$elem.html(
					$('<span></span>').append(results.message + '<br>')
				);
			}else {
				this.$elem.html(results);
			}
		}
	};

	$.fn.fonoApi = function (options) {
		return this.each(function() {
			var api = Object.create(Api);
			api.init(options, this);
			$.data(this, 'fonoApi', api);
		});
	};

	// available default options
	$.fn.fonoApi.options = {
		url : "https://fonoapi.freshpixl.com/v1/getdevice",
		token : null,
		limit : 5,
		onComplete : null,
		onFailed : null,
		onDisplay : null,
		template : null
	};

})(jQuery, window, document);