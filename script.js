const latar = ["Kent - Kräm", 
    "Väster-Ut - Ta Tillbaka Juninatten", 
    "Mando Diao - När solen färgar juninatten",
    "Depeche Mode - In Your Room",
    "David Bowie - China Girl"]
function visaTips() {
    const slump = Math.floor(Math.random() * latar.length);
    document.getElementById("tips").textContent = latar[slump];
    
}