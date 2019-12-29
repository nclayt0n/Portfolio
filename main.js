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

function getWindowWidth() {
    if ($(window).width() >= 700) {
        let bioHeight = $('#bioContainer').innerHeight() + 200;
        $('#recipeContainer').css({
            'position': 'absolute',
            'left': '220px',
            'top': `${bioHeight}px`,
            'min-width': '275px'
        });
        $('#userDirectoryContainer').css({
            'position': 'absolute',
            'left': '0px',
            'top': `${$('#recipeContainer').innerHeight() + bioHeight + 20}px`,
            'width': '50%'
        });
        $('#IPAContainer').css({
            'position': 'absolute',
            'right': '0px',
            'top': `${$('#userDirectoryContainer').innerHeight() + bioHeight + $('#recipeContainer').innerHeight() + 40}px`,
            'width': '50%'
        });
    }
    if ($(window).width() < 700) {
        $('#recipeContainer').css({
            'position': 'static',
            'margin': '15px 30px',
            'padding': '25px'
        });
        $('#userDirectoryContainer').css({
            'position': 'static',
            'margin': '15px 30px',
            'padding': '25px',
        });
        $('#IPAContainer').css({
            'position': 'static',
            'margin': '15px 30px',
            'padding': '25px',
        });
    }
    $(window).resize(function() {
        let bioResizedHeight = $('#bioContainer').innerHeight() + 140;
        let recipeHeight = $('#recipeContainer').innerHeight() + 20;
        let userDirectoryHeight = $('#userDirectoryContainer').innerHeight() + 20;

        if ($(window).width() >= 700) {
            $('#recipeContainer').css({
                'position': 'absolute',
                'left': '220px',
                'top': `${bioResizedHeight}px`,
                'min-width': '275px'
            });
            $('#userDirectoryContainer').css({
                'position': 'absolute',
                'left': '0px',
                'top': `${recipeHeight+bioResizedHeight}px`,
                'width': '50%'
            });
            $('#IPAContainer').css({
                'position': 'absolute',
                'right': '0px',
                'top': `${recipeHeight+bioResizedHeight+ userDirectoryHeight}px`,
                'width': '50%'
            });
        }

        if ($(window).width() < 700) {
            $('#recipeContainer').css({
                'position': 'static',
                'margin': '15px 30px',
                'padding': '25px'
            });
            $('#userDirectoryContainer').css({
                'position': 'static',
                'margin': '15px 30px',
                'padding': '25px',
                'width': 'fit-content'
            });
            $('#IPAContainer').css({
                'position': 'static',
                'margin': '15px 30px',
                'padding': '25px',
                'width': 'fit-content'
            });

        }

    });
}

function ready() {
    getWindowWidth();
    projectButtonToggle();
    greetingDisplay();
    projectImageHover();
}
$(ready);