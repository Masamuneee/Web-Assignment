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

    // Take the id of the last product in the database
    $sql = "SELECT productID FROM products ORDER BY productID DESC LIMIT 1";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($productID);
    $stmt->fetch();
    $stmt->close();

    // Increment the id by 1
    $productID++;

    $sql = "INSERT INTO products (productID, name, artist, genre, description, price, status, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("isssdiss", $productID, $name, $artist, $genre, $description, $price, $status, $image);

    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'Product added successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to add product']);
    }

    $stmt->close();
    $conn->close();

}