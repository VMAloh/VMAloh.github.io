$(document).ready(function () {
    $("audio")
        .on("playing", function () {
            $("img").prop("disabled", true);
            $("input").prop("disabled", true);
        }).on('ended', function () {
            $("img").prop("disabled", false);
            $("input").prop("disabled", false);
    });

});

