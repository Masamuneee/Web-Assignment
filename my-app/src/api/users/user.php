<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");  

require_once '../config.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['id'])) {
    $id = $_GET['id'];

    $sql = "SELECT id, username FROM users where id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 0) {
        echo json_encode(['status' => 'error', 'message' => 'User not found']);
    } else {
        $user = $result->fetch_assoc();
        echo json_encode($user);
    }

    $conn->close();
}