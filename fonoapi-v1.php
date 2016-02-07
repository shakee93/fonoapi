<?php

/**
 * Class fonoApi v1
 * Author @shakee93
 * Version 1.0.0
 */

class fonoApi
{
	static $_ApiKey = null;
	static $debug = false;

	static $_ApiUrl = "https://fonoapi.freshpixl.com/v1/";

	function __construct($ApiKey, $url = null)
	{
		if($url != null) {
			self::$_ApiUrl = $url;
		}

		self::$_ApiKey = $ApiKey;
	}

	/**
	 *
	 * Gets Device Data Object from fonoapi.freshpixl.com
	 *
	 * @param      $device
	 * @param null $position
	 * @param null $brand
	 *
	 * @return mixed
	 * @throws \Exception
	 */
	public static function getDevice($device, $position = null, $brand = null){
		$url = self::$_ApiUrl . "getdevice";

		$postData = array(
			'brand' => trim($brand),
			'device' => trim($device),
			'position' => $position,
			'token' => self::$_ApiKey
			 );

		$result = json_decode(self::sendPostData($url, $postData));

		if (isset($result->status)) {
			$innerException ="";

			if(self::$debug){
				$innerException = " <strong>innerException</strong> : " . $result->innerException;
			}

			throw new Exception($result->message . $innerException);
		}else {
			return $result;
		}
	}

	/**
	 * Sends Post Data to the Server
	 *
	 * @param $url
	 * @param $post
	 *
	 * @return mixed
	 */
	static function sendPostData($url, $post){
	  $ch = curl_init($url);
	  curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");  
	  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	  curl_setopt($ch, CURLOPT_POSTFIELDS,$post);
	  curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1); 
	  $result = curl_exec($ch);
	  curl_close($ch);
	  return $result;
	}
}
