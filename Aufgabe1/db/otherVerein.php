<?php
header('Content-Type: text/html; charset=utf-8');
if(isset($_POST['club'])){
    // Storing Selected Value In Variable
    $selected_val = $_POST['club'];  
    
    if ($selected_val == 'other') {
        echo '<label class="control-label col-sm-4" for="ohterVerein">Gib deinen Verein ein:</label>';
        echo '<div class="col-sm-8"><input name="otherClub" style="width: 100;"></input></div>';
    }
    else {
        $host = 'localhost';
        $user = 'root';
        $password = '';
        $con=mysql_connect($host,$user,$password) or die ("Zugriff verweigert!");
        $query = "UPDATE Abstimmung SET Stimmen = Stimmen+1 WHERE Abstimmung.Vereinsname = '$selected_val'";
        if (mysql_query($query, $con)) {
            // Displaying Selected Value
        echo '<div class="well well-lg col-sm-12"> <p> Danke, dass du für <strong>' .$selected_val. '</strong> gestimmt hast</p></div>';  
        } else {
            echo "Error: " . mysql_error($con);
        }
        
    }
}

if(isset($_POST['otherClub'])) {
    $otherClub = $_POST['otherClub'];
    $host = 'localhost';
    $user = 'root';
    $password = '';

    $con=mysql_connect($host,$user,$password) or die ("Zugriff verweigert!");
    mysql_set_charset('utf8', $con);
     
    $sqL = "INSERT INTO Vereine (Vereinsname) VALUES ('$otherClub')";
    $insertNewClub = "INSERT INTO Abstimmung (Vereinsname, Stimmen) VALUES ('$otherClub', 1)";
    if (mysql_query($sqL, $con)) {
        if (mysql_query($insertNewClub, $con)) {
            echo '<div class="well well-lg col-sm-12">
            
            <p> Danke, dass du für <strong>' .$otherClub. '</strong> gestimmt hast! </p>
            
            </div>';
        }
    } else {
        echo "Error: " . mysql_error($con);
    }
}
?>
