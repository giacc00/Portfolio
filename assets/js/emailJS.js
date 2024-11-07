document.getElementById('myForm').addEventListener('submit', sendMail);

function sendMail(e) {
    e.preventDefault();

    // Initialize EmailJS (You only need to do this once)
    if (!emailjs._initialized) {
        emailjs.init('2LY2z-FY32A4gIvoa');  // Your public key
    }

    // Get form data
    let params = {
        name: document.getElementById("nome").value,
        mail: document.getElementById("email").value,
        text: document.getElementById("text").value,
        message: document.getElementById("message").value,
    };

    // Define EmailJS service and template IDs
    const serviceID = "service_fwd7ees";
    const templateID = "template_d17mxer";

    // Send email
    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            // Clear form fields
            document.getElementById("nome").value = "";
            document.getElementById("email").value = "";
            document.getElementById("text").value = "";
            document.getElementById("message").value = "";

            // Success alert
            console.log(res);
            alert('Email inviata con successo!');
        })
        .catch((err) => {
            // Handle error
            console.error('Email send failed:', err);
            alert('Si è verificato un errore durante l\'invio dell\'email.');
        });
}
