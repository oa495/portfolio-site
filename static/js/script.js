function addEventListeners() {
	var projectList = document.getElementsByClassName('projects')[0];
  function toggleDisplay(e) {
    var canvas = document.getElementsByClassName('canvas-container')[0];
		var projectLink = e.target;
		if (projectLink && projectLink.nodeName == 'A') {
      var img = projectLink.parentElement.querySelector('.portfolio-img');
      if (img) {
        if (e.type == 'mouseover') {
          var container = document.getElementsByClassName('right-container')[0];
          var containerW = container.offsetWidth;
          var containerH = container.offsetHeight;
          var size = Math.floor(Math.random() * (50 - 30 + 1)) + 30;
          var posX = (Math.random() * (50 - size));
          var maxH = ((containerH - img.offsetHeight) / (containerH + img.offsetHeight)) * 100;
          var posY = (Math.random() * maxH);
          img.setAttribute('width', size + '%');
          img.style.marginLeft = posX + '%';
          img.style.marginTop = posY + '%';
        }
        img.classList.toggle('display');
        canvas.classList.toggle('hide');
      }
		}
	}
	projectList.addEventListener('mouseover', toggleDisplay);
	projectList.addEventListener('mouseout', toggleDisplay);
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