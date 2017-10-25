//Marcar seção visível
function checkIfVisibleOnViewport(elem, funcIfYes, funcIfNo)
{
  
    //Current viewport info
    //Altura da tela
    var ScreenHeight = $(window).height();
    //Quantos pixels foram deslocados na página
    var ScrolledPixels = $(this).scrollTop();
    //Último pixel visível da tela
    var LastVisiblePixel = (ScreenHeight + ScrolledPixels);

    //Element info
    //Tamanho do elemento
    var ElementsHeight = elem.height();
    //Quantos pixels o elemento esta do topo da página
    var ElementsDistanceToTop = elem.offset().top;
    //Último pixel visível do elemento
    var ElementsLastVisiblePixel = (ElementsHeight + ElementsDistanceToTop);


    //Checking if at least partially visible (not fully)
    if (ElementsDistanceToTop < LastVisiblePixel &&
        ElementsLastVisiblePixel > ScrolledPixels)
        funcIfYes();
    else
        funcIfNo();

}

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.menuFixo').hasClass('open-nav')) {
        $('.menuFixo').removeClass('open-nav');
    } else {
        $('.menuFixo').addClass('open-nav');
    }
});

$('.menuFixo li a').click(function() {
    if ($('.menuFixo').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.menuFixo').removeClass('open-nav');
    }
});

// Navigation Scroll - ljepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

$('.logo').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});