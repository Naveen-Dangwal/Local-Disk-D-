<!DOCTYPE html>
<html lang="en">

<head>
  <title>Add Event</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="style.css">

</head>

<body style="background-image: linear-gradient(pink, white, red);">
  <?php include 'Dashheader.php';
  //  echo 'Welcome Mr. ' . $_SESSION['username'];

  ?>

  <div class="container w-50 mb-4">
    <h2 class="text-center">Add Event</h2>
    <?php
    $success = 0;
    $error = 0;

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
      include('../Connection.php'); // include 'Connection.php';

      $ename   = $_REQUEST['ename'];
      $desc    = $_REQUEST['edesc'];
      $image   = $_REQUEST['eimg'];

      $sql = "insert into event_tb (event_name, event_desc, event_img) values ('$ename', '$desc', '$image')";

      $result = $conn->query($sql);

      if ($result) {
        // echo 'Data Inserted succesfully..';
        $success = 1;
      } else
        $error = 1;
      //echo 'Insert Failed...';
    }
    ?>

    <?php
    if ($error)
      echo '<div class="alert alert-danger" role="alert">
        <strong>Sorry</strong> Error has occured...</div>';
    if ($success)
      echo '<div class="alert alert-success" role="alert">
          <strong>Congrats</strong> Event Added Successfully...</div>';
    ?>

    <form method="post">
      <div class="mb-3">
        <label class="form-label">Event Title</label>
        <input type="text" class="form-control" name="ename" placeholder="Enter event title here" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Event Description</label>
        <textarea class="form-control" name="edesc" placeholder="Enter event description here" required></textarea>
      </div>
      <div class="mb-3">
        <label class="form-label">Event Image</label>
        <input type="text" class="form-control" name="eimg" placeholder="Enter event image path here" required>
        <!-- <input type="file" name="" id=""> -->
      </div>
      <button type="submit" class="btn btn-primary w-100">Add Event</button>
    </form>

  </div>



  <?php include 'Dashfooter.php'; ?>

</body>

</html>