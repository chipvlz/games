$(document).ready(function(){
	$('.ads').slick({
		dots:true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
	});
	$('.gamelist').slick({
		dots:false,
		arrows: true,	
		slidesToShow: 1,
	});
	$('.cacsukien').slick({
		dots:false,
		arrows: true,	
		slidesToShow: 4,
  		slidesToScroll: 4,
	});
	$('#allgame').show();
	$('.games .gamemenu li').mousedown(function(){
		$('.games .gamemenu li').removeAttr('id', 'currenttab');
		$(this).attr('id', 'currenttab');
		var x = $(this).attr("alt");
		/*alert(x);*/
		$('.gamelist').hide();
		$(document.getElementById(x)).show();
	});	
	$('#homqua').show();
	$('.header li').mousedown(function(){
		$('.header li').removeAttr('id', 'currenttabsukien');
		$(this).attr('id', 'currenttabsukien');
		var x = $(this).attr("alt");
		/*alert(x);*/
		$('.noidung').hide();
		$(document.getElementById(x)).show();
	});	
	$('#homqua').show();
	$('.header li').mousedown(function(){
		$('.header li').removeAttr('id', 'currenttabsukien');
		$(this).attr('id', 'currenttabsukien');
		var x = $(this).attr("alt");
		/*alert(x);*/
		$('.noidung').hide();
		$(document.getElementById(x)).show();
	});	
	$('#quyenloi').show();
	$('.tab .menu2 li').mousedown(function(){
		$('.tab .menu2 li').removeAttr('id', 'currenttabvip');
		$(this).attr('id', 'currenttabvip');
		var x = $(this).attr("alt");
		/*alert(x);*/
		$('.khungvip').hide();
		$(document.getElementById(x)).show();
	});	
	var winheight = $(window).height();
	var winwidth = ($(window).width() - 1280)/2;
	$(".blackscreen").css("height",winheight);
	$( function() {
    	$( ".drag" ).draggable();
  	} ); 
	(function($){
        $(window).on("load",function(){
            $(".khungscroll").mCustomScrollbar(						
			);
        });
		
    })(jQuery);
	$('.xem').click(function(){
              $('.ans').hide();
              $('#ans'+jQuery(this).attr('target')).show();
        });
	
	
});

$(document).ready(function () {
    //$('.minigameall a img').first().addClass('active');
    //setInterval(function () {
    //    if ($('.minigameall a.minigamebuttondrag1 img').last().hasClass('active')) {
    //        $('.minigameall a.minigamebuttondrag1 img.active').removeClass('active');
    //        $('.minigameall a.minigamebuttondrag1 img').first().addClass('active');
    //    } else {
    //        $('.minigameall a.minigamebuttondrag1 img.active').removeClass('active').next().addClass('active');
    //    }
    //}, 50);
    $('.minigameall .allminigame_img img').first().addClass('active');
    setInterval(function () {
        if ($('.minigameall .allminigame_img img').last().hasClass('active')) {
            $('.minigameall .allminigame_img img.active').removeClass('active');
            $('.minigameall .allminigame_img img').first().addClass('active');
        } else {            
            $('.minigameall .allminigame_img img.active').removeClass('active').next().addClass('active');
        }
    }, 50);

    $('.menubot ul li.spin .list_img img').first().addClass('active');
    setInterval(function () {
        if ($('.menubot ul li.spin .list_img img').last().hasClass('active')) {
            $('.menubot ul li.spin .list_img img.active').removeClass('active');
            $('.menubot ul li.spin .list_img img').first().addClass('active');
        } else {
            $('.menubot ul li.spin .list_img img.active').removeClass('active').next().addClass('active');
        }
    }, 50);

    $('.ads').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.gamelist').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
    });
    $('.cacsukien').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
    });
    $('#allgame').show();
    $('.games .gamemenu li').mousedown(function () {
        $('.games .gamemenu li').removeAttr('id', 'currenttab');
        $(this).attr('id', 'currenttab');
        var x = $(this).attr("alt");
        /*alert(x);*/
        $('.gamelist').hide();
        $(document.getElementById(x)).show();
    });
    $('#homqua').show();
    $('.header li').mousedown(function () {
        $('.header li').removeAttr('id', 'currenttabsukien');
        $(this).attr('id', 'currenttabsukien');
        var x = $(this).attr("alt");
        /*alert(x);*/
        $('.noidung').hide();
        $(document.getElementById(x)).show();
    });
    $('#homqua').show();
    $('.header li').mousedown(function () {
        $('.header li').removeAttr('id', 'currenttabsukien');
        $(this).attr('id', 'currenttabsukien');
        var x = $(this).attr("alt");
        /*alert(x);*/
        $('.noidung').hide();
        $(document.getElementById(x)).show();
    });
    $('#quyenloi').show();
    $('.tab .menu2 li').mousedown(function () {
        $('.tab .menu2 li').removeAttr('id', 'currenttabvip');
        $(this).attr('id', 'currenttabvip');
        var x = $(this).attr("alt");
        /*alert(x);*/
        $('.khungvip').hide();
        $(document.getElementById(x)).show();
    });
    $('#napfcoin').show();
    $('.tab .menu4 li').mousedown(function () {
        $('.tab .menu4 li').removeAttr('id', 'currenttabnapcoin');
        $(this).attr('id', 'currenttabnapcoin');
        var x = $(this).attr("alt");
        /*alert(x);*/
        $('.noidung').hide();
        $(document.getElementById(x)).show();
    });
    $('#thedienthoai').show();
    $('.loaithe a').mousedown(function () {
        $('.loaithe a').removeAttr('id', 'currentloaithe');
        $(this).attr('id', 'currentloaithe');
        var x = $(this).attr("alt");
        /*alert(x);*/
        $('.khungchonthe').hide();
        $(document.getElementById(x)).show();
    });
    var winheight = $(window).height();
    var winwidth = ($(window).width() - 1280) / 2;
    $(".blackscreen").css("height", winheight);
    $(function () {
        $(".drag").draggable();
    });
    (function ($) {
        $(window).on("load", function () {
            $(".khungscroll").mCustomScrollbar(
			);
        });

    })(jQuery);
    $('.xem').click(function () {
        $('.ans').hide();
        $('#ans' + jQuery(this).attr('target')).show();
    });


});






