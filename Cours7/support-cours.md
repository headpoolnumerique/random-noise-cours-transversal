
# 🌟 Atelier Introduction à HTML, CSS, JavaScript et GitHub

À la fin de l’atelier, vous saurez :
✅ Créer une page web simple en HTML, CSS et JavaScript  
✅ Comprendre le rôle de chaque langage  
✅ Utiliser Visual Studio Code (VS Code) pour coder  
✅ Publier votre page sur GitHub Pages

---

## 💻 Partie 1 : Installation (10 min)

**Installer Visual Studio Code**  
→ https://code.visualstudio.com/

**Créer un compte GitHub**  
→ https://github.com/

**Télécharger le sketch P5**  
→ File > Download

---

## 🏗 Partie 2 : HTML (15 min)

**Renommer le dossier téléchargé**  
**Ouvrir le dossier à l’aide de Visual Studio Code**  
Le code est le suivant :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.11.5/lib/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.3/addons/p5.sound.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />
  </head>
  <body>
    <main>
    </main>
    <script src="sketch.js"></script>
  </body>
</html>
```


Pour lancer le serveur, il faut installer une application de serveur local :
→ Extensions > Live server

👉 Plus d’information sur la syntaxe de HTML :
https://www.w3schools.com/html/

## 🎨 Partie 3 : CSS (15 min)
Dans le fichier style.css, ajouter quelques styles :

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    text-align: center;
}
h1 {
    color: #007acc;
}
button {
    padding: 10px 20px;
    background-color: #007acc;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
button:hover {
    background-color: #005f99;
}
```

👉 Plus d’information sur la syntaxe de CSS :
https://www.w3schools.com/css/

## ⚙️ Partie 4 : JavaScript (10 min)
Ici, créer un fichier script.js
Lier le JS au HTML (juste avant </body>) :

```js
<script src="script.js"></script>
```
Ajouter ce code :

```js
document.getElementById('bouton').addEventListener('click', function() {
    alert('Bravo, tu as cliqué le bouton !');
});
```

## 🌍 Partie 5 : Mise en ligne avec GitHub Pages (10 min)
Créer un nouveau dépôt sur GitHub :
→ New > site public > Create a repository

Mettre en ligne le code :
→ Quick setup > uploading an existing file
⚠️ Attention : il ne doit pas y avoir de sous-dossier

Ajouter un commentaire (commit) pour le versionnage :
→ Quick setup > uploading an existing file

Activer la fonctionnalité de GitHub Pages :
→ Settings > Pages > Build from branch: Main >

Attendre que le site soit “construit”, puis accéder :
```
→ https:// + nom du profil Github + .github.io/ + Nom du repository
```
