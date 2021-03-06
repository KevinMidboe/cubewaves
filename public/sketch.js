let angle = 0;
let w = 60;
let ma;
let maxD;
let w_w;

function setup() {
   w_w = min(window.innerWidth, 1200);

   createCanvas(w_w, w_w, WEBGL);
   ma = atan(1 / sqrt(2));
   maxD = dist(0, 0, 200, 200);

   draw_ui()
   frameRate(60);
}

function draw_ui() {
   slider = createSlider(18, 200, w);
   slider.position(window.innerWidth / 2 - slider.width * 0.5, 25);
}

function draw() {
   background("#1e1e1e");
   w = slider.value();

   let o_w = w_w + 100;
   ortho(-o_w, o_w, o_w, -o_w, 0, o_w + 500);

   if (o_w > 750) {
      translate(0, o_w * 0.35);
   }

   rotateX(-ma);
   rotateY(QUARTER_PI);

   rectMode(CENTER);

   let offset = 0;
   for (let z = 0; z < height; z += w) {
      for (let x = 0; x < width; x += w) {
         push();
         let d = dist(x, z, width / 2,height / 2);
         let offset = map(d, 0, maxD, -PI, PI);
         let a = angle + offset;
         let h = floor(map(sin(a), -1, 1, 120, 320));
         translate(x - width / 2, 0, z - height / 2);
         normalMaterial();
         box(w - 2, h, w - 2);
         pop();
      }
      offset += 0.1;
   }

   angle -= 0.08;
}

