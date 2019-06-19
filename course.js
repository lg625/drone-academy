/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
5. Init Tabs
6. Init Accordions
7. Init Dropdowns


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

    initTabs();
	initAccordions();
	initDropdowns();

	function initTabs()
	{
		$('.tab_header').on('click', function()
		{
			$('.tab_header').removeClass('active');
			$(this).addClass('active');
			var clickedIndex = $('.tab_header').index(this);

			var panels = $('.tab_panel');
			panels.removeClass('active');
			$(panels[clickedIndex]).addClass('active');
		});
	}

	function initAccordions()
	{
		if($('.accordion').length)
		{
			var accs = $('.accordion');

			accs.each(function()
			{
				var acc = $(this);

				if(acc.hasClass('active'))
				{
					var panel = $(acc.next());
					var panelH = panel.prop('scrollHeight') + "px";

					panel.css('max-height', panel.prop('scrollHeight') + "px");
				}

				acc.on('click', function() {
					var panel = $(acc.next());
					var panelH = panel.prop('scrollHeight') + "px";

					if(acc.hasClass('active'))
					{
						acc.removeClass('active');

						panel.css('max-height', "0px");
					}
					else
					{
						acc.addClass('active');

						panel.css('max-height', panel.prop('scrollHeight') + "px");
					}
				});
			});
		}
	}

	/* 

	7. Init Dropdowns

	*/

	function initDropdowns()
	{
		if($('.dropdowns li').length)
		{
			var dropdowns = $('.dropdowns li');

			dropdowns.each(function()
			{
				var dropdown = $(this);
				if(dropdown.hasClass('has_children'))
				{
					if(dropdown.hasClass('active'))
					{
						var panel = $(dropdown.find('> ul'));

						panel.css('max-height', panel.prop('scrollHeight') + "px");
					}

					dropdown.find(' > .dropdown_item').on('click', function()
					{
						var panel = $(dropdown.find('> ul'));
						dropdown.toggleClass('active');

						if(panel.css('max-height') == "0px")
						{
							panel.css('max-height', panel.prop('scrollHeight') + "px");
						}
						else
						{
							panel.css('max-height', "0px");
						}
					});
				}
			});
		}
	}

});