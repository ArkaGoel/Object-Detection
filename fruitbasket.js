function preload(){
    img = loadImage('https://images.pexels.com/photos/235294/pexels-photo-235294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw(){
    image(img, 0, 0, 640, 420);
}