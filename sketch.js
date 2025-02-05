// Classifier Variable
let classifier;
// Model URL
let imageModelURL = "https://teachablemachine.withgoogle.com/models/7rnPa-FTx/";


// A variable to hold the video we want to classify
let video;

// Variable for displaying the results on the canvas
let label = "Model loading...";

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');


    // Load images from the "images" folder
    arduinoUnoImg = loadImage("data/arduino_uno.jpg");
    bareConductiveImg = loadImage("data/bare_conductive.jpg");
    arduinoBleImg = loadImage("data/arduino_ble.jpg");
    esp32Img = loadImage("data/sparkfun.jpg");
   

}

function setup() {
  createCanvas(640, 480);
  background(255);

  // Using webcam feed as video input, hiding html element to avoid duplicate with canvas
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  classifier.classifyStart(video, gotResult);
}

function draw() {
  // Each video frame is painted on the canvas
  image(video, 0, 0);

  // Printing class with the highest probability on the canvas
    // Draw the label
    fill(255);
    textSize(16);
    textAlign(CENTER);
    text(label, width / 2, height - 4);
    print(label);
    if (label == 'Arduino Uno') {
      image(video, 0, 0);
      //filter(THRESHOLD);
          // Draw the label
      image(arduinoUnoImg, 500, 100, 100, 100);      
      fill(255);
      textSize(16);
      textAlign(CENTER);
      text(label, width / 2, height - 4);
      print(label);
      print('pasaste por etiqueta1');
  } else if(label == 'Bare Conductive'){
      image(video, 0, 0);
      image(bareConductiveImg, 500, 100, 100, 100);
      fill(255,0,0,100);
      rect(0,0,640,480);
      //filter(THRESHOLD);
          // Draw the label
      fill(255);
      textSize(16);
      textAlign(CENTER);
      text(label, width / 2, height - 4);
      print(label);
      print('pasaste por etiqueta2');
  }else if(label == 'Arduino Ble'){
      image(video, 0, 0);
      image(arduinoBleImg, 500, 100, 100, 100);
      fill(0,255,0,100);
      rect(0,0,640,480);
      //filter(INVERT);
          // Draw the label
      fill(255);
      textSize(16);
      textAlign(CENTER);
      text(label, width / 2, height - 4);
      print(label);
      print('pasaste por etiqueta3');

  }else if(label == 'Sparkfun'){
      image(video, 0, 0);
      image(sparkfun, 500, 100, 100, 100);
      fill(0,0,255,100);
      rect(0,0,640,480);
      //filter(INVERT);
          // Draw the label
      fill(255);
      textSize(16);
      textAlign(CENTER);
      text(label, width / 2, height - 4);
      print(label);
      print('pasaste por etiqueta4');  
      
  }else if(label == 'Andres'){
    image(video, 0, 0);
    fill(0,0,255,100);
    rect(0,0,640,480);
    //filter(INVERT);
        // Draw the label
    fill(255);
    textSize(16);
    textAlign(CENTER);
    text(label, width / 2, height - 4);
    print(label);
    print('pasaste por etiqueta4');  
    

}
  
}

// Callback function for when classification has finished
function gotResult(results) {
  // Update label variable which is displayed on the canvas
  label = results[0].label;
}