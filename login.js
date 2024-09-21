document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const formData = new FormData(this); // Collect the form data

    fetch('login.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse the response as JSON
    })
    .then(data => {
        if (data.status === "success") {
            alert(data.message); // Show success message
            window.location.href = data.redirect; // Redirect to the appropriate page (admin or student)
        } else {
            alert(data.message); // Show the error message
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during login. Please check your network or contact support.');
    });
});
