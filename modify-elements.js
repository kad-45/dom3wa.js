/**
 * -------------------------------------------------------
 * 1 - Créer une div :
 * → qui possède un titre de niveau 3 avec un id et du texte
 * → qui possède un paragraphe avec du texte
 * → qui possède un bouton avec une classe et un texte
 *
 * Ajouter cette div à la section "hero-section"
 * -------------------------------------------------------
 */
// Création d'une div et ses enfants : un titre h3 avec un "id", un "P" avec du text et un "button" avec une "class" et du text-------

const divParent = document.createElement("div");
const divTitleh3 = document.createElement("h3");
const divParagraphe = document.createElement("p");
const button1 = document.createElement("button");

// Création des attributs -------------------------

const idTitleh3 = divTitleh3.setAttribute("id", "titleh3");
 button1.setAttribute("class", "btn");


// Remplire les enfants de div avec du text----------------------

divTitleh3.innerText = "Création des élements html avec JS";
divParagraphe.innerText =
  "Pour définir la valeur d'un attribut booléen, tel que disabled, vous pouvez spécifier n'importe quelle valeur. Une chaîne vide ou le nom de l'attribut sont des valeurs recommandées.";
button1.innerText = "Cliquez ici";

// Relier les enfants au parent Div----------

divParent.appendChild(divTitleh3);
divParent.appendChild(divParagraphe);
divParent.appendChild(button1);

// Relier le div à la section "hero-section"-------------

const heroSection = document.querySelector("#hero-section");
heroSection.appendChild(divParent);

/**
 * -------------------------------------------------------
 * 2 - Écrire une fonction qui créer et retourne un élément HTML "li" avec du texte.
 * Exemple : l'execution de la fonction     createMenuItem("Item 1")       retourne :       <li>Item 1</li>
 * → Créer ainsi 5 puces et les insérer dans la liste à puces "menu"
 * -------------------------------------------------------
 */

/*
*  la fonction createMenuItem() permet de creer un element li  avec du texte
* <li>item 1</li>
*/
 function createMenuItem(elem){
   let text = elem;
   let liElement  = document.createElement('li');
   liElement.innerText = text;
   return liElement;
}

/*
* création d'une boucle for ça nous permet de rajouter des "li" autant qu'on veut et de les relier à "ul"----------
*/
let  ulElement = document.querySelector('#menu');
for(let i = 1; i<=5; i++ ) {
   let item = 'item '+ i;
   let liElement = createMenuItem(item);
   ulElement.appendChild(liElement);
}

/**
 * -------------------------------------------------------
 * 3 - Créer un second menu (via JS uniquement):
 * → La liste à puces aura pour id "menu2" et comportera 3 éléments
 * -------------------------------------------------------
 */
// Création d'un menu puce "ul" avec un "id" de valeur "menu2"---------

const secondUlElement = document.createElement("ul");
secondUlElement.setAttribute('id', 'menu2');
const headerElment = document.querySelector('header');


//Création de 3 enfant de "ul" en appelant la fonction creatItem(Item)-------------

for(let i = 1; i<=3; i++ ) {
   let item = 'item '+ i;
   let liElement = createMenuItem(item);
   secondUlElement.appendChild(liElement);

}
headerElment.appendChild(secondUlElement);




/**
 * -------------------------------------------------------
 * 4 - Déplacer le premier et le dernier élément de la première liste (menu) dans la seconde liste (menu2)
 * -------------------------------------------------------
 */
 let firstElementUl = document.querySelector('#menu');
 let secondElementUl = document.querySelector('#menu2');
 secondElementUl.appendChild(firstElementUl.childNodes[0]);
 secondElementUl.appendChild(firstElementUl.childNodes[3]);
 //console.log(secondElementUl.childNodes);
 //secondElementUl.appendChild(firstElementUl.firstChild);
 //secondElementUl.appendChild(firstElementUl.lastChild);

/**
 * -------------------------------------------------------
 * 5 - Changer le texte des puces qui viennent d'être déplacées
 * -------------------------------------------------------
 */
// On récupere les deux enfants rajoutés et on en change leur texte-------

secondElementUl.childNodes[3].innerText = "item 4-1";
secondElementUl.childNodes[4].innerText = "item 5-5";

/**
 * -------------------------------------------------------
 * 6 - Supprimer le titre de niveau 1 qui n'a rien à faire dans le <head></head> et dont l'id est scandaleux 🤓
 * -------------------------------------------------------
 */
let bodyElem = document.querySelector('body');
let titleH1 = document.querySelector('h1');
bodyElem.removeChild(titleH1);

// Voici un bout de code : ne pas toucher !
const elementListToCreate = [
  {
    name: "section",
    times: 3,
  },
  {
    name: "div",
    times: 3,
  },
  {
    name: "p",
    times: 3,
  },
  {
    name: "span",
    times: 3,
  },
];
/**
 * -------------------------------------------------------
 * 7 - Créer une boucle qui permet de créer et d'injecter dans le body les éléments du tableau un nombre X de fois.
 * Chaque élément est l'enfant du précédent.
 * Exemple (basé sur le tableau ci-dessus) : il faut créer 3 sections. Chaque section possède 3 div. Chaque div possède 3 paragraphes (avec du texte). Chaque paragraphe possède 3 spans (avec du texte et une classe, la même pour chaque span)
 * -------------------------------------------------------
 */
   let mainElement = document.querySelector('main'); 
   //let arrayListe = ["section", "div", "p", "span"]
  
   for (let i = 0; i < 3; i++ ) {
     let sectionEl = document.createElement("section");
     sectionEl.innerText = "section n° " + i;
     mainElement.appendChild(sectionEl);
      
      for(let j = 0; j < 3; j++){
        let divEl = document.createElement("div");
        divEl.innerText = "Div n° " + (j + 1);
        sectionEl.appendChild(divEl);
        
        for(let x =0; x < 3; x++){
          let pEl = document.createElement("p");
          pEl.textContent = "Paragraphe n° " + (x + 1);
          divEl.appendChild(pEl);
          
          for(let y = 0; y < 3; y++){
            let spanEl = document.createElement("span");
            spanEl.innerText = "Span n° " + (y + 1);
            spanEl.setAttribute("class", "span-elem");
            pEl.appendChild(spanEl);
          }
        }
      }


    }

/**
 * -------------------------------------------------------
 * 8 - Sélectionner tous les spans nouvellement créés. Modifier leur texte via une boucle. Chaque span doit afficher "je suis le span n°X"
 * Exemple :
 * → Le premier span doit afficher "je suis le span n°1"
 * → Le second span doit afficher "je suis le span n°2"
 * → etc... jusqu'au span n°9 🤯
 * -------------------------------------------------------
*/
