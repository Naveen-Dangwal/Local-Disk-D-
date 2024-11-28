<?php
session_start();
if (!isset($_SESSION["username"])){
    header(('location:../login.php'));
}
?>
<html lang="en">
<head>
        <title>ABESIT EVENT DASHBOARD</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<?php include 'Dashheader.php';
echo 'welcome  ' .$_SESSION['username'];?>
<br><br><br>
<a href="../Logout.php">Logout</a>
<?php include 'Dashfooter.php'; ?>
</body>
</html>