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
    $image = $data['image']; // coi lại phần image khai báo đúng chưa
    $status = $data['status'];
    

    $sql = "UPDATE products SET name = ?, artist = ?, genre = ?, price = ?, image = ?, status = ? WHERE productID = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssdss", $name, $artist, $genre, $price, $status, $image);
    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'User updated successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to update product']);
    }

    $stmt->close();
    $conn->close();
}
?>
