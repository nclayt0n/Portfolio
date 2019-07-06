let greeting;
let date = new Date();
let currentHour = date.getHours();

function greetingDisplay() {
    if (currentHour >= 5 && currentHour < 10) {
        greeting = 'Good Morning!'
    }
    if (currentHour >= 10 && currentHour < 18) {
        greeting = 'Good Afternoon!'
    }
    if (currentHour >= 18 && currentHour < 22) {
        greeting = 'Good Evening!'
    }
    if (currentHour >= 22 && currentHour < 5) {
        greeting = 'Good Night!'
    }
    $('#welcome').text(greeting);
    console.log('hi');
}

function greetingFade() {
    $('#welcome').fadeOut(800, greetingDisplay);
    $('#welcome').fadeIn(1900, function() {
        $(this).trigger("fadeInComplete");
        console.log('bye');
    });
    $(document).on("fadeInComplete", function() {
        window.location.assign("index.html");
    });

    $('body').fadeOut(1900)
    $('body').fadeIn(800);
}
$(greetingFade());