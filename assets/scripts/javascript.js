var numberOfClicks = 0;

$( document ).ready(function() {

	// Display initial clicks on page load.
	$(".total-clicks").text(numberOfClicks);

    // Update the number of clicks, and show it on the page.
    $(".rectangle").on("click" , function() {
    	numberOfClicks = numberOfClicks + 1;
    	$(".total-clicks").text(numberOfClicks);
    });









});
