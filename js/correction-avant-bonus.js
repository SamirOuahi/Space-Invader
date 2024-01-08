// Etape 1 : On veux générer des divs pour la grille de l'invader
// 1.1 Je récupere l'element qui va contenir mes divs
// 1.2 Je boucle 'le bon nombre de fois' (pour l'instant 64 fois)
// 1.3 A chaque fois, Je créer un element "<div>"
// 1.4 Je lui ajoute la classe "pixel"
// 1.5 Je l'insert dans le container

createForm();
createGrid(4);

// Etape 3
// Objectif numero 1: récuperer le contenu de l'input
//   On ajoute un ecouteur d'evenement lors de la validation du formulaire
//   On empeche le rechargement de la page
//   On récupere les valeurs du formulaire
// Objectif numero 2: Regenerer une grille en fonction de l'entrée utilisateur

const form = document.querySelector(".configuration");
form.addEventListener("submit", reagirSubmit);

/***************/
/*  Fonctions  */
/***************/

function reagirSubmit(event) {
  // On empeche le comportement par défautl du navigateur
  // Qui est  de recharger la page lors de la soumission du formulaire
  event.preventDefault();

  // Je récupere l'input
  const inputElem = document.getElementById("gridSizeInput");

  // En particulier, je stoque sa valeur
  const inputValue = inputElem.value;

  // Objectif numero 2: Regenerer une grille en fonction de l'entrée utilisateur
  createGrid(inputValue);
}

function reagirClick(event) {
  // J'ai besoin de savoir quelle pixel a été cliqué, ça tombe bien
  // Il est dans event.target
  const clickedPixelElem = event.target;

  // Je veux changer la couleur du pixel, en ajoutant une classe "black"
  clickedPixelElem.classList.toggle("black");
}

function createForm() {
  // Je créer mon formulaire en JS
  /*
   <input
        class="configuration-input"
        type="text"
        placeholder="Taille de la grille"
        name="gridSize"
      />
      <button class="configuration-button" type="submit">Valider</button>
  */
  //Etape 1 - Je recupere l'element qui va contenir mes inputs
  const form = document.querySelector(".configuration");

  // Etape 2 - Je créer mes inputs
  const gridSizeInput = document.createElement("input");
  gridSizeInput.className = "configuration-input";
  gridSizeInput.type = "text";
  gridSizeInput.placeholder = "Taille de la grille";
  gridSizeInput.name = "gridSize";
  gridSizeInput.id = "gridSizeInput";

  const button = document.createElement("button");
  button.className = "configuration-button";
  button.type = "submit";
  button.textContent = "Valider";

  // Etape 3 - J'insère mes inputs dans le DOM, en particulier dans l'element 'form'
  form.appendChild(gridSizeInput);
  form.appendChild(button);
}

function createGrid(gridSize) {
  const gridContainer = document.getElementById("invader");
  // Avant de generer une nouvelle grille, on vide les anciens pixels
  gridContainer.innerHTML = "";
  //  grid-template-columns: repeat(8, 1fr);
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const pixelElem = document.createElement("div");
    pixelElem.className = "pixel";

    // Etape 2 : On ajoute un ecouteur d'evenement sur le pixel
    pixelElem.addEventListener("click", reagirClick);
    gridContainer.appendChild(pixelElem);
  }
}
