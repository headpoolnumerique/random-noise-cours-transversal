# 🌟 HTML, CSS, JavaScript et P5

## Mettre son canvas pleine page:  

Code p5  
Dans le setup -> `createCanvas(windowWidth, windowHeight);`

Pour actualiser le code ->  
 ``` js
function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}
 ```

  
## Créer des liens <nav><div><a>  
  
 ```html
<nav>
	<div><a href="page1.html">Page 1</a></div>
	<div><a href="page2.html">Page 2</a></div>
	<div><a href="page3.html">Page 3</a></div>
</nav>
 ```
  
-> Créer les pages 1, 2, 3 dans le dossier

## Disposer au dessus, en dessous, positionner:  
  
 ```css 
nav{
position: fixed;
z-index: 100;
display: flex;
align-items: center;
justify-content: center;
}
```
  
## Importer des fontes customs  
  
Façon 1: Google Font:

 ```css 
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
 ```
  
Façon 2:  Font-face
 
  ```css 
@font-face {
	 font-family: 'Bebas Neue';
	 src: url('BebasNeue-Regular.ttf') format('truetype');
}

  
nav div a {
	font-family: 'Bebas Neue', Arial Black, sans-serif;
	color: red;
	text-transform: uppercase;
	font-size: 3vw;
	text-decoration: none;
}
```

## Jouer avec des opacités et des filtres d’images et de textes  
  
Voir les filtres ici : https://developer.mozilla.org/en-US/docs/Web/CSS/filter  
  
  ```css 
img {
	width: 50vw;
	position: absolute;
	opacity: 0.4;
	filter:brightness(3)
}
  ```

  
 ## Faire bouger des composantes sur la page (avec `css filter`)  
  
Voir les animations ici: https://www.w3schools.com/css/css3_animations.asp  
  
Img {
	animation: nomAnim 10s infinite;
}

@keyframes nomAnim {
     0% {
         transform: translate(0);
    }
     45% {
         transform: translate(10px, -10px);
    }
     83% {
         transform: translate(50px, 100px);
    }
     to {
         transform: translate(0);
    }
}
 
  
# 🌟 JAVASCRIPT (AVEC P5 ET UNE API)  
  

## Comment faire un fetch d’API (ici, l’API de la station spatiale internationale) dans le p5  
  
  ``` js
// dans le setup:  
fetchISS  
  
function fetchISS() {
    fetch('http://api.open-notify.org/iss-now.json')
        .then(response => response.json())
        .then(data => {
            let ISSLatitude = data.iss_position.latitude;
            let ISSLongitude = data.iss_position.longitude;
            issPosition = {
                lat: ISSLatitude,
                lon: ISSLongitude
            };
           console.log('Données ISS:', issPosition);
           document.getElementById('issInfo').innerText = `Latitude: ${ISSLatitude}, Longitude: ${ISSLongitude}`;

        })

        .catch(error => {

            console.error('Erreur lors de la récupération des données:', error);

        });

}
```
  
  
## Comment afficher le résultant de cette donnée à l’écran par de la syntaxe DOM  
  
 HTML 
```
  <div id="issInfo">Loading ISS data...</div>
```
JS  
  
```
console.log('Données ISS:', issPosition);
// 🟢 Update HTML element outside the canvas
document.getElementById('issInfo').innerText = `Latitude: ${ISSLatitude}, Longitude: ${ISSLongitude}`;  
```
  
Optionnel: il est également possible de changer le pourcentage d’une image:  
  
 ```
let heightPercent = mapValue(ISSLongitude, -180, 180, 10, 100);
document.querySelectorAll('img').style.height = `${heightPercent}%`;  
```
  
## Comment passer la donnée au draw() pour l’utiliser dynamiquement  
  
  ``` 
function draw(){
// 🟢 Ajout : dessiner un cercle à la position ISS si disponible
if (issPosition !== null) {
let x = map(issPosition.lon, -180, 180, 0, width);
let y = map(issPosition.lat, -90, 90, height, 0); // inverser Y pour affichage nord en haut
fill(200, 100, 100);
noStroke();
ellipse(x, y, 20, 20);
}
}
 ```

 
## Mettre à jour la donnée toutes les 10 secondes (attention aux calls)  
  
  ```
  fetchISS(); // appel initial
 ```
  
// 🟢 Ajout : mettre à jour toutes les 10 secondes
 ```
// setInterval(fetchISS, 10000);
 ```