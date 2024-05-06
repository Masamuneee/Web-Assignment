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
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    is_admin BOOLEAN DEFAULT FALSE
)";

# Create the COMMENTS table if it does not exist
$sqlCOMMENT = "CREATE TABLE IF NOT EXISTS comments (
    commentID INT(6) UNSIGNED AUTO_INCREMENT,
    userID INT(6) UNSIGNED,
    comment VARCHAR(255) NOT NULL,
    postLink VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (commentID),
    FOREIGN KEY (userID) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
)";

mysqli_query($conn, $sql);
mysqli_query($conn, $sqlCOMMENT);

# Create admin user if it does not exist
$sql = "SELECT * FROM users WHERE username = 'admin'";
$result = $conn->query($sql);

if ($result->num_rows === 0) {
    $firstname = 'Pham';
    $lastname = 'Quang Minh';
    $email = 'quangminh@gmail.com';
    $phone = '0123456789';
    $birthdate = '1999-01-01';
    $username = 'admin';
    $password = 'admin';
    $is_admin = 1;
    $sql = "INSERT INTO users (firstname, lastname, email, phone, birthdate, username, password, is_admin) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssssi", $firstname, $lastname, $email, $phone, $birthdate, $username, $password, $is_admin);
    $stmt->execute();
}
?>