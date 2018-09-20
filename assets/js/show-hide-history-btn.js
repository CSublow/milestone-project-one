$(function() {
    $("#history-show-hide-btn").click(function () {
        $(this).text(function(i, text) {
            return text === "Click to Read" ? "Hide" : "Click to Read";
        })
    });
})