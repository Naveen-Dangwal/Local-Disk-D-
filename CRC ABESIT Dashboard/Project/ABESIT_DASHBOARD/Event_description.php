<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
</head>

<body>
<?php include 'header.php'; ?>
    <div class="container">
        <h1 class="text-center">Event Description</h1>
        <?php
            include('Connection.php');  // include 'Connection.php';
            $event_id = $_REQUEST['event_id'];
            $sql="select * from event_tb where event_id=$event_id";
            $result=$conn->query($sql);

            $row=$result->fetch_assoc();
            //$event_id=$row['event_id'];
            $event_name=$row['event_name'];
            $event_desc=$row['event_desc'];
            $event_img=$row['event_img'];
        ?>  

<div id="carouselExampleAutoplaying" class="carousel slide h-50 " data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="pic/heck3.jpeg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="pic/job.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="pic/flow.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
 <h1></h1>
    <div class="container-fluid text-center bg-warning mt-5 pt-5">
        <div class="row ">
            <div class="col">
                <img src="pic/sih22.png" class="w-75" style="border:30px inset black " alt="">
            </div>
        </div>
        <div class="row" id="desc">
            <div class="col">
                <h1><?php echo $event_name; ?></h1>
                <img  src="<?php echo $event_img; ?>" style="border:30px inset red"; class="w-50">
                <p  class="mt-5 " style="font-size:20px; text-align:justify; background-color:green; border:30px inset violet "><?php echo $event_desc; ?>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima iusto dolores maxime obcaecati totam? Optio id consectetur harum, ducimus magnam suscipit saepe, eveniet explicabo aliquid voluptatibus similique ipsam eos quaerat?
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, amet architecto unde ad, odio tenetur expedita earum mollitia doloremque harum veniam alias nesciunt. Placeat debitis facere ducimus, harum perferendis nostrum!</p>
            </div>
        </div>
        
    </div>
    <h1 class="text-center mt-5 mb-5" style="border:30px inset blue ">Thanks for your precious Time</h1>
    <?php include 'footer.php'; ?>
</body>

</html>