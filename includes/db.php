<?php

$host = 'localhost';    
$dbname = "myportfolio_contact";
$dbuser = "root";
$dbpassword = "";

try {

    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=UTF8",$dbuser,$dbpassword);

} catch(PDOException $e) {
    echo $e->getMessage();
}   