<?php
include __DIR__ . '/src/db.php';




?>





<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="dist/app.css">
        <title></title>
    </head>
    <body>
        <header>

        </header>
        <main>
            <div class="container">
                <?php foreach ($database as $disco) {?>
                <div class="disco">
                    <div class="copertina">
                        <img src="<?php echo $disco['poster'] ?>" alt="foto disco">
                    </div>
                    <h2><?php echo $disco['author'] ?></h2>
                    <p><?php echo $disco['year'] ?></p>
                    <p><?php echo $disco['title'] ?></p>
                </div>
                <?php } ?>
            </div>
        </main>
    </body>
</html>
