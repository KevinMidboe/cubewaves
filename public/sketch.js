let angle = 0;
let w = 24;
let ma;

function setup() {
   createCanvas(400, 400, WEBGL);
   ma = atan(1 / sqrt(2))
}

function draw() {
   background(100);
   ortho(-300, 300, 300, -300, 0, 600);


   rotateX(-QUARTER_PI);
   rotateY(ma);

   let offset = 0;
   for (let z = 0; z < height; z += w) {
      for (let x = 0; x < width; x += w) {
         push();
         let a = angle + offset;
         let h = map(sin(a), -1, 1, 0, 100);
         translate(x - width / 2, 0, z - height / 2);
         normalMaterial();
         box(w - 2, h, w - 2);
         //rect(x - width / 2 + w / 2, 0, w - 2, h);
         pop();
      }
      offset += 0.1;
   }

   angle += 0.1;
}
