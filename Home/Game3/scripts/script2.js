$(document).ready(function() {
    var audio = document.getElementById("audioMice");
    audio.play();

    $("#secondAnswer").on("input", function() {
        this.value = this.value.replace(/[^0-9]/g,'');
        var answer = this.value;

        var gamesWon = localStorage.getItem("countAnimalsGame");

        if (answer) {
            if (answer == 3) {
                gamesWon ++;
                localStorage.setItem("countAnimalsGame", gamesWon)
                $(".question").removeClass("wrongAnswer").addClass("correctAnswer");
                $(".wrongImage").hide();
                $(".correctImage").show();
                document.getElementById("audioSuccess").play();
            }
            else {
                $(".question").removeClass("correctAnswer").addClass("wrongAnswer");
                $(".correctImage").hide();
                $(".wrongImage").show();
                document.getElementById("audioFail").play();
            }
            $(".feedbackAudio").on('ended', function () { setTimeout(function () {
                var url = window.location.href
                var value = url.substring(url.lastIndexOf('/') + 1);
                url = url.replace(value, 'part3.html')
                window.location.replace(url)
            }, 1000) });
        }
    });
});
