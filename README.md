# Service Worker download test case

(You should be able to run with any static web server - I've just been using 
`python -m SimpleHTTPServer`).

The links with the 'download' attributes served by the SW fail to download.

## Screenshot

<img src="screenshot.png?raw=true" alt="Screenshot" width="400px"/>

## Browsers tested
 
* Chrome desktop v51, v52 and v54
* Samsung Internet for Android v4.0

## Link to bug report

https://bugs.chromium.org/p/chromium/issues/detail?id=468227

Jake Archibald found the bug for me and [commented there](https://bugs.chromium.org/p/chromium/issues/detail?id=468227#c13)- thanks Jake!
