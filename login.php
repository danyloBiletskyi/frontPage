<?php
if(!isset($_POST["login"]) || !isset($_POST["password"])) {
    header("Location: /auth");
    die;
}

session_start();

$_SESSION["login"] = $_POST["login"];
$_SESSION["messages"] = array();

header("Location: /dialogs");
