let greeting;
let date = new Date();
let currentHour = date.getHours();

function greetingDisplay() {
    if (currentHour >= 5 && currentHour < 10) {
        greeting = 'Good Morning,<br/> I\'m Nicole';
    }
    if (currentHour >= 10 && currentHour < 18) {
        greeting = 'Good Afternoon,<br/> I\'m Nicole';
    }
    if (currentHour >= 18 && currentHour < 22) {
        greeting = 'Good Evening,<br/> I\'m Nicole';
    }
    if (currentHour >= 22 || currentHour < 5) {
        greeting = 'Good Night,<br/> I\'m Nicole';
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
        console.log(event.target.children);
        $(event.target.children).removeClass('hidden');
    });
    $('.liveImgContainer').mouseleave(event => {
        console.log(event.target.children);
        $('.projectLinksContainer').addClass('hidden');
    });


}

function ready() {
    projectButtonToggle();
    greetingDisplay();
    projectImageHover();
}
$(ready);