var canvas;
var last_known_scroll_position = 0;
var ticking = false;

function addEventListeners() {

	function rotateShapes() {
	  var objs = canvas.getObjects();
	  objs.map(function(o) {
	  	var curAngle = o.get('angle');
	  	var newAngle = curAngle + (Math.floor(Math.random() * 60) - 30);
			o.animate('angle', newAngle, {
				onChange: () => {},
				duration: 500,
      	easing: fabric.util.ease.easeOut
			});
		});
		objs[0].animate('nothing', 1000, {
	    duration: 500,
	    onChange: canvas.renderAll.bind(canvas)
	  });
	}

	window.addEventListener('scroll', function(e) {
	  if (!ticking) {
	    window.requestAnimationFrame(function() {
	      rotateShapes();
	      ticking = false;
	    });

	    ticking = true;
		}
  });
}

function init() {
	addEventListeners();
	canvas = new fabric.Canvas('canvas', {
		hoverCursor: 'pointer'
	});

	fabric.Object.prototype.objectCaching = true;

	fabric.loadSVGFromURL("../images/graphic.svg", function(objects, options) {
		var obj = fabric.util.groupSVGElements(objects, options);
		canvas.add.apply(canvas, objects);
		canvas.renderAll();
	});
}

window.onload = function() {
  init();
};
