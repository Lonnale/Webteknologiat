
/*function init() {
    console.log("Tämä kirjoitetaan selaimen konsoliin");
    //window.alert("Tämä ilmoitus näytetään alertbox:issa");
    //alert("tämäkin näytetään alertbox:issa");
} */


var helloElement = document.getElementById('hello-div');

window.onload = function () {
    console.log("toimiikohan tää");
}

function sayHelloTo(name) {
    //alert("Hei " + name);
    console.log("sayHello-funktio suoritettu");
    document.getElementById('hello-div').innerHTML = 'Hei ' + name;
}

function hideText(){
    helloElement.innerHTML = '';
}