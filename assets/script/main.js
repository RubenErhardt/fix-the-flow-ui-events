let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

document.querySelectorAll('section a').forEach(function(link) {
  link.addEventListener('click', function() {
  
    link.classList.toggle('clicked');
  });
});

document.querySelectorAll('section a').forEach(function(link) {
  link.addEventListener('dblclick', function() {
    link.classList.toggle('dbclicked');
  });
});

function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  return "rgb(" + x + "," + y + "," + z + ")";
}

document.querySelectorAll('section a').forEach(function(link) {
  link.addEventListener('keydown', function() {
    link.style.backgroundColor = random_bg_color();
  });
});

//uitleggen 1.4.3