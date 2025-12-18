let taken = [
    {
        id: 1,
        tekst: "JavaScript oefening maken",
        prioriteit: "hoog",
        voltooid: false
    },
    {
        id: 2,
        tekst: "Boodschappen doen",
        prioriteit: "laag",
        voltooid: true
    }
];


let volgendId = 3;


hertoonAlleTaken();

function toonTaak(taakObject) {
    
    let li = document.createElement("li");
    li.className = "taak-item";

    li.classList.add("prioriteit-" + taakObject.prioriteit);

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = taakObject.voltooid;
    checkbox.addEventListener("change", function () {
        toggleTaak(taakObject.id);
    });



    let span = document.createElement("span");
    span.textContent = taakObject.tekst;
    if (taakObject.voltooid) 
        {
        span.style.textDecoration = "line-through";
    }

    let verwijderBtn = document.createElement("button");
    verwijderBtn.textContent = "×";
    verwijderBtn.className = "verwijder-btn";
    verwijderBtn.addEventListener("click", function () 
    
    {
        verwijderTaak(taakObject.id);
    });

    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(verwijderBtn);

    
    if (taakObject.voltooid) {
        document.getElementById("taken-lijst").appendChild(li);
    } else {
        document.getElementById("taken-lijst").insertBefore(li, document.getElementById("taken-lijst").children[1]);
    }
}

function hertoonAlleTaken() {
    
    let lijst = document.getElementById("taken-lijst");

    while (lijst.children.length > 1) {
        lijst.removeChild(lijst.lastChild);
    }

    
    taken.forEach(taak => {
        toonTaak(taak);
    });

    
    updateTeller();
}

function toggleTaak(taakId) {
    
    let taak = taken.find(t => t.id === taakId);

   
    taak.voltooid = !taak.voltooid;

   
    hertoonAlleTaken();
}

function verwijderTaak(taakId) {
    
    taken = taken.filter(t => t.id !== taakId);

    
    hertoonAlleTaken();
}

function updateTeller() {
    let nietVoltooide = taken.filter(t => !t.voltooid).length;
    document.getElementById("aantal").textContent = nietVoltooide;
}

document.getElementById("toevoegen-btn").addEventListener("click", () => {
    
    let taakTekst = document.getElementById("taak-input").value;
    let prioriteit = document.getElementById("prioriteit-select").value;

    if (taakTekst === "") {
        alert("Voer een taak in!");
        return;}
    let nieuweTaak = {
        id: volgendId,
        tekst: taakTekst,
        prioriteit: prioriteit,
        voltooid: false
    };

    
    taken.push(nieuweTaak);
    volgendId++;

    
    toonTaak(nieuweTaak);

    document.getElementById("taak-input").value = "";

    
    updateTeller();
});


document.getElementById("markeer-hoog-btn").addEventListener("click", () => 
    {
    
    let hogeTaken = document.getElementsByClassName("prioriteit-hoog");

    
    for (let i = 0; i < hogeTaken.length; i++) {
        if (!hogeTaken[i].firstChild.checked) {
            hogeTaken[i].classList.toggle("gemarkeerd");
        }
    }

    
});



document.getElementById("verberg-voltooide-btn").addEventListener("click", () => {
    let voltooideCheckboxes = document.querySelectorAll("#taken-lijst input[type='checkbox']:checked");

    voltooideCheckboxes.forEach(checkbox => 
        {
        let li = checkbox.parentElement;
        if (li.style.display === "none") {
            li.style.display = "";
        } else {
            li.style.display = "none";
        }

    }
);
});