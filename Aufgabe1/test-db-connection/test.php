<?php

$host = 'localhost';
$user = 'root';
$password = '';

//$str = file_get_contents('Datenbanken-II/Aufgabe1/test-db-connection/dbInformation.json');

//$json = json_decode($str, true);

//echo '<pre>' . print_r($json, true) . '<pre>';

//foreach($json as $key => $val) {
//    if (is_array($val)) {
//        echo "$key: \n ";
//    } else {
//        echo "$key => $val \n";
//    }
//}

$con=mysql_connect($host,$user,$password) or die ("Zugriff nicht möglich");

if($con) {
  echo '<h1>Connected to MySQL</h1>';
    // if connected, then select data from db 
    $db = mysql_select_db('Aufgabe1') or die ("Die Datenbankauswahl ist nicht möglich!");
    $abfrage = 'SELECT * FROM Vereine';
    $query = mysql_query($abfrage) or die ("Datenbankabfrage war nicht möglich!");
    
    while($zeile = mysql_fetch_row($query)) {
        for($j = 0; $j < mysql_num_fields($query); $j++) {
            echo $zeile[$j]."|";
        }
        echo '<BR>';
    }
    
    
} else {
   echo '<h1>MySQL Server is not connected</h1>';
}

?>
