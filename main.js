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
    } else {
        greeting = 'Good Night!'
    }

    $('.welcome').text(greeting);
    $('.greeting').hover(event => {
        $('.greeting').toggleClass('hidden');
        $('.welcome').toggleClass('hidden');
    })
    $('.welcome').hover(event => {
        $('.greeting').toggleClass('hidden');
        $('.welcome').toggleClass('hidden');
    })
}

function projectButtonToggle() {

    $('#anatomyButton').click(event => {
        $('.anatomyQuizDescription').toggleClass('hidden');
    })
    $('#IPAButton').click(event => {
        $('.IPADescription').toggleClass('hidden');
    })
}

function ready() {
    projectButtonToggle();
    greetingDisplay();
}
$(ready);