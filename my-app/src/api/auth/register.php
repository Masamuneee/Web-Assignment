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
    $birthdate = $data['birthday'];
    $username = $data['username'];
    $password = password_hash($data['password'], PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (firstname, lastname, email, phone, birthdate, username, password) VALUES (?, ?, ?, ?, ?, ?, ?)";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(['message' => 'User registered successfully']);
    } else {
        echo json_encode(['error' => 'User registration failed']);
    }

    $conn->close();
}

?>