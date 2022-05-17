var theImages = new Array()
theImages[0] = 'http://loa2.cagworks.net/images/banner/banner1.png'
theImages[1] = 'http://dbg.cagworks.net/images/banner/banner2.jpg'
theImages[2] = 'http://loa2.cagworks.net/images/banner/banner3.png'
theImages[3] = 'http://loa2.cagworks.net/images/banner/banner4.png'
theImages[4] = 'http://loa2.cagworks.net/images/banner/banner5.png'
theImages[5] = 'http://loa2.cagworks.net/images/banner/banner6.png'
theImages[6] = 'http://loa2.cagworks.net/images/banner/banner7.png'
theImages[7] = 'http://loa2.cagworks.net/images/banner/banner8.png'
theImages[8] = 'http://loa2.cagworks.net/images/banner/banner9.png'
theImages[9] = 'http://loa2.cagworks.net/images/banner/banner10.png'
theImages[10] = 'http://loa2.cagworks.net/images/banner/banner11.png'
theImages[11] = 'http://dbg.cagworks.net/images/banner/banner12.png'
theImages[12] = 'http://loa2.cagworks.net/images/banner/banner13.jpg'
theImages[13] = 'http://loa2.cagworks.net/images/banner/banner14.png'
theImages[14] = 'http://loa2.cagworks.net/images/banner/banner15.png'
var j = 0
var p = theImages.length;
var preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Image()
   preBuffer[i].src = theImages[i]
}
var whichImage = Math.round(Math.random()*(p-1));
function showImage(){
document.write('<img src="'+theImages[whichImage]+'">');
}