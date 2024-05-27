document
  .getElementById("secretForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const secretCode = document.getElementById("secretCode").value;
    const correctCode = "TT25062308.";
    const errorMessage = document.getElementById("errorMessage");

    if (secretCode === correctCode) {
      window.location.href = "home.html";
    } else {
      errorMessage.textContent = "Arey Cutu ye galat code hai";
    }
  });
