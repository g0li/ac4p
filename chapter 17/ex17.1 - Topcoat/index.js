<!DOCTYPE html>
<html>

<head>
  <title>Hello World #5 - Topcoat Version</title>
  <meta charset="utf-8" />
  <meta name="format-detection" content="telephone=no" />
  <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height" />
  <link rel="stylesheet" type="text/css" href="css/topcoat-mobile-light.min.css">
  <script src="cordova.js"></script>
  <script>
    function onBodyLoad() {
      console.log("Entering onBodyLoad");
      alert("Body Load");
      document.addEventListener("deviceready", onDeviceReady, false);
    }

    function makeListItem(textStr) {
      return '<li class="topcoat-list__item">' + textStr + '</li>';
    }

    function onDeviceReady() {
      console.log("Entering onDeviceReady");
      navigator.notification.alert("Cordova is ready!");
      console.log("Cordova: " + device.cordova);
      var tmpStr;
      tmpStr = '<ul class="topcoat-list__container"><h3 class="topcoat-list__header">Device API Properties</h3>';
      tmpStr += makeListItem('Cordova Version: ' + device.cordova);
      tmpStr += makeListItem('Operating System: ' + device.platform);
      tmpStr += makeListItem('OS Version: ' + device.version);
      tmpStr += makeListItem('Device Model: ' + device.model);
      tmpStr += makeListItem('Universally Unique Identifier: ' + device.uuid);
      tmpStr += '</ul>';
      //Get the appInfo DOM element
      var element = document.getElementById('deviceInfo');
      //replace it with specific information about the device 
      //running the application
      element.innerHTML = tmpStr;
      console.log("Leaving onDeviceReady");
    }
  </script>
</head>

<body onload="onBodyLoad()">
  <div class="topcoat-navigation-bar">
    <div class="topcoat-navigation-bar__item center full">
      <h1 class="topcoat-navigation-bar__title">Hello World #5</h1>
    </div>
  </div>
  <p>This is a Cordova application that makes calls to the Cordova Device API.</p>
  <p id="deviceInfo">Waiting for Cordova Initialization to complete.</p>
</body>

</html>