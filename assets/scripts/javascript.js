var gameData = {
    clicksPerClick: 1,
	numberOfClicks: 0,
	multiplier: 0,
	autoClicks: 0,
};

$(document).ready(function() {

	// Display initial data on page load.
	$(".total-clicks").text(gameData.numberOfClicks);
    $(".total-upgrades").text(gameData.multiplier);
    $(".auto-click-total").text(gameData.autoClicks);
    $(".clicks-with-bonus").text(gameData.clicksPerClick);

    // Update the number of clicks, and show it on the page.
    $(".click-button").on("click", function(event) {
        gameData.numberOfClicks++;
    	gameData.numberOfClicks = gameData.numberOfClicks + gameData.multiplier;
    	$(".total-clicks").text(gameData.numberOfClicks);
    });

    // Upgrades the number of clicks you get when you "Click me!".
    $(".upgrade-button").on("click", function(event) {
    	gameData.multiplier++;
        gameData.clicksPerClick++;
        $(".clicks-with-bonus").text(gameData.clicksPerClick);
        $(".total-upgrades").text(gameData.multiplier);
    });

    // Increases autoClicks when the button is pressed.
    $(".auto-clicks-button").on("click", function(event) {
    	gameData.autoClicks++;
        $(".auto-click-total").text(gameData.autoClicks);
    })

	function totalAll() {
		gameData.numberOfClicks = gameData.numberOfClicks + gameData.autoClicks;
		$(".total-clicks").text(gameData.numberOfClicks);
	}

    // Totals all clicks every 1000ms (or 1 second)
	setInterval(totalAll, 1000);


});
