//Oefening 1 
document.getElementById("oefening1").onclick = function()   {


    do {
    var getal1 = prompt("Geef het eerste getal in:");
        }
    while  (getal1 == null || getal1.trim() ==="" || isNaN(getal1));
    document.getElementById("getal1").innerHTML = getal1;

   getal2 = vraagGetal();
    vergelijkGetallen(getal1, getal2);
} 


vraagGetal();
    function vraagGetal() {
        
        do {
        var getal2 = prompt("Geef het tweede getal in:");
            }
            
            while (getal2==null|| getal2.trim() === "" || isNaN(getal2));
    
        document.getElementById("getal2").innerHTML = getal2;
        return getal2;

    } 




    function vergelijkGetallen(getal1, getal2) {
        getal1 = Number(getal1);
        getal2 = Number(getal2);
    
        if (getal1 == getal2) 
         {
        document.getElementById("resultaat1").innerHTML = "De getallen zijn gelijk.";} 

        else if (getal1 > getal2) 
    {
    
        document.getElementById("resultaat1").innerHTML = "Het eerste getal is groter dan het tweede getal.";
    }
    

    else {
        
    document.getElementById("resultaat1").innerHTML = "Het tweede getal is groter dan het eerste getal.";     
    } }

//Oefening 2
document.getElementById("oefening2").onclick = function() {     
let getal= vraagGetalInBereik("Geef een getal voor de tafel in:",1,20);
let resultaat="";
for (let i=1; i<=20; i++)
{
    resultaat +=getal + " x " + i + " = " + (getal * i) + "<br>"; 
}
document.getElementById("resultaat2").innerHTML = resultaat;    


}