<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require_once '../config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $name = $data['name'];
    $artist = $data['artist'];
    $genre = $data['genre'];
    $description = $data['description'];
    $price = $data['price'];
    $status = $data['status'];
    $image = $data['image'];
    $id = $data['id'];

    $sql = "UPDATE products SET name = ?, artist = ?, genre = ?, description = ?, price = ?, status = ?, image = ? WHERE productID = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssdssi", $name, $artist, $genre, $description, $price, $status, $image, $id);

    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'Product updated successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to update product']);
    }

    $stmt->close();
    $conn->close();
}
