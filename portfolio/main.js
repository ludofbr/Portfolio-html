document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
  });
document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("-fCdwqk3H56TaMSsD");  // Votre clé publique EmailJS

    var contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Collecter les données du formulaire
        var formData = {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "message": contactForm.message.value
        };

        emailjs.send("service_lbrk2uf", "template_7t0uwrt", formData)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showNotification(); // Affiche la notification de succès
            contactForm.reset(); // Efface les champs du formulaire
        }, function(error) {
            console.log('FAILED...', error);
            alert('Erreur lors de l\'envoi du message: ' + error);
        });
    });
});

// Fonction pour afficher la notification
function showNotification() {
    var notification = document.getElementById('notification');
    notification.style.display = "block"; // Afficher la notification
    setTimeout(function() {
        notification.style.display = "none"; // Cacher la notification après 4 secondes
    }, 4000);
}
