var frameModule = require("ui/frame");
var topmost = frameModule.topmost();

function navigatingTo(args) {
    var page = args.object;
}
exports.navigatingTo = function() {
    
};

exports.tapSimpleCarousel = function() {
    frameModule.topmost().navigate("simple-carousel");
}

exports.tapNiceCarousel = function() {
    frameModule.topmost().navigate("nice-carousel");
}
