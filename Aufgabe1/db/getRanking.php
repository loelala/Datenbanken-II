<?php

        $host = 'localhost';
        $user = 'root';
        $password = '';
        $con = mysql_connect($host,$user,$password) or die ("Zugriff verweigert!");
        $db = mysql_select_db('Aufgabe1') or die ("Die Datenbankauswahl ist nicht möglich!");
        mysql_set_charset('utf8', $con);
        $sql = "SELECT * FROM `Abstimmung`";
        $sql2 = "SELECT SUM(Stimmen) FROM `Abstimmung`";
        $ergebnis = mysql_query($sql, $con);
        $sum = mysql_query($sql2, $con);
        $stimme = 0;
        $ergebnisSumme = mysql_fetch_row($sum)[0];

        echo "<table class='table table-striped'>
                    <thead>
                        <tr>
                        <th>Vereinsname</th>
                        <th>Stimmen</th>
                        <th> %-Anteil <th>
                      </tr>
                    </thead>
                    <tbody>";

        while($row = mysql_fetch_row($ergebnis)) {
            echo "<tr>";
            for ($j=0; $j < mysql_num_fields($ergebnis); $j++) {
                $verein = $row[$j];
                echo "<td> $verein </td>";
                if ($j == 1) {
                  $valueStimme = intval($verein);
                }
            }
            $anteil = number_format(($valueStimme / intval($ergebnisSumme)) * 100, 2) .'%';
            echo "<td>$anteil</td>";
            echo "</tr>";
            }
        echo "</tbody>
                </table>";
?>
