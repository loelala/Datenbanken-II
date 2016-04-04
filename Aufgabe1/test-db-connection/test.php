<?php

$host="localhost";
$str=file_get_contents('dbInformation.json');

$json = json_decode($str, true);

echo '<pre>' . print_r($json, true) . '<pre>'

foreach($json as $key => $val) {
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
