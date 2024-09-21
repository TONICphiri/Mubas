<?php
session_start();
// Connection to the database
include 'db_connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    $type = $_POST['type']; // 'student' or 'hostel'

    if ($type === 'student') {
        $sql = "DELETE FROM students WHERE id = ?";
    } else {
        $sql = "DELETE FROM hostels WHERE id = ?";
    }

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        echo "Record deleted successfully";
    } else {
        echo "Error deleting record: " . $conn->error;
    }

    $stmt->close();
    $conn->close();
}
?>
