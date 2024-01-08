const app = {
  gridSizeInput: null,
  pixelSizeInput: null,
  paletteContainerElem: null,
  gridSize: 2,
  pixelSize: 50,
  currentColor: "yellow",
  styles: ["plain", "empty", "green", "yellow", "blue"],
  init: function () {
    // Créer le formulaire
    app.createForm();
    // Créer la grille initial
    app.createGrid();
    // On setup la palette de couleur
    app.createPalette();
  },
  createPalette: function () {
    // Je genere ma palette en JS
    // ...

    /* 
        <div class="palette-container">
      <div class="palette plain" data-color="plain"></div>
      <div class="palette empty" data-color="empty"></div>
      <div class="palette yellow" data-color="yellow"></div>
      <div class="palette green" data-color="green"></div>
    </div>
    */

    const paletteContainerElem = document.createElement("div");
    paletteContainerElem.className = "palette-container";

    // j'ajoute mon element au DOM
    document.body.append(paletteContainerElem);

    // On veux créer des elements "palette" en utilisant le tableau style

    app.styles.forEach(function (color) {
      const paletteElem = document.createElement("div");
      paletteElem.classList.add("palette");
      paletteElem.classList.add(color);
      paletteElem.setAttribute("data-color", color);

      if (color === "plain") {
        paletteElem.classList.add("current");
      }
      // J'insere ma div dans le container des couleurs
      paletteContainerElem.appendChild(paletteElem);
    });

    /*
    Equivalent à : 
    for (let i = 0; i < app.styles.length; i++) {
      // Je veux a chaque fois créer une div et tout ce qui va bien
      const paletteElem = document.createElement("div");
      paletteElem.classList.add("palette");
      paletteElem.classList.add(app.styles[i]);
      paletteElem.setAttribute("data-color", app.styles[i]);

      // J'insere ma div dans le container des couleurs
      paletteContainerElem.appendChild(paletteElem);
    }*/

    app.paletteContainerElem = paletteContainerElem;

    app.paletteContainerElem.addEventListener("click", app.reagirClickPalette);
  },
  reagirClickPalette: function (event) {
    app.currentColor = event.target.dataset.color;

    const paletteElems = document.querySelectorAll(".palette");
    paletteElems.forEach(function (elem) {
      elem.classList.remove("current");
    });

    event.target.classList.add("current");
  },
  createGrid: function () {
    const gridContainer = document.getElementById("invader");
    gridContainer.innerHTML = "";
    gridContainer.style.gridTemplateColumns = `repeat(${app.gridSize}, 1fr)`;
    gridContainer.style.height = app.gridSize * app.pixelSize + "px";
    gridContainer.style.width = app.gridSize * app.pixelSize + "px";

    for (let i = 0; i < app.gridSize * app.gridSize; i++) {
      const pixelElem = document.createElement("div");
      pixelElem.className = "pixel";

      // Etape 2 : On ajoute un ecouteur d'evenement sur le pixel
      pixelElem.addEventListener("click", app.reagirClick);
      gridContainer.appendChild(pixelElem);
    }
  },
  createForm: function () {
    const form = document.querySelector(".configuration");
    // Etape 2 - Je créer mes inputs
    const gridSizeInput = document.createElement("input");
    gridSizeInput.className = "configuration-input";
    gridSizeInput.type = "text";
    gridSizeInput.placeholder = "Taille de la grille";
    gridSizeInput.name = "gridSize";
    gridSizeInput.id = "gridSizeInput";

    // Je genere un input taille des pixels
    const pixelSizeInput = document.createElement("input");
    pixelSizeInput.className = "configuration-input";
    pixelSizeInput.type = "text";
    pixelSizeInput.placeholder = "Taille des pixels";
    pixelSizeInput.name = "pixelSize";
    pixelSizeInput.id = "pixelSizeInput";

    // Je stoque la référence à mon input dans l'objet app
    app.gridSizeInput = gridSizeInput;
    app.pixelSizeInput = pixelSizeInput;

    const button = document.createElement("button");
    button.className = "configuration-button";
    button.type = "submit";
    button.textContent = "Valider";

    form.addEventListener("submit", app.reagirSubmit);

    // Etape 3 - J'insère mes inputs dans le DOM, en particulier dans l'element 'form'
    form.appendChild(gridSizeInput);
    form.appendChild(pixelSizeInput);
    form.appendChild(button);
  },
  reagirClick: function (event) {
    // J'ai besoin de savoir quelle pixel a été cliqué, ça tombe bien
    const clickedPixelElem = event.target;
    clickedPixelElem.className = "pixel " + app.currentColor;
  },
  reagirSubmit: function (event) {
    console.log("submit");
    // On empeche le comportement par défautl du navigateur
    event.preventDefault();

    // On regenere une grille
    app.gridSize = app.gridSizeInput.value;
    app.pixelSize = app.pixelSizeInput.value;
    app.createGrid();
  },
};

app.init();
