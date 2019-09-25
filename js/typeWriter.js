var i = 0;
var message = "Highly motivated, passionate computer science student studying in London. I enjoy exploring a wide range of technologies and incorporating newly learnt skills into small projects from an emotionally aware music player to a web app leveraging the power of the cloud with AWS. Through both academic teamwork and work experience I have developed my skills to become an effective communicator and supportive team player. In my own time I am currently exploring full stack development using React and Django and am focussed on furthering my knowledge of cloud applications via AWS Cloud Practitioner certification."
var speed = 50;

function typeWriter() {
    document.getElementById("find-out-more-btn").setAttribute("style", "display: none; text-align: center;")
    document.getElementById("skip-btn").setAttribute("style", "visibility: visible; text-align: center;")
    document.getElementById("outer-progress-bar").setAttribute("style", "visibility: visible")

    window.scrollTo({
        top:document.body.scrollHeight,
        behavior: 'smooth'
    });
    if (i < message.length){
        document.getElementById("about-description").innerHTML += message.charAt(i);
        i++;
        
        let progressBar = document.getElementById("inner-progress-bar");
        let width = (i / message.length) * 100;

        console.log(width)
        progressBar.style.width = width + "%";

        setTimeout(function() {typeWriter(); }, speed);
    }


}

function speedUp() {
    document.getElementById("about-description").innerHTML = message;
    document.getElementById("inner-progress-bar").setAttribute("style", "width: 100%");

    i = message.length
}