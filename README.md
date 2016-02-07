# FonoApi - Mobile Device Description Api
https://fonoapi.freshpixl.com/

this is an Api which can provide mobile device descriptions such as model, brand, cpu, gpu, dimensions, release date etc...

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

