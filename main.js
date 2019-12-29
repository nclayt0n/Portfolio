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

function projectButtonToggle() {

    $('#anatomyButton').click(event => {
        $('.anatomyQuizDescription').toggleClass('hidden');
    });
    $('#IPAButton').click(event => {
        $('.IPADescription').toggleClass('hidden');
    });
    $('#userDirectoryButton').click(event => {
        $('.userDirectoryDescription').toggleClass('hidden');
    });
    $('#recipeBoxButton').click(event => {
        $('.recipeBoxDescription').toggleClass('hidden');
    });
}

function projectImageHover() {
    $('.liveImgContainer').mouseenter(event => {
        $(event.target.children).removeClass('hidden');
    });
    $('.liveImgContainer').mouseleave(event => {
        $('.projectLinksContainer').addClass('hidden');
    });


}

function ready() {
    projectButtonToggle();
    greetingDisplay();
    projectImageHover();
}
$(ready);