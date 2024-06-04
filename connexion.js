const loginform = document.getElementById("login-form");
const btnC = document.getElementById("btnConnecter");
const btnI = document.getElementById("btnCompte");
let btnSwitchI = document.getElementById("btnInscription");
let btnSwitchC = document.getElementById("btnConnexion");
let displayI = document.getElementById("Inscription");
let displayC = document.getElementById("Connexion");
let btndisplayDate = document.getElementById("btnDateN");
const checkr = document.querySelector("checkrequis");
let nom = document.getElementById("prénom");
let email = document.getElementById("email");
let listLogin = [];
let Auth = [];
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
// Display dates
btndisplayDate.addEventListener("click", () =>{
    document.getElementById("Date-Input").style.display = "block";
    btndisplayDate.style.display = "none";
})
// Vérifier si user est valide
function login(e){
    e.preventDefault();
    listLogin = JSON.parse(localStorage.getItem('listLogin'));
    const username = loginform.username.value;
    if(listLogin != null){
        if (listLogin.includes(username)) {
            alert("Vous êtes connecter");         
            localStorage.setItem('Auth', JSON.stringify(username));
            window.location.href = "index.html";
        } else {
             alert("Compte invalide.");        
        }
    }
    else{
        alert("Compte invalide. Inscrire ou vous connecter.");
    }

}
// Install @supabase/supabase-js
// import { createClient } from '@supabase/supabase-js';
// // Connect to Supabase
// const supabaseUrl = 'your-supabase-url';
// const supabaseKey = 'your-supabase-key';
// const supabase = createClient(supabaseUrl, supabaseKey);

// // Store listLogin in Supabase
// async function storeLogins(logins) {
//   try {
//     const { data, error } = await supabase
//       .from('users')
//       .insert(logins.map(login => ({ username: login })));
//     if (error) {
//       console.error('Error storing logins in Supabase:', error);
//     } else {
//       console.log('Logins stored in Supabase:', data);
//     }
//   } catch (error) {
//     console.error('Error connecting to Supabase:', error);
//   }
// }

// Update Compte function to store logins in Supabase
function Compte() {
  listStorage = JSON.parse(localStorage.getItem('listLogin'));
  let card = {mail : email.value,
             nom : nom.value};
  if (!listLogin.includes(card.mail)){
    listLogin.push(card.mail);
    // Store logins in Supabase
    // storeLogins(listLogin);
    localStorage.setItem('listLogin', JSON.stringify(listLogin));
    alert("Compte créé avec succès.");
    localStorage.setItem('Auth', JSON.stringify(card));
    window.location.href = "index.html";      
  }
  else{
    alert("Compte déjà existant");
  }
}