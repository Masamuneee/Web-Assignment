<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require_once '../config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $birthdate = $data['birthdate'];
    $email = $data['email'];
    $firstname = $data['fName'];
    $id = $data['id'];
    $lastname = $data['lName'];
    $password = $data['password'];
    $phone = $data['phone'];
    $username = $data['username'];

    $sql = "UPDATE users SET birthdate = ?, email = ?, firstname = ?, lastname = ?, password = ?, phone = ?, username = ? WHERE id = ?";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssssi", $birthdate, $email, $firstname, $lastname, $password, $phone, $username, $id);

    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'User updated successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to update user']);
    }

    $stmt->close();
    $conn->close();
}

?>