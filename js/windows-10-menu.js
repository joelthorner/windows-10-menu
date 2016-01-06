$( document ).ready(function() {
	
	/* ---------------- scroll menu plugin ---------------- */
	$('.scrollable').perfectScrollbar();


	/* ---------------- dropdown menu system ---------------- */

	// open event
	$('[data-toggle=w-dropdown]').click(function(event) 
	{
		event.preventDefault();
		$(this).toggleClass('open');
		$('body').toggleClass('open-submenu');
		$($(this).data('target')).toggleClass('open');
	});

	// closer's event
	$('[data-toggle=w-dropdown-closer]').click(function(event) 
	{
		$('body').removeClass('open-submenu');
		$('[data-toggle=w-dropdown], .w-dropdown-menu').removeClass('open');
	});

	// close when click out of menu
	$(document).mouseup(function (e)
	{
	    var container = $(".w-dropdown-menu, [data-toggle=w-dropdown], [data-toggle=w-dropdown-closer]");
	    if (!container.is(e.target) && container.has(e.target).length === 0)
	    {
	      $('body').removeClass('open-submenu');
			$('[data-toggle=w-dropdown], .w-dropdown-menu').removeClass('open');
	    }
	});




	// extra: 

	/* ---------------- clock system ---------------- */
	var clock = new Date();   
	$('#date-now').html(outputDate(clock));

	var refresh = setInterval(function(){
		clock = new Date();
		$('#date-now').html(outputDate(clock));
	}, 1000);

	function outputDate(date){
		var d_names = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
		var minutes = date.getMinutes();
		if (minutes < 10) {minutes = "0"+minutes;}
		var result = date.getHours() + ":" + minutes + "<br/>" +
						 d_names[date.getDay()] + "<br/>" +
						 date.getDate() + "/" +
				   	 date.getMonth() + "/" +
				   	 date.getFullYear();

		return result;
	}

});