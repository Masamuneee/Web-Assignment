<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require_once '../config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $name = $data['name'];
    $artist = $data['artist'];
    $genre = $data['genre'];
    $price = $data['price'];
    $image = $data['image']; // coi lại phần image khai báo đúng chưa
    $status = $data['status'];

    # Check name
    if (empty($name)) {
        echo json_encode(['status' => 'error', 'message' => 'Please enter name']);
        return;
    }

    # Check artist
    if (empty($artist)) {
        echo json_encode(['status' => 'error', 'message' => 'Please enter artist']);
        return;
    }

    # Check genre
    if (empty($genre)) {
        echo json_encode(['status' => 'error', 'message' => 'Please enter genre']);
        return;
    }

    # Check price
    if (empty($price)) {
        echo json_encode(['status' => 'error', 'message' => 'Please enter price']);
        return;
    } elseif (!is_numeric($price)) {
        echo json_encode(['status' => 'error', 'message' => 'Price must be a number']);
        return;
    }

    # Check image
    if (empty($image)) {
        echo json_encode(['status' => 'error', 'message' => 'Please upload image']);
        return;
    }

    # Check status
    if (empty($status)) {
        echo json_encode(['status' => 'error', 'message' => 'Please enter status']);
        return;
    }

    $sql = "INSERT INTO products (name, artist, genre, description, price, status, image) VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssdss", $name, $artist, $genre, $description, $price, $status, $image);

    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'product added successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Error: ' . $sql . '<br>' . $conn->error]);
    }

    $conn->close();
}

?>