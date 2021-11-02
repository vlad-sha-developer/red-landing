/**
 * Created by Frem on 13.06.2016.
 */



var dropMenu = document.getElementById('roll_block');
var drop_btn = document.getElementById('drop_btn');
var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');
var forth = document.getElementById('forth');
var dot = document.getElementById('dot');
var check = document.getElementById('check');
var body = document.getElementsByTagName('body')[0];
var fl_right = document.getElementsByClassName('fl_right');
var insertBef =  document.getElementsByClassName('itit')[0];
var item = [];
var container =  [];
var repl =  document.getElementsByClassName('repl');
var scrolled = window.pageYOffset || document.documentElement.scrollTop;



drop_btn.onclick = function(){
    if(parseInt(dropMenu.style.top) === -89){
        dropMenu.style.animationName = 'down';
        dropMenu.style.top = '80px';
    } else {
        dropMenu.style.animationName = 'up';
        dropMenu.style.top = '-89px'

    }
};


var CharTimeout = 50; // скорость печатания
var StoryTimeout = 2000; // время ожидания перед переключением

var Summaries = new Array();
var SiteLinks = new Array();

Summaries[0] = 'Всего за 5 дней';
Summaries[1] = 'Не дорого, только: 300$';
Summaries[2] = 'Быстро и качественно';
Summaries[3] = 'Красиво и Эффективно';

