
	

$(document).ready(function () {
    
	//navigation bar active class switching
	$(".nav a").on("click", function(){
		$(".nav").find(".active").removeClass("active");
		$(this).parent().addClass("active");
	});

	//navigation bar on mobile view on item click close dropdown
    $(".navbar-nav li a").click(function(event) {
        $('button.navbar-toggle').click()
    });

});

