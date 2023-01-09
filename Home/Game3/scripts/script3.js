$(document).ready(function() {
    $("#thirdAnswear").on("input", function() {
        this.value = this.value.replace(/[^0-9]/g,'');
        var answear = this.value;
        var gamesWon = localStorage.getItem("countAnimalsGame");

        if (answear) {
            if (answear == 4) {
                gamesWon ++;
                localStorage.setItem("countAnimalsGame", gamesWon)
                $(".question").removeClass("wrongAnswear").addClass("correctAnswear");
                $(".wrongImage").hide();
                $(".correctImage").show();
            }
            else {
                $(".question").removeClass("correctAnswear").addClass("wrongAnswear");
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
                url = url.replace(value, 'part4.html')
                window.location.replace(url)
            }, 2000, this)
        }
    });
});
