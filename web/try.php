<?php
$file = 'variables.txt';
$sgnl= $_POST['sgnl'];
echo $sgnl;
if ($sgnl == 1) {
file_put_contents($file, "");
	}
/* $data =  json_decode($_POST['number']);
    $dataJson = json_encode($data);
     $key0=$dataJson["staticg"]["id"];
*/
//$keys= $_POST['number'];

//var_dump($key0) ;
//$key0=3;



 

require("db.php");

$jarr = "https://www.n2yo.com/sat/jtest.php?s=";




for ($i = 1; $i <= 12; $i++)
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
	$perem = $oldperem[0];
	//$perem = 0;
	//$perem = rand(5, 15);
	$query3 = "INSERT INTO `satinfo` (`id`, `name`, `period`, `status`, `int_designator`, `perem`) VALUES ('$id', '$name','$period', '$status', '$design', '$perem')";
	mysqli_query($mysqli, $query3);


	$query2 = "UPDATE `satinfo` SET `perem` = '$perem'  WHERE `satinfo`.`id` = $i";
	mysqli_query($mysqli, $query2);
						}
}

/*for ($i = 1; $i <= 6; $i++) 
{	*/
	//$perem = rand(5, 15);
/*	$query = "UPDATE `satinfo` SET `perem` = '$key0' WHERE `satinfo`.`id` = 1;";
	mysqli_query($mysqli, $query);

	$query = "UPDATE `satinfo` SET `perem` = '$key1' WHERE `satinfo`.`id` = 2;";
	mysqli_query($mysqli, $query);

	$query = "UPDATE `satinfo` SET `perem` = '$key2' WHERE `satinfo`.`id` = 3;";
	mysqli_query($mysqli, $query);*/
/*}*/ 


//$key0=4;
/*$key1=3;
$key2=1;*/










$key0= $_POST['number0'];
$key1= $_POST['number1'];
$key2= $_POST['number2'];
$key3= $_POST['number3'];
$key4= $_POST['number4'];
//echo $key0;
//$key0 = 5;



$current = file_get_contents($file);
$current .= $key0." ".$key1." ".$key2." ".$key3." ".$key4;




file_put_contents($file, $current);



$strchisel = file_get_contents('variables.txt', FALSE, NULL, 0, 10);
//$pop = mb_strlen($strchisel);

 $currentexp = explode(" ", $strchisel);

 

$arrl = count($currentexp);
$y = 0;
for ($l=0; $l < $arrl; $l++) { 
	 if ($currentexp[$l] != "") {
	 	$arrend[$y] = $currentexp[$l];
	 	$y++;
 }
}

$pop = count($arrend);
 
 
 
if ($arrend != 0)
{
	$first = "SELECT * FROM `satpos` WHERE `id` in (";
	for ($k=0;$k<$pop;$k++){
		$first .= $arrend[$k].",";
		 
	}
	$firstnew = substr($first, 0, -1);
	$query = $firstnew.")";

 
 
$result = mysqli_query($mysqli, $query);

while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) 
{
$data_c[] = array(
'id' => $row['id'],
'latitude0' => $row['latitude0'],
'longitude0' => $row['longitude0'],
'altitude0' => $row['altitude0'],
'speed0' => $row['speed0']
);
}



$myData = array('staticg' => $data_c);
$d = json_encode($myData);
echo $d;
}




?>