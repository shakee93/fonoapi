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
* Database Updated (New Devices Added) : 5th April 2017
* Database Updated (Old Device Data Updated) : 5th April 2017
* Database Updated : 8th May 2017
* Database Updated : 10th July 2017
* Database Updated : 10th August 2017
* Database Updated : 15th September 2017
* Database Updated : 15th October 2017
* Database Updated : 17th November 2017
* Database Updated : 12th December 2017
* Database Updated : 22th January 2018
* Database Updated : 23th February 2018
* Database Updated : 30th April 2018
* Database Updated : 28th August 2018
* <strong>Database Updated : 29th MARCH 2019</strong>

https://fonoapi.freshpixl.com/


This is an API which can provide mobile device descriptions such as model, brand, CPU, GPU, dimensions, release date etc. It might be helpful if you are building a website like GSMAera, Phonearena or something similar. This API contains a database of a mobile device descriptions of Android, iOS and some old phones too.. :D
This is the PHP class to communicate with the API. It would be nice if someone can help with other languages though. ;)

### Api

API URL: https://fonoapi.freshpixl.com/v1/

###### Method `getdevice` (https://fonoapi.freshpixl.com/v1/getdevice)

Available options
  - brand - 
       Pass the Mobile Device Brand (example : "samsung", "htc")
  - device* - 
       Pass nearly relevent mobile device name (example : "i9305", "A8") 
       This might result multiple results at a time.
  - position -
       When a set of results is returned you can get a specific device by passing the position of your device on the result set. count starts from 0
  - token* -
        You will need a token to access the Api. no registration, nothing, just grab the key.
        You can get it here https://fonoapi.freshpixl.com/token/generate

###### Method `getlatest` (https://fonoapi.freshpixl.com/v1/getlatest)

Available options
  - brand - 
       It gives the latest you can filter the brand (example : "samsung", "htc")
  - limit - 
       Limit the result count (Max 100)
  - token* -
       You will need a token to access the Api. no registration, nothing, just grab the key.<br>
       You can get it here https://fonoapi.freshpixl.com/token/generate

<strong>Note:</strong> the API will return only 100 devices per request

------

###### PHP Demo

Install the package in your PHP project:

```bash
$ composer require shakee93/fonoapi
```

```
<?php
use Shakee93\Fonoapi\FonoApi;

require __DIR__.'/vendor/autoload.php';

$apiKey = "xxxxxxxx"; // get your token key here - https://fonoapi.freshpixl.com
$fonoapi = FonoApi::init($apiKey);

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

###### Java
 Library is here : https://github.com/aafanasev/fonoapi-client

###### Dart
 Library is here : https://github.com/thinkdigitalsoftware/fonoapi-dart

 Package is here : https://pub.dev/packages/fonoapi_dart

------

##### Result Set Structure

Check here : https://github.com/shakee93/fonoapi/blob/master/resultset.md
