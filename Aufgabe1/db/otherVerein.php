<?php
header('Content-Type: text/html; charset=utf-8');
//$option = isset($_POST['club']) ? $_POST['club'] : false;
//   if ($option) {
//      echo htmlentities($_POST['club'], ENT_QUOTES, "UTF-8");
//   } else {
//     echo "task option is required";
//     exit; 
//   }

//if ($_POST['club'] == 'other') {
//    echo '<div class="form-group" style="padding-top: 10px;">
//                        <label class="control-label col-sm-4" for="verein">Dein         Lieblingsverein war nicht in der Liste?</label>
//                        <div class="col-sm-8">
//                            <input type="text" name="otherVerein"></input>
//                        </div>
//                    </div>';
//}

if(isset($_POST['club'])){
    // Storing Selected Value In Variable
    $selected_val = $_POST['club'];  
    
    if ($selected_val == 'other') {
        echo '<label class="control-label col-sm-4" for="ohterVerein">Gib deinen Verein ein:</label>';
        echo '<div class="col-sm-8"><input name="otherClub" style="width: 100;"></input></div>';
    }
    else {
        // Displaying Selected Value
        echo '<div class="well well-lg col-sm-12"> <p> Danke dass du für <strong>' .$selected_val. '</strong> gestimmt hast</p></div>';  
    }
}
?>
