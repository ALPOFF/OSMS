<?php 

$servername = "localhost";
$database = "diplom";
$admin = "root";
$pass = "";

$mysqli = new mysqli($servername, $admin, $pass, $database);

/* check connection */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
?>