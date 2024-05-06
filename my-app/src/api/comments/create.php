<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require_once '../config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $userID = $data['userID'];
    $comment = $data['comment'];
    $postLink = $data['postLink'];

    # Check userID
    if (empty($userID)) {
        echo json_encode(['status' => 'error', 'message' => 'Please enter your userID']);
        return;
    }

    # Check comment
    if (empty($comment)) {
        echo json_encode(['status' => 'error', 'message' => 'Please enter your comment']);
        return;
    }

    # Check postLink
    if (empty($postLink)) {
        echo json_encode(['status' => 'error', 'message' => 'Please enter your postLink']);
        return;
    }

    $sql = "INSERT INTO comments (userID, comment, postLink) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('iss', $userID, $comment, $postLink);
    $stmt->execute();

    echo json_encode(['status' => 'success', 'message' => 'Comment created successfully']);

    $stmt->close();
    $conn->close();
}