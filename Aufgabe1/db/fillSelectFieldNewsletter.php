<?php
echo '<select name="liga[]" multiple>';

$host = 'localhost';
$user = 'root';
$password = '';


$con=mysql_connect($host,$user,$password) or die ("Zugriff verweigert!");
mysql_set_charset('utf8', $con);


if($con) {
    // if connected, then select data from db
    $db = mysql_select_db('Aufgabe1') or die ("Die Datenbankauswahl ist nicht möglich!");
    $abfrage = 'SELECT * FROM Spielklassen';
    $query = mysql_query($abfrage) or die ("Datenbankabfrage war nicht möglich!");
    $selected = '';
    while($row = mysql_fetch_row($query)) {
        for ($j=0; $j < mysql_num_fields($query); $j++) {
            (isset($_POST['liga'])) ? $club = $_POST['liga'] : $club = 'notSet';
            if ($club == $row[$j]) { $selected = 'selected'; } else {
                $selected = '';
            }
            echo '<option value="'.$row[$j].'"' .$selected . '>' . $row[$j] .'</option>';
        }
    }

} else {
   echo '<div class="well well-lg col-sm-12" style="margin-top: 20px;"> <p> Es tut uns leid! Leider gab es Probleme mit unsere Datenbank! </p></div>';
}

echo '</select>';


 ?>
