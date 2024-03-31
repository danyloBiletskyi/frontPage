<?php
session_start();

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);

switch ($path) {
    case "/":
    case "/index":
        require "HomeWebpage.php";
        $page = new HomeWebpage();
        break;
    case "/auth":
        require "AuthWebpage.php";
        $page = new AuthWebpage();
        $page->setBody(file_get_contents("pages/auth/body.html"));
        break;
    case "/dialogs":
        require "DialogsWebpage.php";
        $page = new DialogsWebpage();
        ob_start();
        include("pages/dialogs/body.php");
        $page->setBody(ob_get_clean());
        $page->setHeader("");
        $page->setFooter("");
        break;
    default:
        require "NotFoundWebpage.php";
        $page = new NotFoundWebpage();
        break;
}

?>

<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php echo $page->getTitle() ?></title>
    <link rel="stylesheet" href="/assets/css/main.css"/>
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css"/>
</head>
<body>
<?php
echo $page->getHeader();
echo $page->getBody();
echo $page->getFooter();
?>
</body>
</html>