<!DOCTYPE html>
<html>

<head>
    <title>Welcher Fußballverein ist dein Favourit?</title>
    <meta charset="utf-8">

    <!-- Custom Fonts -->
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

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
                <li role="presentation" class="active"><a href="abstimmung.php
                    ">Abstimmen</a></li>
                <li role="presentation"><a href="ranking.php">Ranking</a></li>
                <li role="presentation"><a href="newsletter.php">Newsletter</a></li>
            </ul>

            <div class="col-md-6 col-md-offset-3">

              <!--Begin: Form -->
              <form class="form-horizontal" role="form" method="post"  style="margin-top: 30px">

                  <div class="form-group">
                      <label class="control-label col-sm-4" for="name">Name </label>
                      <div class="col-sm-8">
                          <input type="text" name="name" />
                      </div>
                  </div>

                  <div class="form-group">
                      <label class="control-label col-sm-4" for="emailaddress">Emailaddresse </label>
                      <div class="col-sm-8">
                          <input type="text" name="emailaddress" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" />
                      </div>
                  </div>

                  <div class="form-group">
                      <label class="control-label col-sm-4" for="strasse">Straße</label>
                      <div class="col-sm-8">
                          <input type="text" name="strasse" />
                      </div>
                  </div>

                  <div class="form-group">
                    <label class="control-label col-sm-4" for="hausnummer">Hausnummer</label>
                    <div class="col-sm-8">
                        <input type="text" name="hausnummer" />
                    </div>
                  </div>

                  <div class="form-group">
                      <label class="control-label col-sm-4" for="ort">Ort</label>
                      <div class="col-sm-8">
                          <input type="text" name="ort" />
                      </div>
                  </div>

                  <div class="form-goup">
                      <label class="control-label col-sm-4" for="plz">PLZ</label>
                      <div class="col-sm-8">
                          <input type="number" name="plz" />
                      </div>
                  </div>

                  <div class="form-group">
                    <label class="control-label col-sm-4" for="mitglied">Hast du eine Mitgliedschaft bei einerm Fußballverein? </label>
                    <div class="col-sm-8">
                      <input type="radio" name="mitglied" value="1"> Ja ich bin Mitglied bei einem Verein</input><br>
                      <input type="radio" name="mitglied" value="0"> Nein hab ich nicht </input>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="control-label col-sm-4">Dein Liebingsverein: </label>
                    <div class="col-sm-8">
                      <?php include('./db/fillSelectFieldNewsletter.php'); ?>
                    </div>
                  </div>

                  <div class="form-group">
                      <div class="col-sm-offset-4 col-sm-8">
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
