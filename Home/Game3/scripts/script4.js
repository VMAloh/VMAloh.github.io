$(document).ready(function() {
    $("#fourthAnswear").on("input", function() {
        this.value = this.value.replace(/[^0-9]/g,'');
        var answear = this.value;
        var gamesWon = localStorage.getItem("countAnimalsGame");

        if (answear) {
            if (answear == 5) {
                gamesWon ++;
                localStorage.setItem("countAnimalsGame", gamesWon)
                $(".question").removeClass("wrongAnswear").addClass("correctAnswear");
                $(".wrongImage").hide();
                $(".correctImage").show();
                alert("Bravo, ai reusit")
            }
            else {
                $(".question").removeClass("correctAnswear").addClass("wrongAnswear");
                $(".correctImage").hide();
                $(".wrongImage").show();
                alert("Off, nu te descuraja")
                setTimeout(function(answearInput) {
                    answearInput.value = "";
                    $(".wrongImage").hide();
                }, 1000, this)
            }
            setTimeout(function() {
                console.log(gamesWon)
                if (gamesWon >= 3)
                    localStorage.setItem("joc3", 1)
                else
                    localStorage.setItem("joc3", 0)
                localStorage.setItem("countAnimalsGame", 0)
            }, 2000 )
        }
    });
});