function startTicker(){
    massiveItemCount =  Number(Summaries.length); //количество элементов массива
    // Определяем значения запуска
    CurrentStory     = -1;
    CurrentLength    = 0;
    // Расположение объекта
    AnchorObject     = document.getElementById("word_to_write");
    runTheTicker();
}
// Основной цикл тиккера
function runTheTicker(){
    var myTimeout;
    // Переход к следующему элементу
    if(CurrentLength == 0){
        CurrentStory++;
        CurrentStory      = CurrentStory % massiveItemCount;
        StorySummary      = Summaries[CurrentStory].replace(/"/g,'-');
        AnchorObject.href = SiteLinks[CurrentStory];
    }
    // Располагаем текущий текст в анкор с печатанием
    AnchorObject.innerHTML = StorySummary.substring(0,CurrentLength) + znak();
    // Преобразуем длину для подстроки и определяем таймер
    if(CurrentLength != StorySummary.length){
        CurrentLength++;
        myTimeout = CharTimeout;
    } else {
        CurrentLength = 0;
        myTimeout = StoryTimeout;
    }
    // Повторяем цикл с учетом задержки
    setTimeout("runTheTicker()", myTimeout);
}
// Генератор подстановки знака
function znak(){
    if(CurrentLength == StorySummary.length) return "";
    else return "|";
}
startTicker();

window.onload = function(){
  //  document.getElementsByClassName('notebook')[0].style.animationName = 'section_animation2';
  //  document.getElementsByClassName('notebook')[0].style.opacity = '1';
    document.getElementsByClassName('f-text')[0].style.animationName = 'section_animation';
    document.getElementsByClassName('f-text')[0].style.opacity = '1';
    document.getElementsByClassName('counter_header')[0].style.animationName = 'show_top';
    document.getElementsByClassName('counter_header')[0].style.opacity = '1';
   // document.getElementsByClassName('navbar-collapse')[0].style.animationName = 'section_animation';
  //  document.getElementsByClassName('navbar-collapse')[0].style.opacity = '1';
   // document.getElementsByClassName('logo')[0].style.animationName = 'section_animation2';
   // document.getElementsByClassName('logo')[0].style.opacity = '1';

if ( parseInt(body.clientWidth) <= 767){

for(var w = 0; w < repl.length ; w++){
    item[w] = document.createElement('div');
    item[w].className = 'item';
    container[w] = document.createElement('div');
    container[w].className = 'container';
    container[w].appendChild(repl[w]);
    item[w].appendChild(container[w]);
    document.getElementById('car_inner').insertBefore(item[w], insertBef)
}
    container[0].appendChild(repl[0])
}

if ( parseInt(body.clientWidth) <= 600){
    for(var i = 0; i <  fl_right.length  ; i++  ){
        fl_right[i].setAttribute('class', 'fl_left')
    }
    document.getElementsByClassName('fl4')[0].setAttribute('class', 'fl_left')
}
};
window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    var line2 = document.getElementsByClassName('line2')[0];
    console.log(scrolled);
    if(scrolled > 4340 ){
        line2.style.width = '100%';
        first.style.animationName = 'd';
        second.style.animationName = 'd';
        third.style.animationName = 'd';
        forth.style.animationName = 'd';
        dot.style.animationName = 'dot';
        check.style.animationName = 'dot';

    }
    if ( scrolled > 120){
        document.getElementsByClassName('counter')[0].style.animationName = 'show_top';
        document.getElementsByClassName('counter')[0].style.opacity = '1';
        document.getElementsByClassName('counter_form')[0].style.animationName = 'show_bot';
        document.getElementsByClassName('counter_form')[0].style.opacity = '1';
        document.getElementsByClassName('text_under_form')[0].style.animationName = 'show_bot';
        document.getElementsByClassName('text_under_form')[0].style.opacity = '1';
    }
    if ( scrolled > 460){
        document.getElementsByClassName('artic_here')[0].style.animationName = 'section_animation2';
        document.getElementsByClassName('artic_here')[0].style.opacity = '1';
        document.getElementsByClassName('artic_here')[1].style.animationName = 'show_top';
        document.getElementsByClassName('artic_here')[1].style.opacity = '1';
        document.getElementsByClassName('artic_here')[2].style.animationName = 'section_animation';
        document.getElementsByClassName('artic_here')[2].style.opacity = '1';
        document.getElementsByClassName('artic_here')[3].style.animationName = 'section_animation2';
        document.getElementsByClassName('artic_here')[3].style.opacity = '1';
        document.getElementsByClassName('artic_here')[4].style.animationName = 'show_bot';
        document.getElementsByClassName('artic_here')[4].style.opacity = '1';
        document.getElementsByClassName('artic_here')[5].style.animationName = 'section_animation';
        document.getElementsByClassName('artic_here')[5].style.opacity = '1';
    }
    if ( scrolled > 890){
        document.getElementsByClassName('r_ar')[0].style.animationName = 'arrow_r';
        document.getElementsByClassName('r_ar')[0].style.opacity = '1';
        document.getElementsByClassName('l_ar')[0].style.animationName = 'arrow_l';
        document.getElementsByClassName('l_ar')[0].style.opacity = '1';
    }
    if ( scrolled > 1357){
        document.getElementsByClassName('fl_left')[0].style.animationName = 'section_animation2';
        document.getElementsByClassName('fl_left')[0].style.opacity = '1';
    }
    if ( scrolled > 1560){
        document.getElementsByClassName('fl_right')[0].style.animationName = 'section_animation';
        document.getElementsByClassName('fl_right')[0].style.opacity = '1';
    }
    if ( scrolled > 2021){
        document.getElementsByClassName('fl_left')[1].style.animationName = 'section_animation2';
        document.getElementsByClassName('fl_left')[1].style.opacity = '1';
    }
    if ( scrolled > 2250){
        document.getElementsByClassName('fl_right')[1].style.animationName = 'section_animation';
        document.getElementsByClassName('fl_right')[1].style.opacity = '1';
    }
    if ( scrolled > 3033){
        document.getElementsByClassName('fl_left')[2].style.animationName = 'section_animation2';
        document.getElementsByClassName('fl_left')[2].style.opacity = '1';
    }
    if ( scrolled > 3650){
        document.getElementsByClassName('fl_right')[2].style.animationName = 'section_animation';
        document.getElementsByClassName('fl_right')[2].style.opacity = '1';
    }

    if ( scrolled > 4393){
        document.getElementsByClassName('way_to_shop')[0].style.animationName = 'show_top';
        document.getElementsByClassName('way_to_shop')[0].style.opacity = '1';
    }
    if ( scrolled > 4892){
        document.getElementsByClassName('templates_header')[0].style.animationName = 'show_top';
        document.getElementsByClassName('templates_header')[0].style.opacity = '1';
    }
    if ( scrolled > 5125){
        document.getElementsByClassName('tabs')[0].style.animationName = 'show_bot';
        document.getElementsByClassName('tabs')[0].style.opacity = '1';
    }
    if ( scrolled > 5753){
        document.getElementsByClassName('templates_header')[1].style.animationName = 'show_top';
        document.getElementsByClassName('templates_header')[1].style.opacity = '1';
        document.getElementsByClassName('blog_slider')[0].style.animationName = 'section_animation';
        document.getElementsByClassName('blog_slider')[0].style.opacity = '1';
    }
    if ( scrolled > 6218){
        document.getElementsByClassName('templates_header')[2].style.animationName = 'show_top';
        document.getElementsByClassName('templates_header')[2].style.opacity = '1';
        document.getElementsByClassName('about_content')[0].style.animationName = 'section_animation2';
        document.getElementsByClassName('about_content')[0].style.opacity = '1';
        document.getElementsByClassName('ab_a')[0].style.animationName = 'section_animation';
        document.getElementsByClassName('ab_a')[0].style.opacity = '1';
    }
    if ( scrolled > 6480){
        document.getElementsByClassName('map_wrapper')[0].style.animationName = 'show_top';
        document.getElementsByClassName('map_wrapper')[0].style.opacity = '1';
    }
    if ( scrolled > 6919){
        document.getElementsByClassName('counter_header')[1].style.animationName = 'show_top';
        document.getElementsByClassName('counter_header')[1].style.opacity = '1';
    }
    if ( scrolled > 7112){
        document.getElementsByClassName('counter')[1].style.animationName = 'show_top';
        document.getElementsByClassName('counter')[1].style.opacity = '1';
    }
    if ( scrolled > 7346){
        document.getElementsByClassName('counter_form')[1].style.animationName = 'show_bot';
        document.getElementsByClassName('counter_form')[1].style.opacity = '1';
        document.getElementsByClassName('text_under_form')[1].style.animationName = 'show_bot';
        document.getElementsByClassName('text_under_form')[1].style.opacity = '1';
    }
    if ( scrolled > 7567){
        document.getElementsByClassName('footer_wrapper')[0].style.animationName = 'show_top';
        document.getElementsByClassName('footer_wrapper')[0].style.opacity = '1';

    }
};


