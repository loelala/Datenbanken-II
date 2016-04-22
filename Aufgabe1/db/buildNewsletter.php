<?php


header('Content-Type: text/html; charset=utf-8');

if(isset($_POST['newsletter']) && isset($_POST['liga'])){
    $host = 'localhost';
    $user = 'root';
    $password = '';
    $con = mysql_connect($host,$user,$password) or die ("Zugriff verweigert!");
    mysql_set_charset('utf8', $con);

    $selected_val = $_POST['newsletter'];
    $message = $_POST['message'];
    $liga = $_POST['liga'];
    $spielklassenForQuery = "EmailUser.Spielklasse = ";

    // Auswahl der Emails fans oder nicht fans
    $getUsersWhoAreFans = "SELECT Email FROM User WHERE Vereinsmitglied = $selected_val";

    // Auswahlt der Emails und der Spielklassen

    if (count($liga) > 1) {
      for ($i = 0 ; $i < count($liga); $i++) {
        if ($i == 0) {
          $spielklassenForQuery .= '"' . $liga[$i] . '"';
        } else {
          $string = " OR EmailUser.Spielklasse = " . '"' . $liga[$i] . '"';
          $spielklassenForQuery .= $string;
        }
      }
      //echo "Spielklasse Array: " . $spielklassenForQuery;
    } else {
      $spielklassenForQuery .= '"' . $liga[0] . '"';
      //echo "Spielklasse kein Array: "  . $spielklassenForQuery;
    }


    $sql = "SELECT EmailUser.Email From (SELECT ZuteilungMail.* FROM ZuteilungMail
        LEFT JOIN User ON ZuteilungMail.Email = User.Email WHERE User.Vereinsmitglied = $selected_val) as EmailUser WHERE  $spielklassenForQuery GROUP BY EmailUser.Email";


    $ergebnis = mysql_query($sql, $con);
    if (mysql_query($sql, $con)) {
      echo "<table class='table table-striped'>
                  <thead>
                      <tr>
                      <th>Email-Adresse</th>
                      <th>Nachricht</th>
                    </tr>
                  </thead>
                  <tbody>";

      while($row = mysql_fetch_row($ergebnis)) {
          echo "<tr>";
          for ($j=0; $j < mysql_num_fields($ergebnis); $j++) {
              echo "<td> $row[$j] </td>";

          }
          echo "<td>" . $message . "</td>";
          echo "</tr>";
      }

      echo "</tbody>
              </table>";

    } else {
      echo "ERRROROROR";
    }


}


 ?>
