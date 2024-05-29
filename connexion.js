const loginform = document.getElementById("login-form");
const btnC = document.getElementById("btnConnecter");
const btnI = document.getElementById("btnCompte");
let btnSwitchI = document.getElementById("btnInscription");
let btnSwitchC = document.getElementById("btnConnexion");
let displayI = document.getElementById("Inscription");
let displayC = document.getElementById("Connexion");
let nom = document.getElementById("Prénom");
let email = document.getElementById("email");
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
btnI.addEventListener("click", Compte)
// Connexion
btnC.addEventListener("click", login)
// Vérifier si user est valide
function login(e){
    e.preventDefault(); 
    listLogin = JSON.parse(localStorage.getItem('listLogin'));
    const username = loginform.username.value;
    if(listLogin != null){
        if (listLogin.includes(username)) {
            window.location.href = "index.html";
        } else {
             alert("Compte invalide. Inscrire ou vous connecter");         
        }
    }
    else{
        alert("Compte invalide. Inscrire ou vous connecter.");
    }
    
}
function Compte() {
    listStorage = JSON.parse(localStorage.getItem('listLogin'));
    // let card = {prenom:nom.value, mail: email.value};
    let card = email.value;
    if (!listLogin.includes(card)){
        listLogin.push(card);
        localStorage.setItem('listLogin', JSON.stringify(listLogin));
        window.location.href = "index.html";
    }
    else{
        // Doit faire compris listeLogin hors page connexion
        alert("Compte déjà existant");
    }
}