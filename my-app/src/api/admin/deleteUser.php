<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require_once '../config.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $id = $_GET['id'];

    if (empty($id)) {
        echo json_encode(['status' => 'error', 'message' => 'Please provide user id']);
        return;
    }

    if (!is_numeric($id)) {
        echo json_encode(['status' => 'error', 'message' => 'Invalid user id']);
        return;
    }

    if ($id < 1) {
        echo json_encode(['status' => 'error', 'message' => 'Invalid user id']);
        return;
    }

    if ($id == 1) {
        echo json_encode(['status' => 'error', 'message' => 'You cannot delete the admin user']);
        return;
    }

    $sql = "SELECT id FROM users WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 0) {
        echo json_encode(['status' => 'error', 'message' => 'User not found']);
    } else {
        // If the id exists, then delete the record
        $sql = "DELETE FROM users WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);

        if ($stmt->execute()) {
            echo json_encode(['status' => 'success', 'message' => 'User deleted successfully']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Failed to delete user']);
        }
    }

    $stmt->close();
    $conn->close();
}