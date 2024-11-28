<?php
$servername='localhost';
$username= 'root';
$password= '';
$dbname= 'event_dashboard';

$conn =mysqli_connect($servername, $username, $password,$dbname);



if(!$conn)
  exit();
?>