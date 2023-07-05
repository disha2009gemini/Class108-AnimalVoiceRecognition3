function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/FVbehdeRL/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255);
        random_number_g = Math.floor(Math.random() * 255);
        random_number_b = Math.floor(Math.random() * 255);
        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + random_number_g + random_number_b +")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + random_number_g + random_number_b +")";

        img = document.getElementById("dog");
        img1 = document.getElementById("cat");
        img2 = document.getElementById("cow");
        img3 = document.getElementById("tiger");

        if(results[0].label == "dog"){
            img.src = 'dog.gif';
            img1.src = 'cat.jpg';
            img2.src = 'cow.jpg';
            img3.src = 'tiger.jpg';

        }

        if(results[0].label == "cat"){
            img.src = 'dog.jpg';
            img1.src = 'cat.gif';
            img2.src = 'cow.jpg';
            img3.src = 'tiger.jpg';
        }

        if(results[0].label == "cow"){
            img.src = 'dog.jpg'
            img1.src = 'cat.jpg';
            img2.src = 'cow.gif';
            img3.src = 'tiger.jpg';
        }

        else{
            img.src = 'dog.jpg'
            img1.src = 'cat.jpg';
            img2.src = 'cow.gif';
            img3.src = 'tiger.gif';
        }
    }
    
}