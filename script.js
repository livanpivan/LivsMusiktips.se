//låtarna till slumpknappen
const latar = ["Kent - VinterNoll2", 
    "Väster-Ut - Ta Tillbaka Juninatten", 
    "Mando Diao - När solen färgar juninatten",
    "Depeche Mode - In Your Room",
    "David Bowie - China Girl",
    "Guns N' Roses - You Could Be Mine",
    "The Smiths - Handsome Devil",
    "Tame Impala - Loser"
]

//funktion när användaren klickar på knappen
function visaTips() {

//slumpar fram ett tal mellan 0 och antalet låtar i listan
    const slump = Math.floor(Math.random() * latar.length);

//visar den valda låten i <p id="tips">-elementet på sidan
    document.getElementById("tips").textContent = latar[slump];
    
}