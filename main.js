let greeting;
let date = new Date();
let currentHour = date.getHours();

function greetingDisplay() {
    if (currentHour >= 5 && currentHour < 10) {
        greeting = 'Good Morning';
    }
    if (currentHour >= 10 && currentHour < 18) {
        greeting = 'Good Afternoon';
    }
    if (currentHour >= 18 && currentHour < 22) {
        greeting = 'Good Evening';
    }
    if (currentHour >= 22 || currentHour < 5) {
        greeting = 'Good Night';
    }

    $('h2.greeting').html(greeting);
}

function ready() {
    greetingDisplay();
}
$(ready);