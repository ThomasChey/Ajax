$(function () {

    $.getJSON('https://ipapi.co/json/', function (data) {

        console.log(data);

        $('#info').append('Adresse IP : ' + data.ip + '<br>' + 'Code Postal : ' + data.postal + '<br>' + "Ville : " + data.city + '<br><strong>Attention on vous observe !</strong>');

    })

    //CORRECTION

    // -- 2 façons possible de procéder : 

    // 1. Une requête Ajax simple
    $.ajax('https://ipapi.co/json/').done(function (data) {
        console.log(data);
        console.log(data.ip);
        console.log(data.city);
    });


    $.getJSON('https://ipapi.co/json/', function (data) {
        //console.log(data)
        $(`
            <p>
                Votre IP est surveillée : ${data.ip}
                <br> ${data.city} - ${data.region}
            </p>    
        `).css({'background':'yellow', 'color':'red', 'margin-top':'1em'}).appendTo($('form'));
    });


});