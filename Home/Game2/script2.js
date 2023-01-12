$(document).ready(function () {
    let audioIntro = document.getElementById("audioIntroStory");

    $("audio")
        .on("playing", function () {
            var answers = document.getElementsByClassName('btn-answer');
            var numAnswers = answers.length;
            for (var i = 0; i < numAnswers; i++) {
                answers[i].removeEventListener('click', selectAnswer, false);
            }
            startButton.removeEventListener("click",startGame)
            nextButton.removeEventListener("click", nextQuestion)
            home1.removeEventListener("click",goToHome)
            home2.removeEventListener("click",goToHome)
        }).on('ended', function () {
        var answers = document.getElementsByClassName('btn-answer');
        var numAnswers = answers.length;
        for (var i = 0; i < numAnswers; i++) {
            answers[i].addEventListener('click', selectAnswer, false);
        }
            startButton.addEventListener("click",startGame)
            nextButton.addEventListener("click",nextQuestion)
            home1.addEventListener('click',goToHome)
            home2.addEventListener('click',goToHome)
    });
    audioIntro.play();
});
