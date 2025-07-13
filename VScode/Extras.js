document.getElementById("PizzaSpeed").addEventListener("click", function () {
  const button = this;
  const speedElement = document.getElementById("speedR");
  const originalText = speedElement.textContent;

  // Cambiar el texto y desactivar el botón
  speedElement.textContent = "🔥--------------------------🍕👍🏘️";
  button.disabled = true;

  // Revertir el texto y reactivar el botón después de 1 segundo
  setTimeout(function () {
    speedElement.textContent = originalText;
    button.disabled = false;
  }, 1000);
});

// mas cosas ya no es inservible del todo xd
