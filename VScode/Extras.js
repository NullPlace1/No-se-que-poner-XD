document.getElementById("PizzaSpeed").addEventListener("click", function () {
  const button = this;
  const speedElement = document.getElementById("speedR");
  const originalText = speedElement.textContent;

  speedElement.textContent = "🔥--------------------------🍕👍🏘️";
  button.disabled = true;

  setTimeout(() => {
    speedElement.textContent = originalText;
    button.disabled = false;
  }, 1100);
});
