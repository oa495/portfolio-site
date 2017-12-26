function init() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  draw(ctx);
}

function draw(ctx) {
  // layer1/Rectangle
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(1307.2, 909.0);
  ctx.lineTo(37.3, 909.0);
  ctx.lineTo(37.3, 273.7);
  ctx.lineTo(1307.2, 273.7);
  ctx.lineTo(1307.2, 909.0);
  ctx.closePath();
  ctx.fill();

  // layer1/Path
  ctx.beginPath();
  ctx.moveTo(378.3, 523.7);
  ctx.lineTo(487.3, 742.7);
  ctx.lineTo(520.3, 614.7);
  ctx.lineTo(374.3, 520.7);
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // layer1/Path
  ctx.beginPath();
  ctx.moveTo(549.5, 733.2);
  ctx.lineTo(519.7, 614.8);
  ctx.lineTo(662.0, 524.0);
  ctx.lineTo(549.5, 733.2);
  ctx.closePath();
  ctx.fill();

  // layer1/Path
  ctx.beginPath();
  ctx.moveTo(512.6, 805.9);
  ctx.lineTo(570.8, 692.2);
  ctx.lineTo(660.6, 768.2);
  ctx.lineTo(544.3, 909.7);
  ctx.lineTo(512.1, 908.7);
  ctx.lineTo(512.6, 805.9);
  ctx.closePath();
  ctx.fill();

  // layer1/Path
  ctx.beginPath();
  ctx.moveTo(167.3, 755.7);
  ctx.lineTo(329.7, 567.0);
  ctx.lineTo(457.0, 796.0);
  ctx.lineTo(457.3, 908.3);
  ctx.lineTo(349.7, 909.0);
  ctx.lineTo(167.3, 755.7);
  ctx.closePath();
  ctx.fill();

  // layer1/Path
  ctx.beginPath();
  ctx.moveTo(1305.3, 789.2);
  ctx.lineTo(1305.3, 752.0);
  ctx.lineTo(1242.0, 753.5);
  ctx.lineTo(1305.3, 789.2);
  ctx.closePath();
  ctx.fill();

  // layer1/Path
  ctx.beginPath();
  ctx.moveTo(0.0, 0.0);
  ctx.lineTo(346.7, 1.3);
  ctx.lineTo(342.8, 247.2);
  ctx.lineTo(98.6, 153.7);
  ctx.lineTo(22.3, 62.7);
  ctx.lineTo(2.0, 77.7);
  ctx.lineTo(2.0, 0.3);
  ctx.fill();

  // layer1/Path
  ctx.beginPath();
  ctx.moveTo(773.7, 518.3);
  ctx.lineTo(691.4, 585.3);
  ctx.lineTo(663.5, 608.0);
  ctx.lineTo(663.7, 523.3);
  ctx.fill();

  // layer1/Path
  ctx.beginPath();
  ctx.moveTo(689.0, 586.2);
  ctx.lineTo(769.3, 674.5);
  ctx.lineTo(772.8, 518.8);
  ctx.fill();

  // layer1/Path
  ctx.beginPath();
  ctx.moveTo(1016.3, 755.3);
  ctx.lineTo(1015.3, 506.3);
  ctx.lineTo(772.3, 518.0);
  ctx.lineTo(769.3, 674.3);
  ctx.fill();

  // layer1/Path
  ctx.beginPath();
  ctx.moveTo(1247.3, 754.7);
  ctx.lineTo(1140.0, 664.7);
  ctx.lineTo(1015.7, 637.0);
  ctx.lineTo(1016.3, 756.7);
  ctx.fill();

  // layer1/Path
  ctx.beginPath();
  ctx.moveTo(135.1, 429.8);
  ctx.lineTo(382.8, 273.7);
  ctx.lineTo(379.0, 525.7);
  ctx.lineTo(135.1, 429.8);
  ctx.closePath();
  ctx.fill();

  // layer1/Path
  ctx.beginPath();
  ctx.moveTo(135.1, 429.8);
  ctx.lineTo(58.6, 335.3);
  ctx.lineTo(160.1, 272.8);
  ctx.lineTo(382.9, 274.5);
  ctx.lineTo(135.1, 429.8);
  ctx.closePath();
  ctx.fill();

  // layer1/Path
  ctx.beginPath();
  ctx.moveTo(37.5, 350.2);
  ctx.lineTo(35.8, 269.2);
  ctx.lineTo(159.3, 272.7);
  ctx.lineTo(37.5, 350.2);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}
