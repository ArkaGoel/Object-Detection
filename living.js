let state = "";
objects = [];
function preload(){
    img = loadImage('https://images.pexels.com/photos/7534273/pexels-photo-7534273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
}
function setup(){
    canvas = createCanvas(800, 550);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML ="Status - Detecting Objects...";
}
function modelLoaded(){
    console.log("CoCoSSD Initialized!");
    state = true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    } else{
        console.log(results);
        objects = results;
    }
}
function draw(){
    image(img, 0, 0, 800, 550);
    if(state != ""){
        for(i = 0; i < objects.length; i++){
         document.getElementById("status").innerHTML ="Objects Detected.";
         fill('#fc030b');
          result = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + result + "%", objects[i].x + 15, objects[i].y + 15);
          noFill();
          stroke('#fc030b');
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
          document.getElementById("check").innerHTML = "There are 17 objects but the model detected only 2 objects.";
        }
     }
}
