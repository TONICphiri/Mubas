<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mubas";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connection successful!";
}
$conn->close();
?>
