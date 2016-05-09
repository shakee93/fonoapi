[![GitHub stars](https://img.shields.io/github/stars/shakee93/fonoapi.svg)](https://github.com/shakee93/fonoapi/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/shakee93/fonoapi.svg)](https://github.com/shakee93/fonoapi/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/shakee93/fonoapi/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/shakee93/fonoapi/.svg?style=social)](https://twitter.com/intent/tweet?text=fonoApi - Mobile Device Description Api (https://github.com/shakee93/fonoapi/) so cool check it out)

#fonoApi - jQuery Library

jQuery Makes life easier, i thought it would be nice to have a jQuery library.. so here it is

Play in Codepen Demo -  [here](http://codepen.io/Shakee93/pen/reYvow)

####How to use

```

// set token globally if you wish
// $.fn.fonoApi.options.token = "XXX";

$('.api').fonoApi({
		token : "xxx",
		device : "i9305",
		template : function() {
			// your custom template or default template works
			// data object available here as argument
		}
});
```

easy as that..

Available options and method documentaion goes below..

#### available options
```
  token
  device
  brand
  position
```

#### overridable default options and methods

```
	$.fn.fonoApi.options = {
		url : "https://fonoapi.freshpixl.com/v1/getdevice",
		token : null,
		limit : 5,
		onComplete : null,
		onFailed : null,
		onDisplay : null,
		template : null
	};
```

#### available callbacks

```
  onComplete : triggers on process Completes
  onFailed : triggers on process failes or default works
  onDisplay : triggers on displays data
```


Hope it suffice !! 
if you have any bugs open new issue please read closed bugs before.
give a star or send a pull anything..
