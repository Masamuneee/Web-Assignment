<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");  

require_once '../config.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT commentID, userID, comment, postLink, created_at FROM comments";

    $result = $conn->query($sql);

    $comments = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $comments[] = $row;
        }
    }

    echo json_encode($comments);

    $conn->close();
}