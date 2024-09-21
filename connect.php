<?php
session_start();
$frstname = $_POST['frstname'];
$lastname = $_POST['lastname'];
$gender = $_POST['gender'];
$email = $_POST['email'];
$password = $_POST['password'];
$number = $_POST['number'];

//connect to database.
$conn = new mysqli('localhost','root','','mubas_private_hostel_finder');
if($conn->conn->connect_error(){
	die('Connection Failed : ' $conn->connect_error);
}else{
     $stmt = $conn->prepare("insert into registration(frstname, lastname, email, password, gender,number) values(?,?,?,?,?,?)");
     $stmt->bind_param("sssssi", $frstname, $lastname, $gender, $email, $password, $number);
     $stmt->execute();
     echo "registration successfully....";
     $stmt->close();
     $conn->close();
}

?>