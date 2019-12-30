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
    if ($(window).width() >= 700 && $(window).width() <= 1024) {
        let bioHeight = $('#bioContainer').innerHeight() + 200;
        $('#recipeContainer').css({
            'position': 'absolute',
            'left': '220px',
            'top': `${bioHeight}px`,
            'width': '55%'
        });
        $('#userDirectoryContainer').css({
            'position': 'absolute',
            'left': '0px',
            'top': `${$('#recipeContainer').innerHeight() + bioHeight + 20}px`,
            'width': '55%'
        });
        $('#IPAContainer').css({
            'position': 'absolute',
            'right': '0px',
            'top': `${$('#userDirectoryContainer').innerHeight() + bioHeight + $('#recipeContainer').innerHeight() + 40}px`,
            'width': '55%'
        });
    }
    if ($(window).width() > 1024) {
        let bioHeight = $('#bioContainer').innerHeight() + 120;
        $('#recipeContainer').css({
            'position': 'absolute',
            'left': '250px',
            'top': `400px`,
            'width': '670px'
        });
        $('#userDirectoryContainer').css({
            'position': 'absolute',
            'left': '0px',
            'top': `872px`,
            'width': '620px'
        });
        $('#IPAContainer').css({
            'position': 'absolute',
            'right': '0px',
            'top': `1280px`,
            'width': '620px'
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


        if ($(window).width() >= 700 && $(window).width() < 1024) {
            let bioResizedHeight = $('#bioContainer').innerHeight() + 140;
            let recipeHeight = $('#recipeContainer').innerHeight() + 30;
            let userDirectoryHeight = $('#userDirectoryContainer').innerHeight() + 30;
            $('#recipeContainer').css({
                'position': 'absolute',
                'left': '220px',
                'top': `${bioResizedHeight}px`
            });
            $('#userDirectoryContainer').css({
                'position': 'absolute',
                'left': '0px',
                'top': `${recipeHeight+bioResizedHeight}px`,
                'width': '55%'
            });
            $('#IPAContainer').css({
                'position': 'absolute',
                'right': '0px',
                'top': `${recipeHeight+bioResizedHeight+ userDirectoryHeight}px`,
                'width': '55%'
            });
        }
        if ($(window).width() > 1024) {
            let bioResizedHeight = $('#bioContainer').innerHeight() + 60;
            let recipeHeight = $('#recipeContainer').innerHeight() + 30;
            let userDirectoryHeight = $('#userDirectoryContainer').innerHeight() + 30;
            $('#recipeContainer').css({
                'position': 'absolute',
                'left': '250px',
                'top': `400px`,
                'width': '670px'
            });
            $('#userDirectoryContainer').css({
                'position': 'absolute',
                'left': '0px',
                'top': `872px`,
                'width': '620px'
            });
            $('#IPAContainer').css({
                'position': 'absolute',
                'right': '0px',
                'top': `1280px`,
                'width': '620px'
            });
        }
        if ($(window).width() >= 700 && $(window).width() < 1024) {
            let bioResizedHeight = $('#bioContainer').innerHeight() + 140;
            let recipeHeight = $('#recipeContainer').innerHeight() + 30;
            let userDirectoryHeight = $('#userDirectoryContainer').innerHeight() + 30;
            $('#recipeContainer').css({
                'position': 'absolute',
                'left': '220px',
                'margin': '15px 30px',
                'top': `${bioResizedHeight}px`,
                'width': '55%'
            });
            $('#userDirectoryContainer').css({
                'position': 'absolute',
                'margin': '15px 30px',
                'left': '0px',
                'top': `${recipeHeight+bioResizedHeight}px`,
                'width': '55%'
            });
            $('#IPAContainer').css({
                'position': 'absolute',
                'right': '0px',
                'margin': '15px 30px',
                'top': `${recipeHeight+bioResizedHeight+ userDirectoryHeight}px`,
                'width': '55%'
            });
        }

        if ($(window).width() < 700) {
            $('#recipeContainer').css({
                'position': 'static',
                'margin': '15px 60px',
                'padding': '25px',
                'width': 'fit-content'
            });
            $('#userDirectoryContainer').css({
                'position': 'static',
                'margin': '15px 60px',
                'padding': '25px',
                'width': 'fit-content'
            });
            $('#IPAContainer').css({
                'position': 'static',
                'margin': '15px 60px',
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