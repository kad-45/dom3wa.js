/**
   * -------------------------------------------------------
   * 1 - Renseigner l'attribut src de la balise <img>
   * -------------------------------------------------------
*/
let srcImg = document.querySelector("img");
srcImg.src = "https://images.pexels.com/photos/5861325/pexels-photo-5861325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
srcImg.style.width = "600px";

/**
   * -------------------------------------------------------
   * 2 - Créer l'attribut alt de la balise <img>
   * -------------------------------------------------------
*/
 srcImg.setAttribute("alt", "Photo DEV");

/**
   * -------------------------------------------------------
   * 3 - Créer un élément <a></a> : 
   * → Il possède un texte et un attribut href
   * → Ajouter l'élément dans le footer
   * -------------------------------------------------------
*/
let aElement = document.createElement("a");
aElement.setAttribute("href", "https://developer.mozilla.org/fr"); 
aElement.textContent = "Cliquez ici";
let footerElem = document.querySelector('footer');
footerElem.appendChild(aElement);


/**
   * -------------------------------------------------------
   * 4 - Modifier les attributs de l'élément <a></a> :
   * → Dans le sens propriété → attribut, ajouter un "id" 
   * →  Dans le sens attribut → propriété, ajouter un "target" à l'élément <a></a>
   * -------------------------------------------------------
*/
aElement.setAttribute("id", "link");
aElement.setAttribute("target", "_blanc");


/**
   * -------------------------------------------------------
   * 5 Créer une liste <ul></ul> qui possède 3 enfants <li></li>
   * → Injecter cette liste après la seconde liste du <header></header>
   * -------------------------------------------------------
*/
let ulElement = document.createElement("ul");
let headerEle = document.querySelector("header");

/*function creatListeUl(elem){
   let text = elem;
   let liElement = document.createElement("li");
   liElement.innerText = text;
   return liElement;
}*/

for (let i = 1; i <= 3; i++ ){
   
   let elem = "element " + "3." + i;
   let text = elem;
   let liElement = document.createElement("li");
   liElement.innerText = text;
    //let liElement = creatListeUl(elem);
    ulElement.appendChild(liElement);
} 
headerEle.appendChild(ulElement);



/**
   * -------------------------------------------------------
   * 6 - Récupérer toutes les balises <ul></ul> de la page 
   * → Créer une boucle qui itère sur chaque élément de la liste obtenue
   * 
   * Cette boucle contient une fonction :
   * → créer une fonction qui permet d'ajouter, en fonction de l'index actuel de la boucle, un attribut à la liste <ul><ul> concernée.
   * 
   * Cet attribut est l'attribut "type" : 
   * → Si c'est la première liste, sa valeur sera "a"
   * → Si c'est la seconde liste, sa valeur sera "I"
   * → Si c'est la troisième liste, sa valeur sera "A"
   * 
   * Exemples : 
   * 
   * 
   *  <!-- Première liste -->
        <ul type="a">
            <li>Élement 1.1</li>
            <li>Élement 1.2</li>
            <li>Élement 1.3</li>
        </ul>

         <!-- Seconde liste -->
        <ul type="I">
            <li>Élement 2.1</li>
            <li>Élement 2.2</li>
            <li>Élement 2.3</li>
        </ul>

   * 
   * -------------------------------------------------------
*/
let elementUlListe = document.querySelectorAll("ul");
//console.log(elementUlListe);

for(let i = 0; i < elementUlListe.length; i++){
 
  let ulEle = elementUlListe[i];
  ulEle.setAttribute("type", "value");

if(i === 0){

   ulEle.setAttribute("type", "a");
}
if(i === 1){
  
   ulEle.setAttribute("type", "I");
 
}

if(i === 2){

   ulEle.setAttribute("type", "A");

}
}





