var $ = require('jquery');

$(document).ready(function(){
    var cantante = $('select.autori').val();
    chiamataSelect(cantante);
    select();
    $('select.autori').on('change', $('select.autori'), function() {
        cantante = $(this).val();
        console.log(cantante);
        chiamataSelect(cantante);
    });



});

// FUNZIONI

// funzione per la chiamata con possibilità di passargli il data author
// function chiamata(){
//     $.ajax(
//         {
//             url: 'http://localhost/php-ajax-dischi/src/server.php',
//             method: 'GET',
//             success: function(risposta){
//                 svuota();
//                 // console.log(risposta);
//                 var source = $("#entry-template").html();
//                 var template = Handlebars.compile(source);
//                 for (var i = 0; i < risposta.length; i++) {
//                     var context = {
//                         'titolo': risposta[i].title,
//                         'autore': risposta[i].author,
//                         'anno': risposta[i].year,
//                         'poster': risposta[i].poster
//                     };
//                     console.log(context);
//                     var html = template(context);
//                     $('.container').append(html);
//                 }
//             },
//             error: function(){
//                 alert(errore);
//             },
//
//         }
//     )
// }


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
                var select = [];
                for (var i = 0; i < risposta.length; i++) {
                    // tramite altro array faccio il controllo su autore già presente
                    var autore = risposta[i].author;
                    if (!select.includes(autore)) {
                        var context = {
                            'autore': risposta[i].author,
                        };
                        var html = template(context);
                        $('.autori').append(html);
                        select.push(autore);
                    }
                }
            },
            error: function(){
                alert(errore);
            },

        }
    )
}


// BONUS chiamata della select

function chiamataSelect(cantante){
    $.ajax(
        {
            url: 'http://localhost/php-ajax-dischi/src/server.php',
            method: 'GET',
            success: function(risposta){
                svuota();
                // console.log(risposta);
                var source = $("#entry-template").html();
                var template = Handlebars.compile(source);
                for (var i = 0; i < risposta.length; i++) {
                    if (risposta[i].author == cantante || cantante == " ") {
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
                }
            },
            error: function(){
                alert(errore);
            },

        }
    )
}

function svuota() {
    $('.container').empty();
}
