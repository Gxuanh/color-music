let angle = 0;
let backgroundColor = '#0f0f0f';
let palette = ['#ff595e', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93'];
let boxCount = 5;

function setup() {
  createCanvas(600, 600, WEBGL);
  angleMode(RADIANS);
  rectMode(CENTER);
  ellipseMode(CENTER);
  noStroke();
}

function draw() {
  background(backgroundColor);

  rotateY(angle * 0.3);
  rotateX(angle * 0.2);

  // 畫多個旋轉方塊並加漸層
  for (let i = 0; i < boxCount; i++) {
    push();
    let r = 50 + i * 30;
    rotateY(angle * (0.5 + i * 0.1));
    rotateX(angle * (0.3 + i * 0.1));

    // 計算漸層顏色
    let c1 = color(palette[i % palette.length]);
    let c2 = color(palette[(i + 1) % palette.length]);
    let inter = map(sin(angle + i), -1, 1, 0, 1);
    fill(lerpColor(c1, c2, inter));

    box(r);
    pop();
  }

  angle += 0.01;
}



  