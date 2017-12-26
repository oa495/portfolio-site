function addEventListeners() {
	var projects = document.getElementsByClassName('projects')[0];

	function toggleDisplay(e) {
		var projectLink = e.target;
		if (projectLink && projectLink.nodeName == 'A') {
			var img = projectLink.parentElement.querySelector('.portfolio-img');
			console.log(img);
			if (img) {
				img.classList.toggle('dn');
			}
		}
	}
	projects.addEventListener('mouseover', toggleDisplay);
	projects.addEventListener('mouseout', toggleDisplay);
}

function draw(ctx) {
  // layer1/Group
  ctx.save();

  // layer1/Group/Rectangle
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(645.6, 404.2);
  ctx.lineTo(0.0, 404.2);
  ctx.lineTo(0.0, 3.7);
  ctx.lineTo(645.6, 3.7);
  ctx.lineTo(645.6, 404.2);
  ctx.closePath();
  ctx.fillStyle = "rgb(1, 1, 1)";
  ctx.fill();

  // layer1/Group/Path
  ctx.beginPath();
  ctx.moveTo(260.3, 166.6);
  ctx.lineTo(328.9, 304.5);
  ctx.lineTo(349.7, 223.9);
  ctx.lineTo(257.8, 164.7);
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // layer1/Group/Path
  ctx.beginPath();
  ctx.moveTo(368.1, 300.4);
  ctx.lineTo(349.3, 224.0);
  ctx.lineTo(438.9, 166.8);
  ctx.lineTo(368.1, 300.4);
  ctx.closePath();
  ctx.fill();

  // layer1/Group/Path
  ctx.beginPath();
  ctx.moveTo(344.8, 344.4);
  ctx.lineTo(381.5, 272.7);
  ctx.lineTo(438.0, 320.6);
  ctx.lineTo(364.8, 409.7);
  ctx.lineTo(344.5, 409.1);
  ctx.lineTo(344.8, 344.4);
  ctx.closePath();
  ctx.fill();

  // layer1/Group/Path
  ctx.beginPath();
  ctx.moveTo(127.4, 312.7);
  ctx.lineTo(229.6, 193.9);
  ctx.lineTo(309.8, 338.1);
  ctx.lineTo(310.0, 408.9);
  ctx.lineTo(242.2, 409.3);
  ctx.lineTo(127.4, 312.7);
  ctx.closePath();
  ctx.fill();

  // layer1/Group/Path
  ctx.beginPath();
  ctx.moveTo(516.0, 163.5);
  ctx.lineTo(441.7, 225.0);
  ctx.lineTo(438.8, 167.0);
  ctx.fill();

  // layer1/Group/Path
  ctx.beginPath();
  ctx.moveTo(462.8, 206.5);
  ctx.lineTo(514.3, 262.0);
  ctx.lineTo(516.0, 163.5);
  ctx.fill();

  // layer1/Group/Path
  ctx.beginPath();
  ctx.moveTo(650.3, 313.0);
  ctx.lineTo(649.8, 156.2);
  ctx.lineTo(515.9, 163.5);
  ctx.lineTo(514.3, 262.0);
  ctx.fill();

  // layer1/Group/Path
  ctx.beginPath();
  ctx.moveTo(104.2, 104.6);
  ctx.lineTo(263.1, 3.7);
  ctx.lineTo(260.6, 166.5);
  ctx.lineTo(104.2, 104.6);
  ctx.closePath();
  ctx.fill();

  // layer1/Group/Path
  ctx.beginPath();
  ctx.moveTo(104.2, 104.6);
  ctx.lineTo(58.3, 44.3);
  ctx.lineTo(117.5, 2.3);
  ctx.lineTo(263.1, 3.7);
  ctx.lineTo(104.2, 104.6);
  ctx.closePath();
  ctx.fill();

  // layer1/Group/Path
  ctx.beginPath();
  ctx.moveTo(48.0, 51.0);
  ctx.lineTo(46.9, 0.0);
  ctx.lineTo(124.7, 2.2);
  ctx.lineTo(48.0, 51.0);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
  ctx.restore();
}

function init() {
	addEventListeners();
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	draw(ctx);
}

window.onload = init;