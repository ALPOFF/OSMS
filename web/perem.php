<?php

$file = 'chartvar.txt';
$sgnl= $_POST['sgnl'];
echo $sgnl;
if ($sgnl == 1) {
file_put_contents($file, "");
	}

$k = 0;
$hhh = "";

require("db.php");

$jarr1 = "https://www.n2yo.com/sat/instant-tracking.php?s=";
$jarr2 = "&hlat=54.69875&hlng=44.86678&d=300&r=733798985955.987&tz=GMT+03:00&O=n2yocom&rnd_str=47aabd4a160322cfe29ff02ceb58f9c5&callback=";

for ($i = 1; $i <= 12; $i++)
{	



	$id = 1;
	$maxid = "SELECT MAX(id) FROM satpos";
	if ($id > $maxid )   {
	$jarrfull = $jarr1.$i.$jarr2;

$jarrend = curl_init($jarrfull);

curl_setopt($jarrend, CURLOPT_RETURNTRANSFER, true);
curl_setopt($jarrend, CURLOPT_FOLLOWLOCATION, true);

curl_setopt($jarrend, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($jarrend, CURLOPT_SSL_VERIFYPEER, false);

curl_setopt($jarrend, CURLOPT_COOKIEJAR, 'cook.txt');
curl_setopt($jarrend, CURLOPT_COOKIEFILE, 'cook.txt');

$html = curl_exec ($jarrend);

$data =json_decode($html, true);

$prm = explode("|", $data['0']['pos']['1']['d']);

 
	
 
	$x = $prm[0];
	$y = $prm[1];
	$z = $prm[6];
	$sp = $prm[7];



 
		
	$latitude = "latitude".$k;
	$longitude = "longitude".$k;
	$altitude = "altitude".$k;
	$speed = "speed".$k;
 

 

	if(isset($x) && isset($y) && isset($z) && isset($sp)) {
 
			$query3 = "INSERT INTO `satpos` (`id`,`latitude0`, `longitude0`, `altitude0`, `speed0`) VALUES ($i, $x, $y, $z, $sp)";

$query2 = "UPDATE `satpos` SET `speed0` = '$sp', `latitude0` = '$x', `longitude0` = '$y', `altitude0` = '$z'  WHERE `satpos`.`id` = $i";
	mysqli_query($mysqli, $query2);


/*	$hhh .= "`$x`, `$y`, `$z`, `$sp`";
	$hhh .= ",";
	$llas .= "`$latitude`, `$longitude`, `$altitude`, `$speed`";
	$llas .= ",";*/
	
	
	mysqli_query($mysqli, $query3); 
}

else {


		$query3 = "INSERT INTO `satpos` (`id`, `latitude0`, `longitude0`, `altitude0`, `speed0`) VALUES ($i, 0, 0, 0, 0)";
		mysqli_query($mysqli, $query3); 
}




	


/*else 
{		$query3 = "INSERT INTO `satpos` (`$latitude`, `$longitude`, `$altitude`, `$speed`) VALUES (0, 0, 0, 0)";
 
		mysqli_query($mysqli, $query3); 
}*/

	
			/*$hhh .= "`$x`, `$y`, `$z`, `$sp`";*/
		

	$k++;
 
														}

						} 

						/*$firstpart = "INSERT INTO `satpos` (";
						$secondpart = substr($llas, 0, -1);
						$thirdpart = ") VALUES (";
						$forthpart = substr($hhh, 0, -1);
						$lastpart = ")";
						$query3 = $firstpart.$secondpart.$thirdpart.$forthpart.$lastpart;
						echo $query3;
						mysqli_query($mysqli, $query3);*/

						

 
						//echo $llas;

						//echo $hhh;
























/*  $query3 = "INSERT INTO `satpos` (`latitude0`, `longitude0`, `altitude0`, `speed0`, `latitude1`, `longitude1`, `altitude1`, `speed1`, `latitude2`, `longitude2`, `altitude2`, `speed2`, `latitude3`, `longitude3`, `altitude3`, `speed3`, `latitude4`, `longitude4`, `altitude4`, `speed4`) VALUES (1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)";
mysqli_query($mysqli, $query3); */

$key0= $_POST['number0'];
$key1= $_POST['number1'];
$key2= $_POST['number2'];
$key3= $_POST['number3'];
$key4= $_POST['number4'];


$current = file_get_contents($file);
$current .= $key0." ".$key1." ".$key2." ".$key3." ".$key4;




file_put_contents($file, $current);

 

$strchisel = file_get_contents('variables.txt', FALSE, NULL, 0, 10);
 
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




$query = "SELECT * FROM satpos";
$result = mysqli_query($mysqli, $query);
while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) 
{
$data_c[] = array(
'altitude0' => $row['altitude0'],
'latitude0' => $row['latitude0'],
'longitude0' => $row['longitude0'],
'speed0' => $row['speed0'],
);
}


for ($j = 0; $j < 5; $j++) 
{

$key = 'key'.$j;
if ($arrend[$j] != null)
{
	$choosearr[$key] = $arrend[$j];
}
else
{
	$choosearr[$key] = 1;
}


}

/*for ($j = 0; $j < $pop; $j++) 
{

$key = 'key'.$j;
$choosearr[$key] = $arrend[$j];

}*/

/*$choosearr[key0] = $arrend[0];
$choosearr[key1] = $arrend[1];
$choosearr[key2] = $arrend[2];
$choosearr[key3] = $arrend[3];
$choosearr[key4] = $arrend[4];*/

$choosearr[lngth] = $pop;

array_push($data_c, $choosearr);


$myData = array('satpos' => $data_c);
$d = json_encode($myData);
echo $d;




?>