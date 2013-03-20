// jQuery hoverVideo plugin 
// Coded for you by Alexandre PEREIRA
// March 2013 under license WTFPL – Do What the Fuck You Want to Public License http://www.wtfpl.net/

(function($){
    $.fn.extend({ 
        hovervideo: function(options) {
        	function pad(str, max) {
            		return str.length < max ? pad("0" + str, max) : str;
        		}

    		function preload_img(settings) {
		        var tempImg = [];
		        for (var x = 1; x < settings.imgnum; x++) {
		            tempImg[x] = new Image();
		            tempImg[x].src = settings.imgpath(x);
		        }
		    }

            return this.each(function() {
                var obj = $(this);

				// Merge options with defaults
				var settings = $.extend({
				    offset: obj.offset(),
				    vidWidth: obj.width(),
				    hoverbool: false,
				    preload:false
				}, options || {});

		        if (settings.preload === true) {
		            preload_img(settings);
		        }

		        obj.hover(
					function (e) {
						settings.hoverbool = true;
					},
					function (e) {
						settings.hoverbool = false;
					}
		        );

		        $(document).mousemove(function (e) {
		            var pos_in_div = e.pageX - settings.offset.left;

		            if (pos_in_div > 0 && settings.hoverbool === true) {
		                var vid_value = ((pos_in_div / settings.vidWidth) * settings.imgnum).toFixed(0);
		                vid_value = pad(vid_value, settings.numberlenght);	
	                	console.log(settings.imgpath(vid_value));
		                obj.find('img').attr('src', settings.imgpath(vid_value))
		            }
		        });
            });
        }
    });
     
})(jQuery);