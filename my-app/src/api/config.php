<?php 
function loadEnvironmentVariables($filePath)
{
    if (!file_exists($filePath)) {
        throw new Exception('.env file does not exist');
    }

    $lines = file($filePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (str_contains($line, '=')) {
            list($name, $value) = explode('=', $line, 2);
            putenv("$name=$value");
        }
    }
}

# Load environment variables
# You need to change the path to the .env file according to your project
loadEnvironmentVariables('../.env');

# Load environment variables
$host = getenv('MYSQL_HOST');
$username = getenv('MYSQL_USER');
$password = getenv('MYSQL_PASSWORD');
$database = getenv('MYSQL_DATABASE');
$port = getenv('MYSQL_PORT');

# Create a connection
$conn = new mysqli($host, $username, $password, $database, $port);

# Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

# Create the users table if it does not exist
$sql = "CREATE TABLE IF NOT EXISTS users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    email VARCHAR(50),
    phone VARCHAR(15),
    birthdate DATE,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

mysqli_query($conn, $sql);

// Create product table
$sql = "CREATE TABLE IF NOT EXISTS products (
    productID INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    artist VARCHAR(30) NOT NULL,
    genre VARCHAR(30) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price FLOAT(6) NOT NULL,
    status VARCHAR(10) NOT NULL,
    image VARCHAR(255) NOT NULL,
)"; 
mysqli_query($conn, $sql);
?>