let prixTotal = 0;
// Liste d'affaire dans panier sauve garder
let listStorage = [];
// Liste d'affaire ajouté au panier (divs)
let panierCourses = [];
// Items du magasin
let total = 0;
let quantité = 1;

//function plusQuantité(ind, quant) {
// quant = listStorage[ind].quantité + 1;
// listStorage[ind].quantité = quant;
// prixTotal += quant * listStorage[ind].prix;
// localStorage.setItem("panierCourses", JSON.stringify(listStorage));
//  listPanier.innerHTML = "";
//  AfficherPanier();
//}

function BtnaddClick(index) {
    quantité++;
    document.getElementById(`quantité${index}`).innerHTML = quantité;
}



//function initItem() {
// = JSON.parse(localStorage.getItem("panierCourses"));
// document.getElementById("total").innerHTML =
// for (let i = 0; i < items.length; i++) {
//  let value = items[i];
//   let card = document.createElement("div");
//   card.setAttribute("class", "item-Afficher");
//   card.innerHTML = `
//         <img src="${value.image}" class="card-img-top" alt="...">
//          <div class="nom-prix-bouton">
//             <h4 class="cart-h4">${value.nom} ${value.prix}$</h4>
//              <button class="AjouterAuPanier" onclick="AjouterAuPanier(${i}, ${value.index})">Ajouter au panier</button>
//        </div>`;
//   itemList.appendChild(card);
// }
//
//initItem();

//function plusQuantité(ind, quant) {
// quant = listStorage[ind].quantité + 1;
// listStorage[ind].quantité = quant;
// prixTotal += quant * listStorage[ind].prix;
// localStorage.setItem("panierCourses", JSON.stringify(listStorage));
//  listPanier.innerHTML = "";
//  AfficherPanier();
//}
