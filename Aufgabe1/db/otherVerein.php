<?php

$selectOption = $_POST['club'];

if ($selectOption == 'other') {
    echo '<div class="form-group" style="padding-top: 10px;">
                        <label class="control-label col-sm-4" for="verein">Dein Lieblingsverein war nicht in der Liste?</label>
                        <div class="col-sm-8">
                            <input type="text" name="otherVerein"></input>
                        </div>
                    </div>'
}

?>
