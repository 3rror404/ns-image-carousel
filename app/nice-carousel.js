var frameModule = require("ui/frame");
var observableModule = require("data/observable");
var Platform = require('platform');

var pageData = new observableModule.Observable();

var myDataArray = [
	{title:"Slide 1", color: "rgba(0,0,0,0)", image:"~/img/enjoying-a-tasty-burger-picjumbo-com.jpg"},
	{title:"Slide 2", color: "rgba(0,0,0,0)", image:"~/img/fresh-oranges-on-small-farmers-market-picjumbo-com.jpg"},
	{title:"Slide 3", color: "rgba(0,0,0,0)", image:"~/img/knife-and-fork-salt-and-pepper-dinner-is-ready-picjumbo-com.jpg"},
	{title:"Slide 4", color: "rgba(0,0,0,0)", image:"~/img/lazy-sunday-healthy-breakfast-picjumbo-com.jpg"}
];

var myCarousel = null;
pageData.set("myDataArray", myDataArray);

exports.navigatingTo = function() {

};

exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = pageData;

	myCarousel = page.getViewById("myCarousel");

	if (page.ios) {
		var controller = frameModule.topmost().ios.controller;

		/**
		 * Make ActionBar background transparent
		 */
		var navBar = controller.navigationBar;
		navBar.shadowImage = new UIImage();
		navBar.setBackgroundImageForBarMetrics(new UIImage(), UIBarMetrics.UIBarMetricsDefault);

		/**
		 * Fade in ActionBar on scroll
		 */
		var scrollView = page.getViewById("scrollView");
		scrollView.on('scroll', function(args){
			var offset = args.object.verticalOffset;
			//console.log((offset-50)/20);
			navBar.backgroundColor = UIColor.colorWithRedGreenBlueAlpha(1, 0, 0, (offset-50)/20);
		});
	}
	
}

exports.selectPageEvent = function(args){
    if(!myCarousel) return;
    myCarousel.selectedPage = 2;
}

exports.goBack = function(args) {
	frameModule.topmost().goBack();
}