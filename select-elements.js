/** -------------------------------------------------------
* 1 - Récupérer (par les 2 méthodes différentes) la section "nos services" :
* → par son id
* → par son nom de balise
* -------------------------------------------------------
*/

// 1er méthode récupérer la section "nos services" par son id---

const ourSection = document.getElementById("our-section");
console.log("récuperation de la section ourservice)))))))");
console.log(ourSection);
// 2 ème méthode récupérer

const sectionsListe = document.getElementsByTagName("section");
console.log("2ème méthode : récuperation de la section ourservice)))))))");
console.log(sectionsListe);
//sectionsListe[1];
console.log(sectionsListe[1]);

/**
* -------------------------------------------------------
* 2 - Récupérer les 2 inputs par leur id
* → Afficher leur valeur (value) dans la console
* -------------------------------------------------------
*/
const val1 = document.getElementById("great");
console.log(val1.value);
const val2 = document.getElementById("not-great");
console.log(val2.getAttribute("value")); // val2.value
/**
* -------------------------------------------------------
* 3 - Récupérer le titre de niveau 3 de la seconde division de la seconde section
* → afficher la valeur de son texte dans la console
* -------------------------------------------------------
*/
const h3Element = document.querySelector(
 "div.cards-container div:nth-child(2) h3"
);
//const lastChild = divParent.lastElementChild;
console.log(h3Element.innerText);

/**
* -------------------------------------------------------
* 4 - Il est possible de récupérer un élément qui possède plusieurs classes. Récupérer tous les éléments :
* → qui partagent la classe :   "btn"
* → qui partagent la classe :   "cta-btn"
* → qui partagent la classe :   "cta-primary"
* → qui partagent la classe :   "cta-secondary"
* → qui partagent les classes : "cta-btn cta-primary"
* → qui partagent les classes : "btn cta-btn cta-secondary"
*
* → Les afficher dans la console
* → Via JS, compter le nombre de fois où la classe "btn" est présente
* -------------------------------------------------------
*/

const btn = document.querySelectorAll(".btn");
console.log(btn);
const ctaBtn = document.querySelectorAll(".cta-btn");
console.log(ctaBtn);
const ctaPrimary = document.querySelectorAll(".cta-primary");
console.log(ctaPrimary);
const ctaSecondary = document.querySelectorAll(".cta-secandary");
console.log(ctaSecondary);
const ctabtnCtaprimary = document.querySelectorAll(".cta-btn.cta-primary");
console.log(ctabtnCtaprimary);
const btnctabtnctaSecondary = document.querySelectorAll(".btn.cta-btn.cta-secondary");
console.log( btnctabtnctaSecondary);
console.log(btn.length);

/**
* -------------------------------------------------------
* 5 - Récupérer tous les paragraphes. Via une boucle, les afficher dans la console
* -------------------------------------------------------
*/
const paragraphesListe = document.querySelectorAll('p');
console.log(paragraphesListe);
for(let i =0; i < paragraphesListe.length; i++) {
  console.log(paragraphesListe[i]);
}
/**
* -------------------------------------------------------
* 6 - Récupérer et afficher les éléments suivants dans la console :
* → le parent direct de la première section
* → le premier enfant de la première section
* → le dernier enfant de la première section
* → le frère précédent de la section "nos services"
* → le frère suivant de la section "nos services"
*
* -------------------------------------------------------
*/

// Parent direct de la premier section : c'est le main----

const mySection = document.querySelector('section');
console.log(mySection.parentElement);

//Premier enfant de la premier section : c'est le titre h1------

console.log(mySection.firstElementChild);

// Dernier enfant de la premier section : c'est un button --------

console.log(mySection.lastElementChild);

//Frère précédent de la section "nos services"--------

const secondSection = document.querySelector("#our-section");
const prevSibling = secondSection.previousElementSibling;
console.log(prevSibling);

// Frère suivant de la section "nos services" : c'est "form"------

const nextSibling = secondSection.nextElementSibling;
console.log(nextSibling);





/**
* -------------------------------------------------------
* 7 - Créer une fonction qui permette de compter le nombre de fois "où la balise X apparaît".
* Compter ensuite le nombre de fois où :
* la balise HTML h1 apparaît
* la balise HTML h2 apparaît
* la balise HTML h3 apparaît
* la balise HTML p apparaît
* la balise HTML section apparaît
* la balise HTML div apparaît
* → Calculer la somme totale de ces occurences et afficher le résultat dans la console
* -------------------------------------------------------
*/
//1er méthode avec for

const myBaliseHtml = ["h1", "h2", "h3", "p", "section","div"];
let counte = 0;
function counterBalise(elem){
  return document.getElementsByTagName(elem).length;
}
for(let i = 0; i < myBaliseHtml.length; i++){
    
  counte += counterBalise(myBaliseHtml[i])
}
console.log(counte);

//2ème méthode

const baliseListe = ["h1", "h2", "h3", "p", "section","div"];

function counter(balise){
  
  return document.getElementsByTagName(balise).length;
}

console.log(counter("h1") + counter("h2") + counter("h3") + counter("p") + counter("section") + counter("div"));

const titleP = document.querySelectorAll("p");
console.log(titleP);
const mainListe = document.querySelector("main");
console.log(mainListe.innerHTML.length);
