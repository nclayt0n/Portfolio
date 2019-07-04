//insert text depending on time of day
//create date


let greeting;
let date = new Date();
let currentHour = date.getHours();

//display the section on load, then transition and hide it
//create html
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

// function start() {
//     $('.fade').fadeOut(10);
//     $('h2').fadeIn(4000);
//     $('.fade').fadeIn(4000);
//     $('h1').fadeToggle(1200, greetingDisplay);
//     $('h1').fadeToggle(2000, header);



// };


//hide the portfolio and display start screen



function createSite() {
    // start();




    $('#welcome').fadeOut(800, greetingDisplay);
    $('#welcome').fadeIn(800, greetingDisplay);


}
$(createSite());