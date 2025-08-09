/*
    Student Name: Your Name
    File Name: Script.js
    Date: Today's Date
 */

// Hamberger menu Function 

function hamburger(){
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");

    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}

// Global variables

var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc");

// Function to display the burpees example video
function burpees() {
    videoSource.src = "media/burpees.mp4";
    video.style.display = "block";
    video.load();
}

function plank() {
    videoSource.src = "media/plank.mp4";
    video.style.display = "block";
    video.load();
}

function mountain() {
    videoSource.src = "media/mc.mp4";
    video.style.display = "block";
    video.load();
}

// Function to display a promo code
function discount() {
    var promo = document.getElementById("special");
    promo.firstChild.nodeValue = "Promo Code: D25START";
    promo.style.color = "#ff0000";
    promo.style.fontSize = "2em";
}


// Validation simple avant ouverture WhatsApp et envoi message

document.getElementById("whatsappForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Empêche l'envoi normal du formulaire

    // Fonction simple pour nettoyer les inputs (supprime < et >)
    function sanitize(input) {
        return input.replace(/[<>]/g, "");
    }

    let phoneNumber = "2250779134185"; // Numéro WhatsApp au format international

    let firstName = sanitize(document.getElementById("fName").value.trim());
    let lastName = sanitize(document.getElementById("lName").value.trim());
    let email = sanitize(document.getElementById("email").value.trim());
    let phone = sanitize(document.getElementById("phone").value.trim());
    let promo = sanitize(document.getElementById("promo").value.trim());
    let questions = sanitize(document.getElementById("questions").value.trim());
    let referralSource = sanitize(document.getElementById("reference").value.trim());

    // Validation Email simple
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Validation téléphone (chiffres, espaces, +, -, parenthèses)
    let phonePattern = /^[0-9+\-\s()]+$/;

    if (!firstName || !lastName || !email || !phone) {
        alert("Merci de remplir tous les champs obligatoires.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Merci de saisir un email valide.");
        return;
    }

    if (!phonePattern.test(phone)) {
        alert("Merci de saisir un numéro de téléphone valide.");
        return;
    }

    // Récupération des checkbox cochées
    let additionalInfo = [];
    if (document.getElementById("grpfit").checked) {
        additionalInfo.push(document.getElementById("grpfit").value);
    }
    if (document.getElementById("prtrain").checked) {
        additionalInfo.push(document.getElementById("prtrain").value);
    }
    if (document.getElementById("nutr").checked) {
        additionalInfo.push(document.getElementById("nutr").value);
    }

    // Construire le message WhatsApp
    let message = `Nouvelle demande de contact :%0A` +
                  `Nom: ${firstName} ${lastName}%0A` +
                  `Email: ${email}%0A` +
                  `Téléphone: ${phone}%0A` +
                  `Questions: ${questions || "Aucune"}%0A` +
                  `Infos supplémentaires: ${additionalInfo.join(", ") || "Aucune"}%0A` +
                  `Source: ${referralSource}%0A` +
                  `Promo: ${promo || "Aucun"}`;

    let url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");

    // Reset form après envoi
    document.getElementById("whatsappForm").reset();
});
