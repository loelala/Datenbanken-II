<?php

echo '<select required name="club">';

$host = 'localhost';
$user = 'root';
$password = '';



$con=mysql_connect($host,$user,$password) or die ("Zugriff verweigert!");

if($con) {
    // if connected, then select data from db 
    $db = mysql_select_db('Aufgabe1') or die ("Die Datenbankauswahl ist nicht möglich!");
    $abfrage = 'SELECT * FROM Vereine';
    $query = mysql_query($abfrage) or die ("Datenbankabfrage war nicht möglich!");
    
    while($row = mysql_fetch_row($query)) {
        for ($j=0; $j < mysql_num_fields($query); $j++) {
            echo '<option value="'$row[$j]'">' . $row[$j] .'</option>';
        }
        
    }
    
} else {
   echo '<h1>MySQL Server is not connected</h1>';
}

echo '</select>';

?>
