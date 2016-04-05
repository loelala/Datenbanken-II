<?php

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
$selected_val = $_POST['club'];  // Storing Selected Value In Variable
echo "You have selected :" .$selected_val;  // Displaying Selected Value
}
?>
