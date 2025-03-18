document.getElementById("contactForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Por favor, completa todos los campos.");
        event.preventDefault(); // Detiene el envío del formulario si los campos están vacíos
    } else {
        alert("Formulario enviado correctamente.");
    }
});
