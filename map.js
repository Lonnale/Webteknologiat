


window.onload = function(){
document.getElementById('kartta').src = "https://www.google.com/maps?q=Yliopistonkatu 36 Lappeenranta&output=embed"
}

function showMap(){
    alert("moi");
    var address = document.getElementById('Katuosoite').value;
    var city = document.getElementById('Kaupunki').value;
    document.getElementById('kartta').src = 'https://www.google.com/maps?q=' + address + city + '&output=embed'
}