var my_time;
		$(document).ready(function () {
			pageScroll();
		});

		function pageScroll() {
			var objDiv = document.getElementById("contain");
			objDiv.scrollTop = objDiv.scrollTop + 1;
			$('p:nth-of-type(1)').html('scrollTop : ' + objDiv.scrollTop);
			$('p:nth-of-type(2)').html('scrollHeight : ' + objDiv.scrollHeight);
			if (objDiv.scrollTop == (objDiv.scrollHeight - 950)) {
				objDiv.scrollTop = 0;
			}
			my_time = setTimeout('pageScroll()', 10);
		}