## Installer ESlint sur VScode

### Qu'est ce que ESLint ?

ESLint est un outil de linting pour JavaScript. Il permet de détecter des problèmes dans le code JavaScript. Par
exemple les erreurs de typo, les mauvaises pratiques, les problèmes de performance, etc. Mais aussi il vous aide a
formater votre code selon les règles que vous aurez définies.

1. Installer l'extension `eslint` sur vscode (Sur les VM, c'est déjà fait)

```bash
code --install-extension dbaeumer.vscode-eslint
```

3. Installer eslint globalement avec npm en tapant la commande :

```bash
npm i -g eslint
```

2. ajouter un fichier .eslintrc a la racine du projet et copier le contenu

```js
{
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": ["error", 2],
        "quotes": ["error", "double", { "avoidEscape": true }],
        "semi": ["error", "always"]
    }
}
```

## Savoir utiliser les template strings

Pour utiliser une variable dans une chaine de caractere, on peut utiliser une syntaxe
particulier: les template strings.

Pour les utiliser, on entoure la chaine de caractere de backticks (AltGr + 7 sur un clavier AZERTY). Et on utilise la syntaxe `${variable}` pour insérer une variable dans la chaine de caractere.

```js
const name = "John";
const age = 42;

// "Bonjour John, tu as 42 ans"
const message = "Bonjour " + name + ", tu as " + age + " ans";
const messageAvecTemplateString = `Bonjour ${name}, tu as ${age} ans`;
```

## Utiliser les datasets

Il est possible de définir des attributs personnalisés sur les balises HTML. Ces attributs sont appelés des datasets. Ils doivent commencer par
`data-` et peuvent contenir des tirets.

```html
<div id="exemple" data-couleur="green"></div>
```

Grace a cela, il est ensuite possible de venir lire la valeur de cet attribut en utilisant la propriété `dataset` de l'élément HTML.

```js
const exemple = document.getElementById("exemple");
const couleur = exemple.dataset.couleur; // "green"
```

## Savoir utiliser le forEach (et au passage les fonction fleché)

En javascript, on as tres souvent besoin de parcourir un **tableau** pour effectuer une action sur chaque élément. Pour cela, on peut utiliser la méthode `forEach` des tableaux.

Ancienne methode

```js
const fruits = ["pomme", "banane", "poire"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

Nouvelle methode avec le forEach

```js
const fruits = ["pomme", "banane", "poire"];

// Affiche chaque fruit dans la console
fruits.forEach(function (valeur, index) {
  console.log("valeur ", valeur); // pomme
  console.log("index ", index); // 0
});
```

La fonction qui est déclaré dans le forEach est une fonction dite anonyme. C'est a dire qu'elle n'as pas de nom et ne peut pas etre utiliser en dehors
du forEach.

Cette fonction prend en paramettre 2 arguments : la valeur de l'élément courant et l'index de l'élément courant.

## Nouvelle regle: comment choisir entre forEach, for et while

- Si je suis en train de parcourir les elements d'un tableau : `forEach`
- Si ce n'est pas un tableau et que je ne sais pas combien de fois je vais itéré : `while`
- Si ce n'est pas un tableau et que je sais a l'avance combien de fois je vais itété : `for`
- Dans tout les cas toutes ces methodes sont équivalente, c'est une question de praticité.
