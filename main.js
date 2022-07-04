Webcam.set({
    width:350,
    heigth:300,
    image_format:"png",
    image_quality:100
    });
    
    Webcam.attach("#camera");
    
    function take_snapshot(){
        Webcam.snap(function (data_uri){
            console.log(data_uri)
    
           document.getElementById("result").innerHTML = '<img id="take_snap" src="'+data_uri+'">';
        });
    }

    console.log('ml5 version:', ml5.version);
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qfwhPdH5r/model.json', modelLoaded);


    function modelLoaded(){
        console.log('Model Loaded!');
    }