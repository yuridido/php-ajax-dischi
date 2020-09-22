<?php




?>





<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="dist/app.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.min.js" integrity="sha512-zT3zHcFYbQwjHdKjCu6OMmETx8fJA9S7E6W7kBeFxultf75OPTYUJigEKX58qgyQMi1m1EgenfjMXlRZG8BXaw==" crossorigin="anonymous"></script>
        <title></title>
    </head>
    <body>
        <header>
            <select class="autori" name="autori">
                <option value=" ">Tutti</option>

            </select>

        </header>
        <main>
            <div class="container">

            </div>
        </main>

        <script id="entry-template" type="text/x-handlebars-template">
            <div class="disco">
                <div class="copertina">
                    <img src="{{poster}}" alt="foto disco">
                </div>
                <h2>{{titolo}}</h2>
                <p>{{autore}}</p>
                <p>{{anno}}</p>
            </div>
        </script>
        <script id="select-template" type="text/x-handlebars-template">
            <option value="{{autore}}">{{autore}}</option>

        </script>


        <script src="dist/app.js" charset="utf-8"></script>
    </body>
</html>
