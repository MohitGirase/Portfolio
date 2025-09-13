// Initialize EmailJS
(function() {
    emailjs.init("TnXMtLMrSLiWigUNy"); // Replace with your EmailJS public key
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Send form data
    emailjs.sendForm("service_cot4zq5", "template_g7aiqiq", this)
        .then(function() {
            // Show success message
            document.getElementById("successMessage").style.display = "block";

            // Reset form fields
            document.getElementById("contactForm").reset();
        }, function(error) {
            alert("❌ Failed to send message. Please try again.");
            console.error("EmailJS Error:", error);
        });
});
