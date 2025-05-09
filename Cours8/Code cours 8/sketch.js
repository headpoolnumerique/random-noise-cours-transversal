let issPosition = null; // Variable globale pour stocker les données ISS

function setup() {
  // Create the canvas

  // Replace the canvas width and size by windowWidth, windowHeight
  createCanvas(windowWidth, windowHeight);

  // Set background to black
  background(0);

  // Set width of the lines
  strokeWeight(10);

  // Set color mode to hue-saturation-brightness (HSB)
  colorMode(HSB);

  // Set screen reader accessible description
  describe('A blank canvas where the user draws by dragging the mouse');

  fetchISS(); // appel initial

  // 🟢 Ajout : mettre à jour toutes les 10 secondes
  // setInterval(fetchISS, 10000);
}

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

function mouseDragged() {
  // Set the color based on the mouse position, and draw a line
  // from the previous position to the current position
  let lineHue = mouseX - mouseY;
  stroke(lineHue, 90, 90);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
