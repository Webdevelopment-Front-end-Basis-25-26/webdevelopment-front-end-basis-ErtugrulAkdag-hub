//Oefening 1
document.getElementById("oefening1").onclick = function () {
    let getal1 = VraagGetal("Geef het eerste getal in:");
    document.getElementById("getal1").innerText = getal;

    let getal2 = VraagGetal("Geef het tweede getal in:");
    document.getElementById("getal2").innerText = getal;

    let resultaat = VergelijkGetallen(getal1, getal2);
    document.getElementById("resultaat1").innerText = resultaat;
}

function VraagGetal(boodschap) {
    let getal;
    do 
    {
        getal = prompt(boodschap);
        getal = Number(getal);

    } 
    while (getal === null || getal === "" || isNaN(getal));
    return getal;
}

function VergelijkGetallen(getal1, getal2) {
    if (getal1 == getal2) {
        return ("Het eerste getal is gelijk aan het tweede getal.");
    }
    else if (getal1 > getal2) 
        {
        return ("Het eerste getal is groter dan het tweede getal.");
    }
    else 
        {
        return ("Het eerste getal is kleiner dan het tweede getal.");
    }
}

//Oefening 2 

document.getElementById("oefening2").onclick = function () {
    let getal = vraagGetalInBereik("Geef een geheel getal in tussen 1 en 20:", 1, 20);
    document.getElementById("getal").innerText = getal;
    document.getElementById("resultaat2").innerText = genereerTafels(getal);
}



function vraagGetalInBereik(boodschap, min, max) {
    let getal;
    do 
    {
        getal = VraagGetal(boodschap);
    } 
    while (getal < min || getal > max);
    return getal;
}

function genereerTafels(tefal) {
    let getal = "";
    for 
    (let i = 1; i <= 20; i++) {
        getal += (i + " x " + tefal + " = " + (tefal * i) + "\n");
    }
    
    return getal;
}

//Oefening 3 

document.getElementById("oefening3").onclick = function () {
    demonstreerVarVsLet();
}

function demonstreerVarVsLet() {
    let resultaatDiv = document.getElementById("resultaat3");
    resultaatDiv.innerHTML = "<h3>Verschil tussen var en let:</h3>";


    
    resultaatDiv.innerHTML += "<strong>1. Block Scope:</strong><br>";
    if (true) {
        var varGetal = 10;
        let letGetal = 20;
    }
    resultaatDiv.innerHTML += "var buiten block: " + varGetal + "<br>";
    
    resultaatDiv.innerHTML += "let buiten block: niet toegankelijk (ReferenceError)<br><br>";


    
    resultaatDiv.innerHTML += "<strong>2. Loop Scope Probleem:</strong><br>";
    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log("var i:", i); 
            resultaatDiv.innerHTML += "var i in timeout: " + i + "<br>"; 
        }, 100);
    }
    resultaatDiv.innerHTML += "var i na loop: " + i + "<br>";


    for (let j = 0; j < 3; j++) {
        setTimeout(function () {
            console.log("let j:", j); 
            resultaatDiv.innerHTML += "var j in timeout: " + j ;
        }, 100);
    }
    resultaatDiv.innerHTML += "let j na loop: niet toegankelijk (ReferenceError)<br><br>";

}

document.getElementById("oefening4").onclick = function () {
    let getal = vraagGetalInBereik("Geef een geheel getal in tussen 1 en 100:", 1, 100);
    let resultaat = "";
    for (let i = 1; i <= getal; i++) {
        resultaat += i + ":" + getFizzBuzzWaarde(i) + "\n";
    }
    document.getElementById("resultaat4").innerText = resultaat;

}

function getFizzBuzzWaarde(getal) {
    if (getal % 3 === 0 && getal % 5 === 0) {
        return "FizzBuzz";
    }
    else if (getal % 5 === 0) 
        {
        return "Buzz";
    }
    else if (getal % 3 === 0) 
        {
        return "Fizz";
    }
    else 
        {
        return getal;
    }
}

//Oef 5//

function isPriem(getal) {
    if (getal < 2) {
        return false;
    }
    else if (getal == 2) {
        return true;
    }
    else if (getal % 2 == 0) {
        return false;
    }
    
    else {
        for (let i = 3; i < getal; i += 2) {
            if (getal % i == 0) {
                return false;
            }
            else {
                return true;
            }
        }
    }}





function toonPriemgetallen(min, max) {
    let resultaat = "";
    let eersteGetal = true;
    for (i = min; i <= max; i++) {
        if (isPriem(i) && eersteGetal) {
            resultaat += i;
            eersteGetal = false;
        }
        else if (isPriem(i)) {
            resultaat += ", " + i;
        }
    }
    return resultaat;
}



document.getElementById("oefening5").onclick = function () {
    
    let resBox = document.getElementById("resultaat5")
    
    
    let getal = vraagGetalInBereik("Geef een geheel getal in tussen 1 en 100:", 1, 100);
        resBox.innerHTML = "<strong>" + "Getal: " + getal + "</strong><br>";
            
        
        if (isPriem(getal)) 
        {
        resBox.innerHTML += getal + " is een" + "<span style='color: green;'> priemgetal</span>!"
    }
    else 
        {
        resBox.innerHTML += getal + " is " + "<span style='color: red;'>geen priemgetal</span>!"
    }

    resBox.innerHTML += "<br><br>Priemgetallen van 2 tot " + getal + ":<br>" + toonPriemgetallen(2, getal);
}