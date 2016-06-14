/* Hide toggle on tablets and larger screens as page loads*/
$(document).ready(function(){
  if(window.innerWidth >= 551){
  	$('#toggle').hide();
     $('.main-nav ul li').show();
  }
});

$(document).ready(function(){
  if(window.innerWidth <= 750){
  	$('#toggle').show();
    $('.main-nav ul li').hide();
  }
});

/* Hide/show nav bar in mobile view */
$(document).ready(function () {

$('#toggle').click(function () {

 $('.main-nav ul li').toggle("slow");

 $('#toggle_class').toggle("slow");

});
});

/* Hide/show toggle as page viewport is resized */

$(window).resize(function(){
	if(window.innerWidth >= 750) {
		$(".main-nav ul li").show();
    $('#toggle_class').hide();
    	$('#toggle').hide();
	}
});

$(window).resize(function(){
	if(window.innerWidth < 750) {
    $('#toggle_class').show();
			$('#toggle').show();
      	$(".main-nav ul li").hide();
	}
});
