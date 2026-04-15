function acheter(pack) {
    alert("Tu veux acheter : " + pack);

    // Exemple redirection WhatsApp
    let numero = "261XXXXXXXXX"; // remplace par ton numéro
    let message = "Bonjour, je veux acheter " + pack;

    let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}
