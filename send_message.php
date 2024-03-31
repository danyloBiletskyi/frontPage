<?php

session_start();

if(!isset($_POST["text"]) || !isset($_SESSION["login"])) {
    header("Location: /auth");
    die;
}

array_push($_SESSION["messages"], array(
    "text" => $_POST["text"],
    "time" => date("d.m.Y H:i:s"),
));

header("Location: /dialogs");