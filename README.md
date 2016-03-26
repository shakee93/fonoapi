# FonoApi - Mobile Device Description Api
https://fonoapi.freshpixl.com/

this is an Api which can provide mobile device descriptions such as model, brand, cpu, gpu, dimensions, release date etc...
it might be helpful if you are building a website lke gsmarena, phonearena or something similar to that. this api contains a database of a mobile device descriptions of android, apple, ios and old phones too.. :D

this is the php class to communicate with the api. it would be nice if someone can help with other languages though. ;)

### Api
Api Url : https://fonoapi.freshpixl.com/v1/

###### Method : getdevice (https://fonoapi.freshpixl.com/v1/getdevice)
available options
  - brand - 
       pass the Mobile Device Brand (example : "samsung", "htc")
  - device* - 
       pass nearly relevent mobile device name (example : "i9305", "A8") 
       this might result multiple results at a time.
  - position -
       when a set of results is returned you can get a specific device by passing the position of your device on the result set. count starts from 0
  - token* -
    - you will need a token to access the Api. no registration, nothing, just grab the key.
      you can get it here https://fonoapi.freshpixl.com/token/generate

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

###### Result Array Description

**Note** : Use a "_" before key if the key is starting with a number (example : _2g_bands, _4g_bands)

- DeviceName
- Brand
- technology
- 2g_bands
- gprs
- edge
- announced
- status
- dimensions
- weight
- sim
- type (display type)
- size
- resolution
- card_slot
- phonebook
- call_records
- camera_c (camera availablity)
- alert_types
- loudspeaker_
- 3_5mm_jack_
- sound_c (Sound Quality)
- wlan
- bluetooth
- gps
- infrared_port
- radio
- usb
- messaging
- browser
- clock
- alarm
- games
- languages
- java
- features_c (additional features sperated by "-")
- battery_c (battery information)
- stand_by (standby time)
- talk_time (standby time)
- colors (available colors)
- sensors
- cpu
- internal (memory + RAM)
- os
- body_c (body features seperated by "-")
- keyboard
- primary_ (primary camera)
- video
- secondary (secondary camera)
- 3g_bands
- speed
- network_c
- chipset
- features  (additional features seperated by "-")
- music_play
- protection
- gpu
- multitouch
- loudspeaker
- audio_quality
- nfc
- camera
- display
- battery_life
- 4g_bands

