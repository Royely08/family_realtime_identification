
function setup(){
    canvas = createCanvas(200,200);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/760m9BnhH/model.json",modelLoaded);
}

function draw(){
    image(video,0,0,200,200);
    classifier.classify(video,gotResult)
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function gotResult(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results);
        document.getElementById("result_person_name").innerHTML = results[0].label;
        document.getElementById("result_person_accuracy").innerHTML = results[0].confidence.tofixed(3);
    }
}