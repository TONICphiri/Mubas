// Ensure EmailJS script is included in your HTML before this script
document.addEventListener('DOMContentLoaded', (event) => {
    const btn = document.getElementById('button');

    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        btn.value = 'Sending...'; // Update button text to indicate sending

        const serviceID = 'default_service'; // Replace with your actual service ID
        const templateID = 'template_9o70amq'; // Replace with your actual template ID

        // Send form data using EmailJS
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email'; // Reset button text
                alert('Sent!'); // Notify user of successful send
            }, (err) => {
                btn.value = 'Send Email'; // Reset button text
                alert('Failed to send email. Please try again.'); // Notify user of failure
                console.error('Error:', err); // Log the error for debugging
            });
    });
});
