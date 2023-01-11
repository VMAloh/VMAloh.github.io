$(document).ready(function(){
    var audio = document.getElementById("audioIntroduction");
    audio.play();

    $("#audioIntroduction").on('ended', function () {
        var audio2 = document.getElementById("audioTigers");
        audio2.play();
    });

    var gamesWon = localStorage.getItem("countAnimalsGame");

    $("#firstAnswer").on("input", function() {
        this.value = this.value.replace(/[^0-9]/g,'');
        var answer = this.value;
        if (answer) {
            if (answer == 6) {
                gamesWon = 1;
                localStorage.setItem("countAnimalsGame", gamesWon)
                $("#firstQuestion").removeClass("wrongAnswer").addClass("correctAnswer");
                $(".wrongImage").hide();
                $(".correctImage").show();
                document.getElementById("audioSuccess").play();
            }
            else {
                $("#firstAnswer .question").removeClass("correctAnswer").addClass("wrongAnswer");
                $(".correctImage").hide();
                $(".wrongImage").show();
                document.getElementById("audioFail").play();
            }
            $(".feedbackAudio").on('ended', function () { setTimeout(function () {
                var url = window.location.href
                var value = url.substring(url.lastIndexOf('/') + 1);
                url = url.replace(value, 'part2.html')
                window.location.replace(url)
            }, 1000) });
        }
    });
});

