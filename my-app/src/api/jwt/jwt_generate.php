<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

const JWT_SECRET = 'Masamune@2024'; // Change this to your secret key

function base64UrlEncode($data) {
    $b64 = base64_encode($data);
    $url = strtr($b64, '+/', '-_');
    return rtrim($url, '=');
}

function generate_jwt($user_id, $role) {
    $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);
    $payload = json_encode(['user_id' => $user_id, 'role' => $role, 'exp' => time() + 3600]);
    $base64UrlHeader = base64UrlEncode($header);
    $base64UrlPayload = base64UrlEncode($payload);
    $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, JWT_SECRET, true);
    $base64UrlSignature = base64UrlEncode($signature);
    $jwt = $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;
    return $jwt;
}

?>