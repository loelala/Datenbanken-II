<?php
  if(isset($_POST['name']) && isset($_POST['emailaddress']) && isset($_POST['hausnummer'])
      && isset($_POST['strasse']) && isset($_POST['ort']) &&  isset($_POST['plz']) && isset($_POST['mitglied']) && isset($_POST['liga'])) {

        $name = $_POST['name'];
        $email = $_POST['emailaddress'];
        $hausnummer = $_POST['hausnummer'];
        $strasse = $_POST['strasse'];
        $ort = $_POST['ort'];
        $plz = $_POST['plz'];
        $mitglied = $_POST['mitglied'];
        $liga = $_POST['liga'];

        $host = 'localhost';
        $user = 'root';
        $password = '';
        $con = mysql_connect($host,$user,$password) or die ("Zugriff verweigert!");
        $db = mysql_select_db('Aufgabe1') or die ("Die Datenbankauswahl ist nicht möglich!");
        mysql_set_charset('utf8', $con);

        $insertIntoUser = "INSERT INTO `User`(`Name`, `Email`, `Vereinsmitglied`, `Strasse`, `Hausnummer`, `Plz`, `Ort`) VALUES ('$name','$email','$mitglied','$strasse','$hausnummer','$plz','$ort')";

        if (mysql_query($insertIntoUser, $con)) {
          // if (is_array($liga)) {
            // echo "<script type='text/javascript'>alert('Ist ein Array');</script>";
            if (count($liga) > 1) {
              for ($i = 0; $i < count($liga); $i++) {
                $insertIntoZuteilungArray = "INSERT INTO `ZuteilungMail`(`Email`, `Spielklasse`) VALUES ('$email','$liga[$i]')";
                if (mysql_query($insertIntoZuteilungArray, $con)) {
                  // alles ok
                } else {
                  echo '<div class="well well-lg col-sm-12">

                  <p> Es ist leider ein Fehler aufgetreten! Versuchen Sie es später nochmal </p>

                  </div>';
                }
              }
            } else {
              $insertIntoZuteilung = "INSERT INTO `ZuteilungMail`(`Email`, `Spielklasse`) VALUES ('$email','$liga')";
              mysql_query($insertIntoZuteilung, $con);
            }
            
          // } else {
          //   echo "<script type='text/javascript'>alert('Ist KEIN Array'" . $liga .   ");</script>";
          //   $insertIntoZuteilung = "INSERT INTO `ZuteilungMail`(`Email`, `Spielklasse`) VALUES ('$email','$liga')";
          //   mysql_query($insertIntoZuteilung, $con);
          // }
        } else {
          echo '<div class="well well-lg col-sm-12">

          <p> Es ist leider ein Fehler aufgetreten! Versuchen Sie es später nochmal </p>

          </div>';
        }

      }

?>
