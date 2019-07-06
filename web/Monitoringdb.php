<?php

require("db.php");

$jarr = "https://www.n2yo.com/sat/jtest.php?s=";




for ($i = 1; $i <= 6; $i++)
{	$id = 1;
	$maxid = "SELECT MAX(id) FROM satinfo";
	if ($id > $maxid )   {
	$jarrnew = $jarr.$i;
	//echo $jarrnew."</br>";
	$json_array  = file_get_contents($jarrnew);
	$data =json_decode($json_array, true);
	//echo "ID: ".$data[0]["id"]."</br>"."Design: ".$data[0]["int_designator"]."</br>"."Name: ".$data[0]["name"]."</br>"."Status: ".$data[0]["status"]."</br>"."Period: ".$data[0]["period"];
	//echo "</br>"."</br>";
	$id = $data[0]["id"];
	$design = $data[0]["int_designator"];
	$name = $data[0]["name"];
	$status = $data[0]["status"];
	$period = $data[0]["period"];
	$oldperem = explode("|", $data[0]["pos"]["0"]["d"]);
	//$perem = $oldperem[0];
	$perem = 0;
	//$perem = rand(5, 15);
	$query = "INSERT INTO `satinfo` (`id`, `name`, `period`, `status`, `int_designator`, `perem`) VALUES ('$id', '$name','$period', '$status', '$design', '$perem')";
	mysqli_query($mysqli, $query);
						}
}

//рандом зачения для 
 
/*for ($i = 1; $i <= 6; $i++) 
{	
	$perem = rand(5, 15);
	$query = "UPDATE `satinfo` SET `perem` = '$perem' WHERE `satinfo`.`id` = $i;";
	mysqli_query($mysqli, $query);
}
*/
for ($i = 1; $i <= 6; $i++) 
{	
$id = 1;
	$maxid = "SELECT MAX(id) FROM satinfo";
if ($id > $maxid )   {
									$jarrnew = $jarr.$i;
	//echo $jarrnew."</br>";
	$json_array  = file_get_contents($jarrnew);
	$data =json_decode($json_array, true);
	$oldperem = explode("|", $data[0]["pos"]["0"]["d"]);
	$perem = $oldperem[0];
	$query = "UPDATE `satinfo` SET `perem` = '$perem' WHERE `satinfo`.`id` = $i;";
	mysqli_query($mysqli, $query);
}

}







 
/* $perem = $oldperem[0];
 $query = "UPDATE `satinfo` SET `perem` = '$perem' WHERE `satinfo`.`id` = 5;";
	mysqli_query($mysqli, $query);
*/
/*$perem = rand(5, 15);
	$query = "UPDATE `satinfo` SET `perem` = '$perem' WHERE `satinfo`.`id` = 1;";
	mysqli_query($mysqli, $query);
	$ctr++;
	sleep(5);*/
 

$query = "SELECT * FROM satinfo";
$result = mysqli_query($mysqli, $query);
while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) 
{
$data_c[] = array(
'id' => $row['id'],
'name' => $row['name'],
'period' => $row['period'],
'status' => $row['status'],
'int_designator' => $row['int_designator'],
'perem' => $row['perem']
);
}

$myData = array('satinfo' => $data_c);
$d = json_encode($myData);
echo $d;

?>