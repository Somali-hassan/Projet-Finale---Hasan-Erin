let itemList = document.querySelector(".items");
let listPanier = document.getElementById("list-panier");
let total = document.querySelector(".total-panier");
let tax = document.querySelector(".tax");
let soustotal = document.querySelector(".soustotal");
let panierContainer = document.getElementById("container-panier");
let montrer = document.getElementById("Panierdeux");
let prixTotal = 0;
let listStorage = [];
let panierCourses = [];

let items = [
  {
    index: 1,
    quantité: 0,
    nom: "Lemonade",
    image: "Resources/image/PEV1.png",
    prix: 50
  }
];

// Éléments initials du magasin
function initItem() {
  listStorage = JSON.parse(localStorage.getItem("panierCourses"));
  total.innerHTML = listStorage.length;
  for (let i = 0; i < items.length; i++) {
    let value = items[i];
    let card = document.createElement("div");
    card.setAttribute("class", "item-Afficher");
    card.innerHTML = `
          <img src="${value.image}" class="card-img-top" alt="...">
          <div class="nom-prix-bouton"> 
              <h4 class="cart-h4">${value.nom} ${value.prix}$</h4>
              <button class="AjouterAuPanier" onclick="AjouterAuPanier(${i}, ${value.index})">Ajouter</button>
          </div>`;
    itemList.appendChild(card);
  }
}
initItem();

// Fonction pour mettre des divs dans panier selon quantité
function AfficherPanier() {
  prixTotal = 0;
  listStorage.forEach((value) => {
    if (value != null) {
      // Calcule prix
      prixTotal += value.quantité * value.prix;
      tax.innerHTML = "Taxes (13%): " + prixTotal * 0.13;
      soustotal.innerHTML = "Sous-total : " + prixTotal;
      total.innerHTML = "Total : " + (prixTotal + prixTotal * 0.13);
      // Création div si le quantité n'est pas 0
      let listItem = document.createElement("div");
      listItem.setAttribute("class", "list-group-item");
      listItem.innerHTML = `
                <div class = "quant">
                    <div>
                        <img class = cart-image src="${value.image}" ></div>
                        <div><h5">${value.nom}</h5></div>
                        <div><h6">${value.prix.toString()}$</h6></div>
                    <div class = "quant">
                        <button class = "quantité" onclick="moinsQuantité(${listStorage.indexOf(value)}, ${value.quantité})">-</button>
                        <div class="count">${value.quantité}</div>
                        <button class = "quantité" onclick="plusQuantité(${listStorage.indexOf(value)}, ${value.quantité})">+</button>
                    </div>
                </div>`;
      listPanier.appendChild(listItem);
      // Si il n'y a plus cette élément dans le panier (quantité = 0), enlevé div
      // if(value.quantité == 0){
      //     listPanier.removeChild(listItem);
      //     listStorage.splice(listStorage.indexOf(value));
      // }
    } else {
      panierContainer.style.display = "none";
    }
  });
}

montrer.addEventListener("click", montrerpanier);
function montrerpanier() {
  if (panierContainer.style.visibility == "visible")
    panierContainer.style.visibility = "hidden";
  else if (panierContainer.style.visibility == "hidden")
    panierContainer.style.visibility = "visible";
}
