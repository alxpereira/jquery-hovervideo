#jQuery Hovervideo plugin

Want to display picture on a mousehover event like on the [Dior Website](http://www.dior.com/) or some cool stuff you've seen around the ?
Use this plugin, makes the work for you.

## Install
Add the last jQuery js to your page and the jquery.hovervideo.js plugin
```html
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="jquery.hovervideo.js"></script>
```
That's it for the install, let's use it

## Use
* First have a library of images to display like the example below
```txt
	/img/justinbieber_1.jpg
	/img/justinbieber_2.jpg
	/img/justinbieber_3.jpg
	/img/justinbieber_4.jpg
	/img/justinbieber_5.jpg
```

* Write your HTML structure
```html
	<div id="vador"> <!-- or the whatever you want in the id -->
		<img src="YOUR DEFAULT IMAGE" /> <!-- here is the default image displayed at the begining in your video box -->
	</div>
```

* Use the plugin
```javascript
	$(document).ready(function(){

		$('#vador').hovervideo({
			imgpath: function(id){
				return '/img/justinbieber_'+ id +'.jpg';
			},
		    imgnum: 5,
		    numberlenght:1,
		    preload:true
		});

	});
```
In details, let's see the options : 
`imgpath` [string] will return the path of your images. Remove the number and push the `id` variable at this place as shown in the example
`imgnum` [int] represents the length of your video or simply the number of images you have
`numberlenght` [int] set the length of the num variable. for example if your images are ***_1.jpg ==> `numberlenght:1`, ***_001.jpg ==> `numberlenght:3`, etc...
`preload` [boolean] default to `false`. If you set it `true`, the engine will preload in your browser cache the images at the launch of the plugin (usefull if you have a lot of images in your video).

March 2013 under license WTFPL – Do What the Fuck You Want to Public License http://www.wtfpl.net/