<?php
// Start session
session_start();

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mubas";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get email and password from form
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Sanitize input
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);

    // Prepare SQL to check if email exists in the registration table
    $sql = "SELECT * FROM registration WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if email exists
    if ($result->num_rows > 0) {
        // Fetch user data
        $user = $result->fetch_assoc();
        $hashed_password = $user['password'];
        $user_role = $user['user'];  // Using 'user' as the column name for user role

        // Verify the password
        if (password_verify($password, $hashed_password)) {
            // Insert data into the login table
            $insert_sql = "INSERT INTO login (email, user, password) VALUES (?, ?, ?)";
            $insert_stmt = $conn->prepare($insert_sql);
            $insert_stmt->bind_param("sss", $email, $user_role, $hashed_password);
            $insert_stmt->execute();

            // Set session variables
            $_SESSION['email'] = $email;
            $_SESSION['user-role'] = $user_role;

            // Redirect based on user role
            if ($email === 'phiriadam@admin.com') {
                header("Location: admin.html");
                exit();
            } elseif ($user_role === 'student') {
                header("Location: home.html");
                exit();
            }
        } else {
            // Incorrect password
            echo "Invalid password.";
        }
    } else {
        // No user found with that email
        echo "No account found with that email.";
    }
    
    // Close statement and connection
    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request method.";
}
?>
