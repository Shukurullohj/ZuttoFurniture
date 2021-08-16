$(document).ready(function(){
	$('.fade').slick({
		autoplay: true,
		autoplaySpeed: 1500,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});
});
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function initMap() {
	var options = {
		zoom : 10,
		center : {lat : 35.532644, lng:140.451219} 
	}

	var map = new 
	google.maps.Map(document.getElementById('map'), options);

	var marker = new google.maps.Marker({
		position:{lat : 35.532644, lng:140.451219},
		map:map
	});
}