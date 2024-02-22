const photoFrame = document.getElementById('photoFrame');
const photo = document.getElementById('photo');
const caption = document.getElementById('caption');
const changoButton = document.getElementById('changoButton');

changoButton.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  const colors = ['red', 'yellow', 'green'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  photoFrame.style.borderColor = randomColor;
  caption.style.backgroundColor = randomColor;

  switch (randomColor) {
    case 'red':
      caption.textContent = "TORMENTOSO: ⛈️⛈️⛈️⛈️⛈️⛈️⛈️⛈️ (Fuertes vientos, lluvias intensas, truenos, relámpagos y granizo con alta posibilidad de tornados)";
      break;
    case 'yellow':
      caption.textContent = "NUBLADO: ☁️☁️☁️☁️☁️☁️☁️☁️ (Cielo cubierto de nubes grises, con posibilidad de lluvias, lo que da como resultado una atmósfera opaca y gris)";
      break;
    case 'green':
      caption.textContent = "SOLEADO: ☀️☀️☀️☀️☀️☀️☀️☀️ (Cielo despejado, temperatura super agradable, humedad del 0%. Inmejorables condiciones climaticas)";
      break;
    default:
      caption.textContent = "XXX";
  }
}
