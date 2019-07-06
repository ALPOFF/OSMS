<?php 

require("db.php");

$login = $_POST['username'];
$password = $_POST["password"];


$login = $mysqli->real_escape_string($login);
$password = $mysqli->real_escape_string($password);
$sql = "SELECT * FROM users WHERE login='$login' and password='$password'";

$success = false;
$msg = ' ';

if ($resultdb = $mysqli->query($sql)) {

        // determine number of rows result set
        $count = $resultdb->num_rows; 

        // If result matched $login and $password, table row must be 1 row
        if($count==1){ 
                
                $success = true;
                $msg = utf8_encode('Success!');

        } else {
		
                $success = false;
                $msg = utf8_encode('Password or login incorrect');
        }

        /* close result set */
        $resultdb->close();
}

/* close connection */
$mysqli->close();

//JSON encoding
echo json_encode(array(
        "success" => $success,
        "msg" => $msg
)); 
?>