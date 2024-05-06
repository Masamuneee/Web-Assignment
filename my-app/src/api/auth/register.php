<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require_once '../config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $firstname = $data['fName'];
    $lastname = $data['lName'];
    $email = $data['email'];
    $phone = $data['phone'];
    $birthdate = $data['birthdate'];
    $username = $data['username'];
    $password = $data['password'];

    # Check firstname and lastname
    if (empty($firstname) || empty($lastname)) {
        echo json_encode(['status' => 'error', 'message' => 'Please enter your firstname and lastname']);
        return;
    }

    # Check email
    if (empty($email)) {
        echo json_encode(['status' => 'error', 'message' => 'Please enter your email']);
        return;
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['status' => 'error', 'message' => 'Please enter a valid email']);
        return;
    }

    # Check phone
    if (empty($phone)) {
        echo json_encode(['status' => 'error', 'message' => 'Please enter your phone number']);
        return;
    }

    # Check birthdate
    if (empty($birthdate)) {
        echo json_encode(['status' => 'error', 'message' => 'Please enter your birthdate']);
        return;
    }

    # Check username
    if (empty($username)) {
        echo json_encode(['status' => 'error', 'message' => 'Please enter your username']);
        return;
    }

    # Check password
    if (empty($password)) {
        echo json_encode(['status' => 'error', 'message' => 'Please enter your password']);
        return;
    }

    # Check if the username already exists
    $sql = "SELECT * FROM users WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('s', $username);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    if ($user) {
        echo json_encode(['status' => 'error', 'message' => 'Username already exists']);
        return;
    }
    
    # Insert user into the database
    $sql = "INSERT INTO users (firstname, lastname, email, phone, birthdate, username, password, is_admin) VALUES (?, ?, ?, ?, ?, ?, ?, 0)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssss", $firstname, $lastname, $email, $phone, $birthdate, $username, $password);

    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'User registered successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Error: ' . $sql . '<br>' . $conn->error]);
    }

    $conn->close();
}

?>