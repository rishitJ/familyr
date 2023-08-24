Webcam.set({
    width:400,
    height:350,
    image_format:"png",
    png_quality:100
})

camera = document.getElementById("camera")
Webcam.attach(camera)

function capture_img()
{
    Webcam.snap(function(image_url)
    {
        console.log(image_url)
        document.getElementById("result").innerHTML = "<img id='captured_img' src='"+image_url+"'>"
    });
}

console.log("ml5 version", ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/B0uacDPLy/model.jason",model_loaded)