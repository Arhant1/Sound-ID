function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/h0sGZa9Bm/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.error(error)
    } else
    {
        console.log(results)
        random_number_r = Math.floor(Math.random()* 255) + 1;
        random_number_g = Math.floor(Math.random()* 255) + 1;
        random_number_b = Math.floor(Math.random()* 255) + 1;


        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('wael-tsar-clapping.gif');
        img1 = document.getElementById('snap-bob-marley.gif');

        if(results[0].label == "Clap")
        {
            img = 'wael-tsar-clapping.gif';

        } 
        else (results[0].label == "Snap")
        {
            img = 'snap-bob-marley.gif';

        } 
    }
}