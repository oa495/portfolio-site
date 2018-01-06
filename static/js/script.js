function addEventListeners() {
	var projects = document.getElementsByClassName('projects')[0];
	function toggleDisplay(e) {
    var canvas = document.getElementsByClassName('canvas-container')[0];
		var projectLink = e.target;
		if (projectLink && projectLink.nodeName == 'A') {
			var img = projectLink.parentElement.querySelector('.portfolio-img');
			if (img) {
				img.classList.toggle('display');
        canvas.classList.toggle('dn');
			}
		}
	}
	projects.addEventListener('mouseover', toggleDisplay);
	projects.addEventListener('mouseout', toggleDisplay);
	projects.addEventListener('keyup', toggleDisplay);
}

function init() {
	addEventListeners();
  var canvas = new fabric.Canvas('canvas', {
    hoverCursor: 'pointer'
  });

  fabric.Object.prototype.objectCaching = true;

  fabric.loadSVGFromURL("../images/graphic.svg", function(objects, options) {
    var obj = fabric.util.groupSVGElements(objects, options);
    canvas.add.apply(canvas, objects);
    canvas.renderAll();
  });
}

window.onload = init;