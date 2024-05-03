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
loadEnvironmentVariables('.env');

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

# Delete the users table if it exists
$sql = "DROP TABLE IF EXISTS users";

mysqli_query($conn, $sql);

# Close the connection
$conn->close();

echo json_encode(['message' => 'Table deleted successfully']);
?>