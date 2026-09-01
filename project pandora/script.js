const passwordInput = document.getElementById("password");
const unlockButton = document.getElementById("unlockButton");
const errorMessage = document.getElementById("errorMessage");

unlockButton.addEventListener("click", function () {

    const password = passwordInput.value;

    if (password === "762549") {

        errorMessage.textContent = "";

        window.location.href = "secret.html";

    } else {

        errorMessage.textContent = "วันเกิดไม่ถูกนะ ลองอีกครั้ง 💗";

    }

});