<?php
session_start();
$servername = 'localhost';
$username = 'root';
$password = "";
$dbname = 'mubas_private_hostel_finder';

// Connect to database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
}

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$gender = $_POST['gender'];
$email = $_POST['email'];
$password = $_POST['password'];
$number = $_POST['number'];

// Hash the password before storing it
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO registration (firstname, lastname, email, password, gender, number) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssi", $firstname, $lastname, $email, $hashed_password, $gender, $number);

if ($stmt->execute()) {
    echo "Registration successful!";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
