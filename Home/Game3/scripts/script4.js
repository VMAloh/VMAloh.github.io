$(document).ready(function () {
    var audio = document.getElementById("audioMonkeys");
    audio.play();

    $("#fourthAnswer").on("input", function () {
        this.value = this.value.replace(/[^0-9]/g, '');
        var answer = this.value;
        var gamesWon = localStorage.getItem("countAnimalsGame");

        $("audio")
            .on("playing", function () {
                $("img").prop("disabled", true);
            }).on('ended', function () {
            $("img").prop("disabled", true);
        });

        if (answer) {
            if (answer == 5) {
                gamesWon++;
                localStorage.setItem("countAnimalsGame", gamesWon)
                $(".question").removeClass("wrongAnswer").addClass("correctAnswer");
                $(".wrongImage").hide();
                $(".correctImage").show();
                document.getElementById("audioSuccess").play();
                $("#audioSuccess").on('ended', function () {
                    $(".finalModal").addClass("success");
                    document.getElementById("audioSuccessFinal").play();
                });
            } else {
                $(".question").removeClass("correctAnswer").addClass("wrongAnswer");
                $(".correctImage").hide();
                $(".wrongImage").show();
                document.getElementById("audioFail").play();
                $("#audioFail").on('ended', function () {
                    $(".finalModal").addClass("fail");
                    document.getElementById("audioFailFinal").play();
                });
            }
            if (gamesWon >= 3)
                localStorage.setItem("joc3", 1)
            else
                localStorage.setItem("joc3", 0)
            localStorage.setItem("countAnimalsGame", 0);
            $(".finalAudio").on('ended', function () {
                $(".finalModal").show();
                $("img").prop("disabled", false);
                $(".home")
                    .css("cursor", "pointer")
                    .on('click', function () {
                        var url = window.location.href
                        var value = url.substring(url.lastIndexOf('/') - 5);
                        url = url.replace(value, 'home.html')
                        window.location.replace(url)
                    });
            });
        }
    });

    $(".feedbackAudio").on('ended', function () {
        $('.finalModal').show();
    })
});
