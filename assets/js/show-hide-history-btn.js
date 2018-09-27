/* This script hides most of the history text on smaller screens, displaying the full history text only to users who want to read it */
$(function() {
    $("#history-show-hide-btn").click(function () {
        $(this).text(function(i, text) {
            return text === "Read More..." ? "Close" : "Read More...";
        })
    });
})