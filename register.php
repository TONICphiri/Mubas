<?php
session_start();

// Database configuration
$servername = "localhost";
$username = "root"; // Default XAMPP username
$password = ""; // Default XAMPP password
$dbname = "mubas"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Sanitize and validate input data
    $firstname = $conn->real_escape_string($_POST['firstname']);
    $lastname = $conn->real_escape_string($_POST['lastname']);
    $gender = $conn->real_escape_string($_POST['gender']);
    $email = $conn->real_escape_string($_POST['email']);
    $password = password_hash($conn->real_escape_string($_POST['password']), PASSWORD_DEFAULT); // Hash password
    $phone_number = $conn->real_escape_string($_POST['phone']);
    $user = $conn->real_escape_string($_POST['user']); // User role

    // Prepare the SQL statement with placeholders
    $stmt = $conn->prepare("INSERT INTO registration (firstname, lastname, gender, email, password, phone, user) VALUES (?, ?, ?, ?, ?, ?, ?)");

    // Bind parameters to the placeholders
    $stmt->bind_param("sssssss", $firstname, $lastname, $gender, $email, $password, $phone_number, $user);

    // Execute the statement and check for errors
    if ($stmt->execute()) {
        echo "New record created successfully";
        header("Location: login.html");
        exit(); // Ensure no further code is executed after redirection
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement
    $stmt->close();
}

// Close the connection
$conn->close();
?>
