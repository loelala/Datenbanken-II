<!DOCTYPE html>
<html>

<head>
    <title>Welcher Fußballverein ist dein Favourit?</title>
    <meta charset="utf-8">

    <!-- Custom Fonts -->
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Poiret+One|Dosis' rel='stylesheet' type='text/css'>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="bootstrap.css">

    <!-- Optional theme -->
    <link rel="stylesheet" href="bootstrap-theme.css">

    <link rel="stylesheet" href="style.css">

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

</head>

<body style="font-family: 'Dosis', sans-serif;">

    <div class="jumbotron" style="background-image: url('/Datenbanken-II/Aufgabe1/images/fussball.jpg')">
        <div class="container">
            <h2>Stimmen Sie ab welcher Fußballverein der Beste ist!</h2>
            <h3> <p class="text-muted" style="color: #fff">Geben Sie Ihre Stimme damit Ihr Favourit auf Nummer 1 steht! </h3>
        </div>
    </div>

    <div class="row">
        <div class="container">

            <ul class="nav nav-tabs">
                <li role="presentation"><a href="index.php">Home</a></li>
                <li role="presentation"><a href="abstimmung.php
                    ">Abstimmen</a></li>
                <li role="presentation"><a href="ranking.php">Ranking</a></li>
                <li role="presentation"><a href="newsletter.php">Newsletter</a></li>
                <li role="presentation" class="active"><a href="sendNewsletter.php">Versenden der Newsletter</a></li>
            </ul>

            <div class="col-md-12">


              <!--Begin: Form -->
              <form class="form-horizontal col-sm-offset-2" role="form" method="post"  style="margin-top: 30px">

                  <div class="form-group">
                    <label class="control-label" for="newsletter">Welche Abonnenten sollen benachrichtig werden?</label>
                    <div class="col-sm-12">
                      <input type="radio" name="newsletter" value="1"> Abonennten die Mitglied in einem Verein sind </input><br>
                      <input type="radio" name="newsletter" value="0"> Abonennten die NICHT Mitgleid in einem Verein sind </input>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="control-label" for="newsletter">Welche Lige sollen berücksichtigt werden? </label>
                    <div class="col-sm-12">
                      <?php include('./db/fillSelectFieldNewsletter.php'); ?>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="control-label">Die Newsletter-Nachricht: </label>
                    <div class="col-sm-12" >
                      <textarea class="form-control" rows="5" id="message" name="message"></textarea>
                    </div>
                  </div>

                  <div class="form-group">
                      <div>
                          <button type="submit" class="btn btn-default">Newsletter versenden</button>
                      </div>
                  </div>
              </form>
              <!--End: Form -->


              <div>
                <?php include('./db/buildNewsletter.php'); ?>
              </div>

            </div>

        </div>
      </div>

</body>
</html>
