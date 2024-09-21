<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get form input
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Sanitize inputs
    $name = htmlspecialchars($name);
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($message);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<p class='error'>Invalid email format.</p>";
        exit;
    }

    // Recipient email
    $to = "phiritonic550@gmail.com";
    
    // Subject
    $subject = "New Contact Message from " . $name;

    // Message body
    $body = "You have received a new message from your contact form.\n\n" .
            "Name: " . $name . "\n" .
            "Email: " . $email . "\n\n" .
            "Message:\n" . $message;

    // Headers
    $headers = "From: " . $email;

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "<p class='success'>Message sent successfully! We will get back to you soon.</p>";
    } else {
        echo "<p class='error'>Failed to send the message. Please try again later.</p>";
    }
} else {
    echo "<p class='error'>Invalid request method.</p>";
}
?>
