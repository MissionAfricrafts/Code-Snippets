//Js File to identify the in which device your application is loaded
$(document).ready(function(){
	//For iDevices 
	var isiDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
	if (isiDevice){
	  console.log("Logged in iPhone Device");
	} else {
		console.log("Not an Iphone device");
	}
	
	//For Android Devices
	var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
	if (isAndroid){
	  console.log("Logged in Android Device");
	} else {
		console.log("Not an Android device");
	}
	
	//For BlackBerry Mobiles
	var isBlackBerry = /blackberry/i.test(navigator.userAgent.toLowerCase());
	if (isBlackBerry){
	  console.log("Logged in BlackBerry Device");
	} else {
		console.log("Not an BlackBerry device");
	}
	
	//For WebOS
	var isWebOS = /webos/i.test(navigator.userAgent.toLowerCase());
	if (isWebOS){
	  console.log("Logged in Web");
	} else {
		console.log("Not an Web");
	}
	
	//For Windows Phone
	var isWindowsPhone = /windows phone/i.test(navigator.userAgent.toLowerCase());
	if (isWindowsPhone){
	  console.log("Logged in Windows Phone");
	} else {
		console.log("Not an Windows Phone");
	}
	
});