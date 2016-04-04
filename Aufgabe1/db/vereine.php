<?php

echo "<select required name="club">";

						  <option value="bm">Bayern München</option>
						  <option value="bl">Bayer Leverkusen</option>
						  <option value="schalke">Schalke 04</option>
						  <option value="bd">Borussia Dortmund</option>
						  <option value="dynamo">Dynamo Dresden</option>
						  <option value="energie">Energie Cottbus</option>
						  <option value="alemania aachen">Alemannia Aachen</option>
						  <option value="other"> Ein ganz anderer Verein! </option>
						</select>

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
            echo '<option value="'.$row['Vereinsname']'">' . $row['Vereinsname'] . "</option>";
        }
    }
    
    
   
    
    
} else {
   echo '<h1>MySQL Server is not connected</h1>';
}

echo "</select>"

?>
