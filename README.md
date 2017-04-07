[![GitHub stars](https://img.shields.io/github/stars/shakee93/fonoapi.svg)](https://github.com/shakee93/fonoapi/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/shakee93/fonoapi.svg)](https://github.com/shakee93/fonoapi/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/shakee93/fonoapi/master/LICENSE)

# FonoApi - Mobile Device Description Api

* Database Updated : 21st September 2016
* Database Updated (New Devices Added) : 27th November 2016
* Database Updated (Old Device Data Updated) : 27th November 2016
* Database Updated (New Devices Added) : 4th January 2017
* Database Updated (Old Device Data Updated) : 4th January 2017
* Database Updated (New Devices Added) : 6th February 2017
* Database Updated (Old Device Data Updated) : 6th February 2017
* Database Updated (New Devices Added) : 3rd March 2017
* Database Updated (Old Device Data Updated) : 3rd March 2017
* <strong>Database Updated (New Devices Added) : 5th April 2017</strong>
* <strong>Database Updated (Old Device Data Updated) : 5th April 2017</strong>

https://fonoapi.freshpixl.com/


This is an API which can provide mobile device descriptions such as model, brand, CPU, GPU, dimensions, release date etc. It might be helpful if you are building a website like GSMAera, Phonearena or something similar. This API contains a database of a mobile device descriptions of Android, iOS and some old phones too.. :D

This is the PHP class to communicate with the API. It would be nice if someone can help with other languages though. ;)

### API
API URL : https://fonoapi.freshpixl.com/v1/

###### Method : getdevice (https://fonoapi.freshpixl.com/v1/getdevice)
Available options
  - brand - 
       Pass the Mobile Device Brand (example : "Samsung", "HTC")
  - device* - 
       Pass nearly relevent mobile device name (example : "i9305", "A8") 
       This might result multiple results at a time.
  - position -
       When a set of results is returned you can get a specific device by passing the position of your device on the result set. Count starts from 0.
  - token* -
    - You will need a token to access the API. No registration, nothing, just grab the key.
      You can acquire key from here: https://fonoapi.freshpixl.com/token/generate

###### Method : getlatest (https://fonoapi.freshpixl.com/v1/getlatest)
Available options
  - brand - 
       It gives the latest devices announced by OEMs. You can filter by the brand (Example : "Samsung", "HTC").
  - limit - 
       Limit the result count (Max 100)
  - token* -
    - You will need a token to access the API. No registration, nothing, just grab the key.
      You can acquire key from here: https://fonoapi.freshpixl.com/token/generate


------
###### PHP Demo

```
<?php

	include_once("fonoapi-v1.php");

	$apiKey = "xxxxxxxx"; // get your token key here - https://fonoapi.freshpixl.com
	$fonoapi = fonoApi::init($apiKey);
	
		try {

			$res = $fonoapi::getDevice("i9305"); // the device you need to get details here

			foreach ($res as $mobile) {
				if (!empty($mobile->DeviceName)) 	echo "Device : ". $mobile->DeviceName . "<br>";
				if (!empty($mobile->Brand)) 		echo "Brand : ". $mobile->Brand . "<br>";
				if (!empty($mobile->cpu)) 			echo "Cpu : " . $mobile->cpu . "<br>";
				if (!empty($mobile->status)) 		echo "Status : " . $mobile->status . "<br>";
				if (!empty($mobile->dimensions)) 	echo "Dimensions : " . $mobile->dimensions . "<br>";
				if (!empty($mobile->_4g_bands)) 	echo "4g : " .$mobile->_4g_bands . "<br>";
			}

		} catch (Exception $e) {
			echo "ERROR : " . $e->getMessage();
		}

?>
```
------

###### Curl Example

```bash
curl https://fonoapi.freshpixl.com/v1/getdevice -XPOST -H 'Accept: application/json' -d 'token=YOUR_TOKEN_HERE&limit=5&device=A8'
```

###### Python
 Library is here : https://github.com/jesusperiago/fonoapi

###### jQuery
 Library is here : https://github.com/shakee93/fonoapi/tree/master/fonoapi-js

###### Nodejs
 Library is here : https://github.com/mtrung/fonoapi/tree/master/fonoapi-nodejs  
 Package is here : https://www.npmjs.com/package/fonoapi-nodejs

------

##### Result Set Structure
Check here : https://github.com/shakee93/fonoapi/blob/master/resultset.md
