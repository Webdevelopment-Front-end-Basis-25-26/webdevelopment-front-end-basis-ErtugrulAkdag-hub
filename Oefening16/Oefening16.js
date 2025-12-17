
var ingredientenLijst = [];


document.getElementById("addIngredient").addEventListener('click', function(){
    let invoer = document.getElementById("ingredientInput").value.trim();

    if(invoer === ""){
        document.getElementById("ingredientenResultaat").innerText= "Voer een ingrediënt in!";
    }
    else{
        staatInDeLijst(ingredientenLijst,invoer);
        document.getElementById("ingredientInput").value = "";
    }
}

);



document.getElementById("showIngredients").addEventListener('click', function() 

{
    
    document.getElementById("ingredientenResultaat").innerText = "";

    if (ingredientenLijst.length != 0) {
        document.getElementById("ingredientenResultaat").innerHTML = `${ingredientenLijst.length} ingrediënten: <br>`;
        ingredientenLijst.forEach(element => 
            
            {
            document.getElementById("ingredientenResultaat").innerHTML += `${element}, `;
        }
    );
    } 
    else {
        document.getElementById("ingredientenResultaat").innerText = "Nog geen ingrediënten toegevoegd";
    }
});




function staatInDeLijst(lijst,ingredient){
    for (let element of lijst)
         {
        if(element.toLowerCase() === ingredient.toLowerCase())
        {
            document.getElementById("ingredientenResultaat").innerText= ingredient + " staat al in de lijst!";
            return;
        }
    };
    
    ingredientenLijst.push(ingredient);
    document.getElementById("ingredientenResultaat").innerText= ingredient + " toegevoegd!";
};



let pizza_array= [];

document.getElementById("addPizza").addEventListener('click', function(){
    let naam = document.getElementById("pizzaNaam").value.trim();
    let prijs = document.getElementById("pizzaPrijs").value.trim();
    let aantal = document.getElementById("pizzaAantal").value.trim();

    if(naam === '' || !/^\d+$/.test(prijs) || parseInt(prijs) < 1 || !/^\d+$/.test(aantal) || parseInt(aantal) < 1){
        document.getElementById("pizzasResultaat").innerText = "Vul alle velden correct in";
    }
    else{
        let nieuwePizza = {pizzaNaam: naam,
                        Pizzaprijs : prijs,
                        Pizzaaantal: aantal};
        pizza_array.push(nieuwePizza);

        document.getElementById("pizzasResultaat").innerText = `Pizza ${naam} toegevoegd!`;
        document.getElementById("pizzaNaam").value = "";
        document.getElementById("pizzaPrijs").value = "";
        document.getElementById("pizzaAantal").value = 1;
        
    }
});


document.getElementById("showPizzas").addEventListener('click', function(){
    if(pizza_array.length === 0){
        document.getElementById("pizzasResultaat").innerText = "Nog geen pizza's toegevoegd";
    }
    else{
        toonPizzaTabel(pizza_array);
    }
})


function toonPizzaTabel(tabel){ 
    let html = "<table><th>naam</th><th>prijs</th><th>aantal</th><th>subtotaal</th>"; 
    let nieuweRij =""; 
    tabel.forEach(element => { 
        nieuweRij += `<tr><td>${element.pizzaNaam}</td><td>${element.Pizzaprijs}</td><td>${element.Pizzaaantal}</td><td>€${element.Pizzaprijs*element.Pizzaaantal}</td></tr>`;
        html += nieuweRij; 
        nieuweRij = "";
    }); 
        html += "</table>"; 
        document.getElementById("pizzasResultaat").innerHTML = html; 
}
let subtotalen = [];
document.getElementById("showTotal").addEventListener('click', function(){
    if(pizza_array.length === 0){
        document.getElementById("pizzasResultaat").innerText = "Voeg eerst pizza's toe";
    }
    else{
       subtotalen = pizza_array.map(pizza => pizza.Pizzaaantal * pizza.Pizzaprijs);
       let totaal = subtotalen.reduce((acc, val) => acc + val, 0);

       document.getElementById("pizzasResultaat").innerHTML += "<div class='totaal'>Totaal: €" + totaal.toFixed(2) + "</div>";

    }
})

document.getElementById("filterPizzas").addEventListener('click', function(){
    let filtermin = parseInt(document.getElementById("minAantal").value);
    
    if(isNaN(filtermin) || filtermin < 1 ){
        document.getElementById("pizzasResultaat").innerText = "Voer een geldig getal in";
        return;
    }
    else if(pizza_array.length == 0)
        
        {
        document.getElementById("pizzasResultaat").innerText = "Voeg eerst pizzas toe";
        return;
    }

    let gefilterdeArray = pizza_array.filter(pizza => pizza.Pizzaaantal >= filtermin);
    if(gefilterdeArray.length == 0){
        document.getElementById("pizzasResultaat").innerText = `Geen pizza's gevonden met minimum ${filtermin} stuks`;
    }
    else{
        document.getElementById("pizzasResultaat").innerText = "";
        toonPizzaTabel(gefilterdeArray);
    }
})