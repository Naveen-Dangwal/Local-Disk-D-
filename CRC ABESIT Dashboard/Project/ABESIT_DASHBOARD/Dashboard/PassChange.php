<!DOCTYPE html>
<html lang="en">

<head>
  <title>Update Participants</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="style.css">

</head>

<body style="background-image: linear-gradient(pink, white, red);">
  <?php include 'Dashheader.php';
  //  echo 'Welcome Mr. ' . $_SESSION['username'];

  ?>

  <div class="container w-50 mb-4">
    <h2 class="text-center">Change Password</h2>
    <?php
    $success = 0;
    $error = 0;

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
      include('../Connection.php'); // include 'Connection.php';

      $opass     = $_REQUEST['opass'];
      $npass  = $_REQUEST['npass'];

      $sql = "update registration set password='$npass' where password='$opass'";

      $result = $conn->query($sql);

      if ($result) {
        // echo 'Data Inserted succesfully..';
        $success = 1;
        header('location:Profile.php');
      } else
        $error = 1;
      //echo 'Insert Failed...';
    }
    ?>

    <?php
    if ($error)
      echo '<div class="alert alert-danger" role="alert">
        <strong>Sorry</strong> Password not changed...</div>';
    if ($success)
      echo '<div class="alert alert-success" role="alert">
          <strong>Congrats</strong> Password Changed Successfully...</div>';
    ?>

    <form method="post">
      <div class="mb-3">
        <label class="form-label">User Name</label>
        <input type="text" class="form-control" name="name" placeholder="Enter name here" value="<?php echo $_SESSION['username']; ?>" readonly>
      </div>
      <div class="mb-3">
        <label class="form-label">Old Password</label>
        <input type="password" class="form-control" name="opass" placeholder="Enter Old Password here" required>
      </div>
      <div class="mb-3">
        <label class="form-label">New Password</label>
        <input type="password" class="form-control" name="npass" placeholder="Enter New Password here" required>
      </div>
      <button type="submit" class="btn btn-primary w-100">Change Password</button>
    </form>

  </div>



  <?php include 'Dashfooter.php'; ?>

</body>

</html>