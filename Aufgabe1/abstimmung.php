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
                <li role="presentation" class="active"><a href="abstimmung.php
                    ">Abstimmen</a></li>
                <li role="presentation"><a href="ranking.php">Ranking</a></li>
                <li role="presentation"><a href="newsletter.php">Newsletter</a></li>
                <li role="presentation"><a href="sendNewsletter.php">Versenden der Newsletter</a></li>
            </ul>

            <div class="col-sm-12">

                <!--Begin: Form -->
                <form class="form-horizontal" role="form" method="post" style="margin-top: 30px">

                    <!--Begin: select field-->
                    <div class="form-group">
                        <label class="control-label col-sm-4" for="verein">Dein Liebingsverein: </label>
                        <div class="col-sm-8">
                            <?php include('./db/fillSelectField.php'); ?>
                        </div>
                    </div>
                    <!--End: Select-field-->

                    <!--Begin: input field-->
                    <div class="form-group">
                        <?php include('./db/otherVerein.php') ?>
                    </div>
                    <!--Begin: input field-->


                    <div class="form-group">
                        <div class="col-sm-offset-4 col-sm-8">
                            <button type="submit" class="btn btn-default">Submit</button>
                        </div>
                    </div>

                </form>
                <!--End: Form -->



            </div>
        </div>
    </div>
</body>

</html>
