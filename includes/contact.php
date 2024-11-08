<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    require 'db.php';
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $query = "INSERT INTO  contacts (name, email, subject, message) VALUES (:name, :email, :subject, :message)";

    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":name", $name);
    $stmt->bindParam(":email", $email);
    $stmt->bindParam(":subject", $subject);
    $stmt->bindParam(":message", $message);

    $stmt->execute();

    header("Location: ../Myportfolio.php");
}
    