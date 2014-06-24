
//Twitter feed

$(document).ready(function() {
    $(".tweet").tweet({
      join_text: "auto",
      username: "HuffPostGreen",
      avatar_size: 48,
      count: 3,
      loading_text: "loading tweets..."
    });
});

//hook up flickr feed

$(document).ready(function() {
	$('div.flickr').flickrush({
		limit:6,
		id:'44499772@N06',
		random:true
	});
});

//dropdown menu by chris coyier

$(document).ready(function() {

	//buildingdropdown
	$("<select />").appendTo(".band-navigation nav");

	//Create default option
	$("<option />", {
		"selected": "selected",
		"select"   : "",
		"text"    : "Go to . . ."
	}).appendTo("nav select");

	//populate dropdowns with menu items
	$("nav li a").each(function() {
		var el = $(this);
		$("<option />", {
			"value"   : el.attr("href"),
			"text"    : el.text()
		}).appendTo("nav select");
	});

	//make the dropdown links active
	$("nav select").change(function() {
		window.location = $(this).find("option:selected").val();
	});
});


//waypoint navigation

$(function() {                
	
var band_navigation = $(".band-navigation");
var nav = $("nav");

band_navigation.waypoint({
	handler: function(direction) {
		nav.toggleClass('sticky', direction=='down');

		if (direction == 'down')
				band_navigation.css({ 'height':nav.outerHeight() });
		else
				band_navigation.css({ 'height':'auto' });
	}
});

});
