<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");  

require_once '../addProduct.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT productID, name, artist, genre, price, image, status FROM products";

    $result = $conn->query($sql);

    $products = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $products[] = $row;
        }
    }

    echo json_encode($products);

    $conn->close();
}