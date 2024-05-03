<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");  

require_once '../config.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT id, firstname, lastname, email, phone, username, created_at FROM users";

    $result = $conn->query($sql);

    $users = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $users[] = $row;
        }
    }

    echo json_encode($users);

    $conn->close();
}