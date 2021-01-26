$(document).ready(docReady);
var classIn;
var classOut;

function docReady(){
    var navBtnArray = $('#main-nav li');
    var sectionArray = $('#template>main>section');
    var headerHeight = $('header').height();
    console.log(headerHeight)
    var footerHeight = $('nav>div').height();
    $('main').css('top',headerHeight)
    $('footer').css('height', footerHeight)
    getMainClasses();
    addNavigation(navBtnArray,sectionArray); 
    showSection($(sectionArray[0]));
}

function getMainClasses(){
    if($('#template>main').attr('class-in')){classIn = $('#template>main').attr('class-in')}
    if($('#template>main').attr('class-out')){classOut = $('#template>main').attr('class-out')}
}
function addNavigation(navBtnArray,sectionArray){
    for(var i = 0;i < navBtnArray.length;i++){
        $(navBtnArray[i]).click({section:sectionArray[i]},buttonClicked);   
    }
}

function buttonClicked(event){
    showSection(event.data.section);
}

function showSection(section){
    var section = $(section).clone(true); 
    section.addClass(classIn);
    $('body>main').prepend(section);
    var sectionHeight = $(section).height();
    $('body>main>section:nth-child(2)').css('height',sectionHeight);
    $('body>main>section:nth-child(2)').css('overflow','hidden');
    $('body>main>section:nth-child(2)').removeClass(classIn);
    $('body>main>section:nth-child(2)').addClass(classOut);
    $('body>main>section:nth-child(3)').remove();
}