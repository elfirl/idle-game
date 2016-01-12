var gameData = {
	numberOfClicks: 0,
	multiplier: 1,
	autoClicks: 0,
};

$(document).ready(function() {

	// Display initial clicks on page load.
	$(".total-clicks").text(gameData.numberOfClicks);

    // Update the number of clicks, and show it on the page.
    $(".click-button").on("click", function(event) {
    	gameData.numberOfClicks = gameData.numberOfClicks + gameData.multiplier;
    	$(".total-clicks").text(gameData.numberOfClicks);
    });

    // Upgrades the number of clicks you get when you "Click me!".
    $(".upgrade-button").on("click", function(event) {
    	gameData.multiplier++;
    });

    // Increases autoClicks when the button is pressed.
    $(".auto-clicks-button").on("click", function(event) {
    	gameData.autoClicks++;
    	console.log(gameData.autoClicks);
    })

	function totalAll() {
		gameData.numberOfClicks = gameData.numberOfClicks + gameData.autoClicks;
		$(".total-clicks").text(gameData.numberOfClicks);
	}

    // Totals all clicks every 1000ms (or 1 second)
	setInterval(totalAll, 1000);    

    // Checks to see if there are enough clicks to buy things.
    function purchaseThings() {
    // Figure out what the cost is.

    // If there are more clicks then the cost, increase the thing by 1.

    }


});
