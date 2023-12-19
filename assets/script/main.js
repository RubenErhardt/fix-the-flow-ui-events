let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

document.querySelectorAll('section a').forEach(function(link) {
  //queryselectorall betekend dat die alles selecteerd, ('section a') betekend dus dat die alle section a's selecteerd
  //for elke a add je een functie
  link.addEventListener('click', function() {
    //die functie is een click functie en wat doet de functie
  // wanneer de functie click is toggle de class clicked in css
    link.classList.toggle('clicked');
  });
});

document.querySelectorAll('section a').forEach(function(link) {
  //hier precies hetzelfde als boven maar dan de dblclick functie
  link.addEventListener('dblclick', function() {
    link.classList.toggle('dbclicked');
  });
});

// Dit is een JavaScript-functie met de naam random_bg_color die een willekeurige RGB-kleur genereert.
function random_bg_color() {
  // Declareren van variabelen x, y en z om de RGB-componenten op te slaan.
  var x = Math.floor(Math.random() * 256); // Willekeurig getal voor de rode component.
  var y = Math.floor(Math.random() * 256); // Willekeurig getal voor de groene component.
  var z = Math.floor(Math.random() * 256); // Willekeurig getal voor de blauwe component.

  // Een string genereren in de vorm "rgb(x, y, z)" om de RGB-kleur te vertegenwoordigen.
  var rgbColorString = "rgb(" + x + "," + y + "," + z + ")";

  // De resulterende RGB-kleurstring returnen.
  return rgbColorString;
}

// Dus, kort samengevat, deze functie geeft elke keer dat deze wordt opgeroepen een willekeurige RGB-kleur terug in de vorm van een string.
// Deze kleur kan dan bijvoorbeeld worden gebruikt om de achtergrondkleur van een element op een webpagina te wijzigen.


document.querySelectorAll('section a').forEach(function(link) {
  //dan adden we weer een queryselectorall
  link.addEventListener('keydown', function() {
    //keydown functie adden
    link.style.backgroundColor = random_bg_color();
    //met deze zorg je ervoor dat de achtergrond van button de een random_bg_color die ik zojuist hierboven heb gemaakt
  });
});

var mouseoverGrow = document.querySelector('#user');

mouseoverGrow.addEventListener('mouseover', function () {
  // Voeg de klasse 'grow' toe die de animatie activeert vanuit de CSS
  mouseoverGrow.classList.add('grow');

  // Stel een timer in om de klasse 'grow' na 500 milliseconden te verwijderen
  setTimeout(function () {
    mouseoverGrow.classList.remove('grow');
  }, 500); 
});

  // Voeg een click event listener toe aan de "rareButton"
  var rareButton = document.querySelector('#rareButton');
  rareButton.addEventListener('click', function() {
    // Roep de rare functie aan wanneer er op de knop wordt geklikt
    voerRareFunctieUit();
  });

  // Definieer de rare functie
  function voerRareFunctieUit() {
    // Voeg tekst toe aan de pagina
    var tekstElement = document.createElement('div');
    tekstElement.textContent = '🤪 Iets raars gebeurt! 🤪';

    // Voeg het tekstelement toe aan de body
    document.body.appendChild(tekstElement);

    // Laat de tekst op een willekeurige manier bewegen
    var bewegingX = Math.random() * 50 - 25; // Willekeurige horizontale beweging tussen -25 en 25 pixels
    var bewegingY = Math.random() * 50 - 25; // Willekeurige verticale beweging tussen -25 en 25 pixels

    tekstElement.style.transform = 'translate(' + bewegingX + 'px, ' + bewegingY + 'px)';

    // Voeg wat extra gekkigheid toe
    setTimeout(function() {
      document.body.removeChild(tekstElement); // Verwijder de tekst na een paar seconden
    }, 2000); 
  }


//uitleggen 1.4.3