let numbersUrl = "http://numbersapi.com/random/trivia";

$(function () {
    $("#gif").hide();
});

$("#btn").click(function () {

    $("#gif").show();

    $.ajax({
        type: "GET",
        url: numbersUrl,
        dataType: "text",
        success: function (response) {
            // console.log(response);
            $("#gif").hide();
            $("#numberInfo").append("<br><br><i>" + response + "</i>");
        },
        error: function (jqxhr, textStatus, error) {
            console.log("Error: " + textStatus);
            $("#numberInfo").append("<br>" + "<i>" + "<br>" + "</i>");

        }
    });

});