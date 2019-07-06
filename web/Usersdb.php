<?php

require("db.php");

$query = "SELECT * FROM users";
$result = mysqli_query($mysqli, $query);
while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) 
{
$data_c[] = array(
'id' => $row['id'],
'name' => $row['name'],
'surname' => $row['surname'],
'patronymic' => $row['patronymic'],
'email' => $row['email']
);
}

$myData = array('myInventory' => $data_c);
$d = json_encode($myData);
echo $d;

?>