let articles_array = [{"title": "Pilli", "src":"Kuvat/Pilli.jpg"}, {"title": "Pulla", "src":"Kuvat/Pulla.jpg"}, {"title": "Pekka", "src":"Kuvat/Pekka.jpg"}, {"title": "Monni", "src":"Kuvat/monni.jpg"}, {"title": "Maija", "src":"Kuvat/Maija.jpg"}, {"title": "Rauha", "src":"Kuvat/Rauha.jpg"}];
let index;
let intervalId;
let isStarted;
let localStorageKey = "imageID";

$(function () {
    init();
});

$("#nextBtn").click(getNextArticle);
$("#previousBtn").click(getPreviousArticle);
$("#pauseBtn").click(pauseArticles);


function init() {
    // articles_array = JSON.parse(articles_json);

    //index = 0;
    if (localStorage.hasOwnProperty(localStorageKey)) {

        index = localStorage.getItem(localStorageKey);
    } else {
        index = 0;
    }
    console.log("index: " + index);


    intervalId = window.setInterval(getNextArticle, 2000);
    isStarted = true;
}

function getNextArticle() {
    index++;

    if (index > 5) {
        index = 0;
    }


    $("#titleDiv").html(articles_array[index].title);
    $("#articleDiv").html(articles_array[index].text);
    $("#catImage").attr("src", articles_array[index].src);
   // $("#catImage").attr("src", articles_array[index].name);
   // $("#catImage2").attr("src", articles_array[index].src);
    // document.getElementById("titleDiv").innerHTML = articles_array[index].title;

    //update localStorage
    localStorage.setItem(localStorageKey, index);

}

function getPreviousArticle() {
    index--;

   // console.log("INDEX = " + index);
    if (index < 0) {
        index = 5;
    }

    $("#titleDiv").html(articles_array[index].title);
    $("#articleDiv").html(articles_array[index].text);

    //update localStorage
    localStorage.setItem(localStorageKey, index);


}

function pauseArticles() {
    if (isStarted) { //ajastin menee päälle
        window.clearInterval(intervalId);
        isStarted = false;
        $("#pauseBtn").html('<i class="bi bi-caret-right"></i>');
    }
    else {
        intervalId = window.setInterval(getNextArticle, 2000);
        isStarted = true;
        $("#pauseBtn").html('<i class="bi bi-pause"></i>');
    }
    //update localStorage
    localStorage.setItem(localStorageKey, index);

    // EI MEE PAUSSILLE JA VAIHDA ICONIA
}