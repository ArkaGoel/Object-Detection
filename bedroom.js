let state = "";
objects = [];
function preload(){
    img = loadImage('https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML ="Status - Detecting Objects...";
}
function modelLoaded(){
    console.log("CoCoSSD Initialized!");
    state =  true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    } else{
        console.log(results);
        objects = results;
    }
}

function draw(){
    image(img, 0, 0, 640, 420);
    if(state != ""){
       for(i = 0; i < objects.length; i++){
        document.getElementById("status").innerHTML ="Objects Detected.";
        fill('#fc030b');
         result = floor(objects[i].confidence * 100);
         text(objects[i].label + " " + result + "%", objects[i].x + 15, objects[i].y + 15);
         noFill();
         stroke('#fc030b');
         rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
         document.getElementById("check").innerHTML = "There are 3 objects but the model detected only 1 object.";
       }
    }
}
