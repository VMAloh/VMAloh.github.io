$(document).ready(function(){
    var audio = document.getElementById("audioIntroduction");
    audio.play();

    var gamesWon = localStorage.getItem("countAnimalsGame");

    $("#firstAnswear").on("input", function() {
        this.value = this.value.replace(/[^0-9]/g,'');
        var answear = this.value;
        if (answear) {
            if (answear == 6) {
                gamesWon = 1;
                localStorage.setItem("countAnimalsGame", gamesWon)
                $("#firstQuestion").removeClass("wrongAnswear").addClass("correctAnswear");
                $(".wrongImage").hide();
                $(".correctImage").show();
            }
            else {
                $("#firstAnswear .question").removeClass("correctAnswear").addClass("wrongAnswear");
                $(".correctImage").hide();
                $(".wrongImage").show();
                setTimeout(function(answearInput) {
                    answearInput.value = "";
                    $(".wrongImage").hide();
                }, 1000, this)
            }

            setTimeout(function(answearInput) {
                var url = window.location.href
                var value = url.substring(url.lastIndexOf('/') + 1);
                url = url.replace(value, 'part2.html')
                window.location.replace(url)

            }, 2000, this)
        }
    });
});

