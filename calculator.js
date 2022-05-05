let counter = 0;


window.onload = function () {
    document.getElementById("firstTextInput").value = 0;
    document.getElementById("secondTextInput").value = 0;
    document.getElementById("result").value = 0;
    document.getElementById("counterCol").innerHTML = "Laskukertoja" + counter + "kpl";
}

function showResult() {
    counter = counter + 1;
    document.getElementById("counterCol").innerHTML = "Laskukertoja " + counter + " kpl";


    let operators = document.getElementById("operationSelect");
    let selectedText = operators.options[operators.selectedIndex].text; // +
    let selectedValue = operators.options[operators.selectedIndex].value // 1

    console.log("selectedText: " + selectedText);
    console.log("selectedValue: " + selectedValue);


    /* var v1 = parseInt($('firstTextInput').val());
     var v2 = parseInt($('secondTextInput').val());
     var result;
 
     if ($('#operationSelect').val() == "1") {
         result = v1 + v2;
     }
     else if ($('#operationSelect').val() == '2') {
         result = v1 - v2;
     }
     if ($('#operationSelect').val() == "3") {
         result = v1 * v2;
     }
 
     else if ($('#operationSelect').val() == '4') {
         result = v1 / v2;
     }
 
 
     $('#result').html(result);
    }
     */

    var boksi1 = document.getElementById('firstTextInput').value;
    alert(boksi1);
    var boksi2 = document.getElementById('secondTextInput').value;
    alert(boksi2);
    alert(selectedValue);

  //  document.getElementById("result").value = operate(boksi1, boksi2, operators);

   /* function operate(boksi1, boksi2, operators) {

        if (operators == '1') {
            return boksi1 + boksi2
        }
        else if (operators == '2') {
            return boksi1 - boksi2;
        }
        else if (operators == '3') {
            return boksi1 * boksi2;
        }
        else if (operators == '4') {
            return boksi1 / boksi2;
        } 
        // console.log(showResult);

    }*/

}

function setFirstNr(type) {
    let currentValue = document.getElementById("firstTextInput").value;
    if (type == 'plus') {
        //alert('-');
        currentValue = parseInt(currentValue) + 1;
    } else {
        // alert('-');
        currentValue = parseInt(currentValue) - 1;
    }
    document.getElementById("firstTextInput").value = currentValue;
}


function setSecondNr(type) {
    let currentValue = document.getElementById("secondTextInput").value;
    if (type == 'plus') {
        //alert('-');
        currentValue = parseInt(currentValue) + 1;
    } else {
        // alert('-');
        currentValue = parseInt(currentValue) - 1;
    }
    document.getElementById("secondTextInput").value = currentValue;
}

function getRandomInt() {
    return Math.floor(Math.random() * 11);
}


// console.log(Math.random());