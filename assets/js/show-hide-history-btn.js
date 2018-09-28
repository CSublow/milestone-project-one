/* This script changes the text of the show/hide history button to match the history text's current hidden/visible state */
$(function() {
    $("#history-show-hide-btn").click(function () {
        $(this).text(function(i, text) {
            return text === "Read More..." ? "Close" : "Read More...";
        })
    });
})