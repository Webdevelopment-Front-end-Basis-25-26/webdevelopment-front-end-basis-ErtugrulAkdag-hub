let knop = document.querySelector("button");

knop.addEventListener("click", function() {
    let plaatsnaam = document.getElementsByTagName("input")[0].value;
 
    if (plaatsnaam === "") {
        alert("Geef een plaatsnaam in!");
        return;
    }
   let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + plaatsnaam + ',be&appid=1600feaf7b0739bed63edb69d1c32c8c&lang=nl&units=metric';
    let weer;
    let temp;
    let input;

   fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data.weather[0].description);
   
        console.log(data.main.temp);
        console.log(input);

     temp = Math.round(data.main.temp);
    weer = data.weather[0].description;
input = document.getElementsByTagName("input")[0].value;

     document.getElementById("resultaat").innerHTML ="het is " + temp + "°C, en " + weer + " in " + input;
     let imgCode = data.weather[0].icon;
    let imgUrl = "https://openweathermap.org/img/w/10d.png";
    document.getElementById("resultaat").innerHTML += "<img src='" + imgUrl + "'>";
    });

});