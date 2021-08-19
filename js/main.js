// @ts-nocheck
// @ts-ignore
$(document).ready(function () {
	// @ts-ignore
	var currentFloor = 7;
	var counterUp = $(".counter-up");
	var counterDown = $(".counter-down");
	var floorPath = $(".home-image path");

	floorPath.on("mouseover", function (e) {
		// @ts-ignore
		floorPath.removeClass("current-floor");
		currentFloor = $(this).attr("data-floor");
		$(".counter").text(currentFloor);
	});
	counterUp.on("click", function () {
		if (currentFloor < 18) {
			currentFloor++;
			usCurrentFloor = currentFloor.toLocaleString("en-US", {
				minimumIntegerDigits: 2,
				useGroupping: false,
			});
			floorPath.removeClass("current-floor");
			$(".counter").text(usCurrentFloor);
			$(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
		}
	});
	counterDown.on("click", function () {
		if (currentFloor > 2) {
			currentFloor--;
			usCurrentFloor = currentFloor.toLocaleString("en-US", {
				minimumIntegerDigits: 2,
				useGroupping: false,
			});
			floorPath.removeClass("current-floor");
			$(".counter").text(usCurrentFloor);
			$(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
		}
	});
});
