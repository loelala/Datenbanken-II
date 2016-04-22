<!DOCTYPE html>
<html>

<head>
    <title>Welcher Fußballverein ist dein Favourit?</title>
    <meta charset="utf-8">

    <!-- Custom Fonts -->
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="bootstrap.css">

    <!-- Optional theme -->
    <link rel="stylesheet" href="bootstrap-theme.css">

    <link rel="stylesheet" href="style.css">

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

</head>

<body>

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
                <li role="presentation" class="active"><a href="newsletter.php">Newsletter</a></li>
                <li role="presentation"><a href="sendNewsletter.php">Versenden der Newsletter</a></li>
            </ul>
            </ul>

            <div class="col-md-12">

              <div class="col-sm-offset-2">
                <h3>Hier können Sie sich für unseren Newsletter anmelden.</h3>
                <h4>Für jeden Fußballfan ein Muss! </h4>
                <p> Wir teilen Ihnen wöchentlich die aktuellsten Themen rund um Ihre ausgewählten Ligen mit. </p>

                <img src="football_newsletter.jpg" class="img-rounded" alt="football">

              </div>
              <!--Begin: Form -->
              <form class="form-horizontal col-sm-offset-2" role="form" method="post"  style="margin-top: 30px">

                  <div class="form-group">
                      <label class="control-label" for="name">Name </label>
                      <div class="col-sm-12">
                          <input type="text" name="name" required/>
                      </div>
                  </div>

                  <div class="form-group">
                      <label class="control-label" for="emailaddress">Emailaddresse </label>
                      <div class="col-sm-12">
                          <input type="text" name="emailaddress" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required />
                      </div>
                  </div>

                  <div class="form-group">
                      <label class="control-label" for="strasse">Straße</label>
                      <div class="col-sm-12">
                          <input type="text" name="strasse" required />
                      </div>
                  </div>

                  <div class="form-group">
                    <label class="control-label" for="hausnummer">Hausnummer</label>
                    <div class="col-sm-12">
                        <input type="number" name="hausnummer" required />
                    </div>
                  </div>

                  <div class="form-group">
                      <label class="control-label" for="ort">Ort</label>
                      <div class="col-sm-12">
                          <input type="text" name="ort" required/>
                      </div>
                  </div>

                  <div class="form-group">
                      <label class="control-label" for="plz">PLZ</label>
                      <div class="col-sm-12">
                          <input type="text" name="plz" pattern="[0-9]*" required></input>
                      </div>
                  </div>

                  <div class="form-group">
                    <label class="control-label" for="mitglied">Hast du eine Mitgliedschaft bei einerm Fußballverein? </label>
                    <div class="col-sm-12">
                      <input type="radio" name="mitglied" value="1" required> Ja ich bin Mitglied bei einem Verein</input><br>
                      <input type="radio" name="mitglied" value="0" required> Nein hab ich nicht </input>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="control-label">Dein Liebingsverein: </label>
                    <div class="col-sm-12" >
                      <?php include('./db/fillSelectFieldNewsletter.php'); ?>
                    </div>
                  </div>

                  <div class="form-group">
                      <div>
                          <button type="submit" class="btn btn-default">Submit</button>
                      </div>
                  </div>

                  <div>
                    <?php include('./db/validateNewsletter.php') ?>
                  </div>

              </form>
              <!--End: Form -->
            </div>

        </div>
      </div>

</body>
</html>
