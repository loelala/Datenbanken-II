<?php

$host="localhost";
$json=file_get_contents('dbInformation.json');

$jsonIterator = new RecursiveIteratorIterator(new RecursiveArrayIterator(json_decode($json, TRUE)), RecursiveIteratorIterator::SELF_FIRST);

foreach( $jsonIterator as $key => $val) {
    if (is_array($val)) {
        echo "$key: \n ";
    } else {
        echo "$key => $val \n";
    }
}

$con=mysql_connect($host,$user,$password);
if(!$con) {
  echo '<h1>Connected to MySQL</h1>';
    // if connected, then select data from db 
    //$db=mysql_select_db("YOUR_DATABASE_NAME",$con);
    //$query=mysql_query("YOUR_MYSQL_QUERY",$db);
} else {
   echo '<h1>MySQL Server is not connected</h1>';
}

?>
