<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require_once '../config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $id = $data['id'];
    $username = $data['username'];
    $firstname = $data['fName'];
    $lastname = $data['lName'];
    $email = $data['email'];
    $phone = $data['phone'];
    $birthdate = $data['birthdate'];

    $sql = "UPDATE users SET username = ?, firstname = ?, lastname = ?, email = ?, phone = ?, birthdate = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssssi", $username, $firstname, $lastname, $email, $phone, $birthdate, $id);

    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'User updated successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to update user']);
    }

}

?>
