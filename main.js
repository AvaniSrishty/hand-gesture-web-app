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

    

    function check() {
        img = document.getElementById("take_snap");
        classifier.classify(img, gotResult)
    }
    
    function gotResult(error, result) {
        if (error) {
            console.log(error);
        }
    
        else {
            console.log(result);
            document.getElementById("result_emotion_name").innerHTML = result[0].label
            document.getElementById("result_emotion_name2").innerHTML = result[1].label
            prediction1 = result[0].label
            prediction2 = result[1].label
            speech();
    
    
            if (prediction1 == "Best") {
                document.getElementById("result_emoji").innerHTML = "&#128077"
            }
    
            if (prediction1 == "Amazing") {
                document.getElementById("result_emoji").innerHTML = "&#128076"
            }
    
            if (prediction1 == "Crossed finger") {
                document.getElementById("result_emoji").innerHTML = "&#129310"
            }

            if (prediction1 == "Namaste") {
                document.getElementById("result_emoji").innerHTML = "&#128591"
            }
    
            if (prediction2 == "Best") {
                document.getElementById("result_emoji2").innerHTML = "&#128077"
            }
    
            if (prediction2 == "Amazing") {
                document.getElementById("result_emoji2").innerHTML = "&#128076"
            }
    
            if (prediction2 == "Crossed finger") {
                document.getElementById("result_emoji2").innerHTML = "&#129310"
            }

            if (prediction2 == "Namaste") {
                document.getElementById("result_emoji2").innerHTML = "&#128591"
            }
    
        }
    
    
    }
    
    function speech(){
        var synth = window.speechSynthesis;
        speech_message = "The first prediction is" +prediction1+ " And the second prediction is" +prediction2;
        var utterThis = new SpeechSynthesisUtterance(speech_message);
        synth.speak(utterThis);
    }
    