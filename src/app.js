// var $ = require('jquery');
//
$(document).ready(function(){
    chiamata();
    select();




});

// FUNZIONI

// funzione per la chiamata con possibilità di passargli il data author
function chiamata(){
    $.ajax(
        {
            url: 'http://localhost/php-ajax-dischi/src/server.php',
            method: 'GET',
            success: function(risposta){
                // console.log(risposta);
                var source = $("#entry-template").html();
                var template = Handlebars.compile(source);
                for (var i = 0; i < risposta.length; i++) {
                    var context = {
                        'titolo': risposta[i].title,
                        'autore': risposta[i].author,
                        'anno': risposta[i].year,
                        'poster': risposta[i].poster
                    };
                    console.log(context);
                    var html = template(context);
                    $('.container').append(html);
                }
            },
            error: function(){
                alert(errore);
            },

        }
    )
}


//funzione per riempire la select
function select(){
    $.ajax(
        {
            url: 'http://localhost/php-ajax-dischi/src/server.php',
            method: 'GET',
            success: function(risposta){
                // console.log(risposta);
                var source = $("#select-template").html();
                var template = Handlebars.compile(source);
                for (var i = 0; i < risposta.length; i++) {
                    var context = {
                        'autore': risposta[i].author,
                    };
                    var html = template(context);
                    $('.autori').append(html);
                }
            },
            error: function(){
                alert(errore);
            },

        }
    )
}
