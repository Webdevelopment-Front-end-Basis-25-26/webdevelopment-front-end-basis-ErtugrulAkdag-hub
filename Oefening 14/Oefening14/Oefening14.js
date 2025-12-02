//Oefeniing 1
let scoreRood = 0;
let scoreBlauw = 0;
        document.getElementById("btnRoodPlus1").onclick = function () {
    scoreRood += 1;
    document.getElementById("scoreRood").innerText = scoreRood;
}
document.getElementById("btnRoodPlus3").onclick = function () {
  scoreRood += 3;
 document.getElementById("scoreRood").innerText = scoreRood;
}

document.getElementById("btnBlauwPlus1").onclick = function () {
scoreBlauw += 1;
    document.getElementById("scoreBlauw").innerText = scoreBlauw;
}
document.getElementById("btnBlauwPlus3").onclick = function () {
    scoreBlauw += 3;
    document.getElementById("scoreBlauw").innerText = scoreBlauw;
}

document.getElementById("btnResetScores").onclick = function () 
{
    scoreRood = 0;
    scoreBlauw = 0;
    document.getElementById("scoreRood").innerText = scoreRood;
    document.getElementById("scoreBlauw").innerText = scoreBlauw;
}

document.getElementById("updateRood").onclick = function () 
{
    scoreRood = parseInt(document.getElementById("valueRood").value);
    document.getElementById("scoreRood").innerText = scoreRood;
}
document.getElementById("updateBlauw").onclick = function () 
{
    scoreBlauw = parseInt(document.getElementById("valueBlauw").value);
   
    document.getElementById("scoreBlauw").innerText = scoreBlauw;
}





//Oefening 2
document.getElementById("btnRood").onclick = function () 
{
document.getElementById("kleurBox").style.backgroundColor = "#FF0000";
}
document.getElementById("btnBlauw").onclick = function ()
 {
    document.getElementById("kleurBox").style.backgroundColor = "#0000FF";
}
document.getElementById("btnGroen").onclick = function () 
{
    document.getElementById("kleurBox").style.backgroundColor = "#008000";
}
document.getElementById("kleurKiezer").onchange = function () {
    let gekozenKleur = document.getElementById("kleurKiezer").value;
    document.getElementById("kleurBox").style.backgroundColor = gekozenKleur;
}


//Oefening 3
document.getElementById("btnBericht").onclick = function () 

{
   let voornaam = document.getElementById("voornaam").value; 
   let naam = document.getElementById("naam").value;
   let geboortejaar = parseInt(document.getElementById("geboortedatum").value);
    let currentYear = new Date().getFullYear();
    let Leeftijd = currentYear - geboortejaar;
}



//Oefening 4 
document.getElementById("box").onmouseover = function () {
    document.getElementById("resultaat").innerText = "De box werd betreden";
    document.getElementById("box").style.backgroundColor = "#00FF00";
}
document.getElementById("box").onmouseout = function () {
    document.getElementById("resultaat").innerText = "De box werd verlaten";
    document.getElementById("box").style.backgroundColor = "#FF0000";
}
document.getElementById("box").onmousedown = function () {
    document.getElementById("box").style.border = "5px solid ";
}
document.getElementById("box").onmouseup = function () 
{
    document.getElementById("box").style.border = "none";
}

//Oefening 5
document.getElementById("menuButton").onclick = function () 
{
    document.getElementById("menuButton").classList.toggle("closed");
}