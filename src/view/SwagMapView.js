var SwagItemView = require("./SwagItemView");

/**
 * The main view.
 * @class SwagMapView
 */
function SwagMapView() {
	this.swagItemViews = [];
}

/**
 * Add a swag item to be displayed.
 * @method addSwagItem
 */
SwagMapView.prototype.addSwagItem = function(swagItemData) {
	this.swagItemViews.push(new SwagItemView(swagItemData));
}

/**
 * Do the setup.
 * @method setup
 */
SwagMapView.prototype.setup = function() {
	console.log("setting up");
	createCanvas(windowWidth - 1, windowHeight - 1);
}

/**
 * Draw.
 * @method draw
 */
SwagMapView.prototype.draw = function() {
	background(0, 0, 0);

	textSize(32);
	text("Tunapanda Swag",15,35);

	stroke(255, 255, 255);
	line(0, 50, windowWidth, 50);

	for (var i = 0; i < this.swagItemViews.length; i++)
		this.swagItemViews[i].draw();
}

/**
 * Handle window resize events.
 * @method windowResized
 */
SwagMapView.prototype.windowResized = function() {
	resizeCanvas(windowWidth, windowHeight);
}

module.exports = SwagMapView;