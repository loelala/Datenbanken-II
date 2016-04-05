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

            <div class="col-sm-6 col-sm-offset-3">
                <form class="form-horizontal" role="form" method="post">
                    <div class="form-group">
                        <label class="control-label col-sm-4" for="verein">Dein Liebingsverein: </label>

                        <!--Begin: select field-->
                        <div class="col-sm-8">
                            <?php include('./db/vereine.php'); ?>
                        </div>
                        <!--End: Select-field-->
                    </div>

                    <?php include('./db/otherVerein.php') ?>

                        <div class="form-group">
                            <div class="col-sm-offset-4 col-sm-8">
                                <button type="submit" class="btn btn-default">Submit</button>
                            </div>
                        </div>

                </form>
            </div>
        </div>
    </div>


    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="/Datenbanken-II/Aufgabe1/jquery.js"></script>

</body>

</html>
