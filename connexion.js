const loginform = document.getElementById("login-form");
const btnC = document.getElementById("btnConnecter");
const btnI = document.getElementById("btnCompte");
let btnSwitchI = document.getElementById("btnInscription");
let btnSwitchC = document.getElementById("btnConnexion");
let displayI = document.getElementById("Inscription");
let displayC = document.getElementById("Connexion");
let listLogin = [];
// Switch displays
btnSwitchI.addEventListener("click", () =>{
    displayC.style.display = "none";
    displayI.style.display = "block";
    btnSwitchI.style.borderColor = "rgb(202, 19, 43)";
    btnSwitchC.style.borderColor = "#e0d7d7";
})
btnSwitchC.addEventListener("click",() =>{
    displayI.style.display = "none";
    displayC.style.display = "block";
    btnSwitchC.style.borderColor = "rgb(202, 19, 43)";
    btnSwitchI.style.borderColor = "#e0d7d7";
})
// Inscription
btnI.addEventListener("click", () => {
    // e.preventDefault();
    
})
// Connexion
btnC.addEventListener("click", login)
// Vérifier si user est valide
function login(e){
    e.preventDefault(); 
    listLogin = JSON.parse(localStorage.getItem('listLogin'));
    const username = loginform.username.value;
    if (username == "user") {
        
        window.location.href = "index.html";
        // Allez au page principale
    } else {
         alert("Invalide username.");
    }
}