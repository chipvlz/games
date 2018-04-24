<!doctype html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>VzonClub - @yield('title')</title>
    <meta name="Description" content="VzonClub - C?ng game may m?n d?i thu?ng uy tÌn v‡ minh b?ch nh?t hi?n nay - S? ki?n t?ng Giftcode m?i ng‡y!" />
    <link rel="Canonical" href="index.html" />
    <meta name="Author" content="Vzon Club" />
    <meta name="Robots" content="noodp" />
    <meta property="og:title" content="VzonClub - Quay Hu Th‡nh Tri?u Ph˙" />
    <meta property="og:description" content="VzonClub - C?ng game may m?n d?i thu?ng uy tÌn v‡ minh b?ch nh?t hi?n nay - S? ki?n t?ng Giftcode m?i ng‡y!" />
    <meta property="og:url" content="index.html" />
    <meta property="og:image" content="Contents/images/VZON_web.png" />
    <meta property="article:author" content="https://www.facebook.com/vzon.club/" />
    <meta property="og:type" content="website" />

    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-115047952-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-115047952-1');
    </script>

    <script>
        ! function(f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function() {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            '../connect.facebook.net/en_US/fbevents.js');
        fbq('init', '2065931266963517');
        fbq('track', 'PageView');
    </script>
    <noscript>
        <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=2065931266963517&amp;ev=PageView&amp;noscript=1" />
    </noscript>

    <link rel="icon" type="image/png" href="favicon.png" />
    <link href="{{ url('/frontend/assets') }}/Contents/css/StylePortal.css" rel="stylesheet" />
    <link href="{{ url('/frontend/assets') }}/Contents/css/slick.css" rel="stylesheet" />
    <link href="{{ url('/frontend/assets') }}/Contents/css/slick-theme.css" rel="stylesheet" />
    <link href="{{ url('/frontend/assets') }}/Contents/css/jquery.mCustomScrollbar.min.css" rel="stylesheet" />
    <script src="{{ url('/frontend/assets') }}/Scripts/jquery-3.2.1.min.js"></script>
    <script src="{{ url('/frontend/assets') }}/Scripts/jquery-ui.min.js"></script>
    <script src="{{ url('/frontend/assets') }}/Scripts/header.js"></script>
    <script src="{{ url('/frontend/assets') }}/Scripts/slick.js"></script>
    <script src="{{ url('/frontend/assets') }}/Scripts/luckySpin.js"></script>
    <script src="{{ url('/frontend/assets') }}/Scripts/jquery.mCustomScrollbar.concat.min.js"></script>
    <script src="{{ url('/frontend/assets') }}/Scripts/function.js"></script>
    <script src="../event.vzon.club/Events/EventAlpha/eventvuaphattai.js"></script>

	<script type="text/javascript">
		var showLoginForm = function(){
			$('.framedangnhap').css('display', 'block');
		}
		
		var closein = function(){
			$('.framedangnhap').css('display', 'none');
		}
	</script>
</head>

<body>
    <div id="divHeaderInfo" style="position: absolute; z-index: 2000; width: 100%;">
        <link href="{{ url('frontend/assets') }}/Contents/css/jquery-ui.min.css" rel="stylesheet">
        <link href="{{ url('frontend/assets') }}/Contents/css/style.css" rel="stylesheet">
        <link href="{{ url('frontend/assets') }}/Contents/css/style-popup.css" rel="stylesheet">
        <link href="{{ url('frontend/assets') }}/Contents/css/style-top.css" rel="stylesheet">
        <link href="{{ url('frontend/assets') }}/Contents/css/jquery.mCustomScrollbar.min.css" rel="stylesheet">
        <link href="{{ url('frontend/assets') }}/Contents/css/SupportStyles.css" rel="stylesheet">
        <script src="{{ url('frontend/assets') }}/Scripts/jquery.mCustomScrollbar.concat.min.js" type="text/javascript"></script>
        <script src="{{ url('frontend/assets') }}/Scripts/interact.min.js" type="text/javascript"></script>
        <script src="{{ url('frontend/assets') }}/Scripts/countUp.js" type="text/javascript"></script>
        <script src="{{ url('frontend/assets') }}/Scripts/md5.min.js" type="text/javascript"></script>
        <script src="{{ url('frontend/assets') }}/Scripts/jquery.paper.js" type="text/javascript"></script>
        <div class="responsivescaleHeader" id="headerDivScale">
            <div class="center-respon">
                <div class="cg-top" id="logout">
                    <div class="center">
                        <div class="logo">
                            <img src="http://vzon.club/Contents/images/VZON_web.png">
                        </div>
                        <div class="button">
                            <a href="javascript:void(0);" onclick="ShowLoginForm()" id="headerLoginBtn" class="dangnhap"></a>
                            <a href="javascript:void(0);" onclick="GlobalHeader.ShowRegisterPopup()" class="dangky"></a>
                        </div>
                        <div class="mxh">
                            <a href="javascript:void(0);" onclick="GlobalHeader.LoginOpenId(2)" class="gplus"></a>
                            <a href="javascript:void(0);" onclick="GlobalHeader.LoginOpenId(1)" class="facebook"></a>
                        </div>
                    </div>
                </div>
                <div class="popup">
                    <div class="center" id="headerContentPopup">
                        <div class="frame720 framedangnhap" style='display: none'>
                            <a class="closein" href="javascript:void(0);" onclick="closein()"></a>
                            <div class="noidung noidungdangnhap">
                                <p class="danhmuc">ƒêƒÉng Nh·∫≠p</p>
                                <div class="row">
                                    <input class="thongtin" type="text" placeholder="T‡i Kho?n (4-16 k˝ t?)" maxlength="16" value="" id="headerInputUser">
                                </div>
                                <div class="row">
                                    <input class="thongtin" type="password" placeholder="M?t Kh?u (4-18 k˝ t?)" value="" maxlength="18" id="headerInputPass">
                                </div>
                                <div class="row" id="headerDivCaptcha" style="display: none; margin-top: 10px">
                                    <input class="thongtin maxacnhan maxacnhandangky" type="text" placeholder="M„ x·c nh?n" value="" maxlength="3" id="headerCaptchaInput">
                                    <img src="" id="headerCaptchaImg" style="float: left; height: 50px; margin-top: 18px;margin-left: 12px;">
                                    <input type="hidden" id="headerCaptchaVerify">
                                    <a class="ref" href="javascript:void(0);" onclick="GlobalHeader.RefreshCaptcha()"><img src="http://vzon.club/Contents/images/ico-ref.png"></a>
                                </div>
                                <div id="headerDivErrorMessage" style="color: red; display: none; margin: 10px; text-align: center">
                                    <span style="font-size: 26px; margin: auto" id="headerErrorMessage"></span>
                                </div>
                                <div class="row">
                                    <a class="button" href="javascript:void(0)" onclick="GlobalHeader.LoginUser()"><img src="http://vzon.club/Contents/images/btn-dangnhap.png"></a>
                                    <a class="mxh" href="javascript:void(0);" onclick="GlobalHeader.LoginOpenId(1)"><img src="http://vzon.club/Contents/images/ico-fb.png"></a>
                                    <a class="mxh" href="javascript:void(0);" onclick="GlobalHeader.LoginOpenId(2)"><img src="http://vzon.club/Contents/images/ico-gplus.png"></a>
                                </div>
                                <div class="row">
                                    <a class="link" href="javascript:void(0)" onclick="GlobalHeader.ShowForgetPassword()">Qu√™n m·∫≠t kh·∫©u</a>
                                    <a class="link" href="javascript:void(0)" onclick="GlobalHeader.ShowRegisterPopup()">ƒêƒÉng k√Ω nhanh</a>
                                </div>
                            </div>
                        </div>
                        <script type="text/javascript">
                            $('#headerInputUser').on('keypress', function(e) {
                                var code = e.keyCode || e.which;
                                if (code == 13) {
                                    GlobalHeader.LoginUser();
                                }
                            });
                            $('#headerInputPass').on('keypress', function(e) {
                                var code = e.keyCode || e.which;
                                if (code == 13) {
                                    GlobalHeader.LoginUser();
                                }
                            });
                            $('#headerCaptchaInput').on('keypress', function(e) {
                                var code = e.keyCode || e.which;
                                if (code == 13) {
                                    GlobalHeader.LoginUser();
                                }
                            });
                            $('#headerInputSecureCode').on('keypress', function(e) {
                                var code = e.keyCode || e.which;
                                if (code == 13) {
                                    GlobalHeader.LoginUser();
                                }
                            });
                        </script>
                    </div>
                </div>
                <script type="text/javascript">
                    GlobalHeader.AccountId = 0;
                    configHeader.urlConfig.headerUrl = 'http://vzon.club/';
                    configHeader.urlConfig.authenUrl = 'http://authen.vzon.club/';
                </script>
            </div>
        </div>
        <script type="text/javascript">
            $(document).ready(function() {
                $(function() {
                    $(".drag").draggable({
                        start: function(event, ui) {
                            $(this).addClass('dragging');
                        }
                    });
                });

                $(".minigamebuttondrag1").click(function() {
                    if ($(this).parent().hasClass('dragging')) {
                        $(this).parent().removeClass('dragging');
                        return;
                    }
                    var popup = document.getElementById("headerPopupMinigames");
                    popup.classList.toggle("showMinigame");
                    popup.classList.toggle("hideMinigame");
                    if ($("#headerPopupMinigames").hasClass("showMinigame")) {
                        JackPotInfo.LoadNewData();
                    }
                });

                $(".hufapbuttondrag1").click(function() {
                    if ($(this).parent().hasClass('dragging')) {
                        $(this).parent().removeClass('dragging');
                        return;
                    }
                    var popup = document.getElementById("headerItemListJackpot");
                    popup.classList.toggle("showMingame2");
                    popup.classList.toggle("hideMingame2");
                    if ($("#headerItemListJackpot").hasClass("hideMingame2")) {
                        $("#headerItemListJackpot").hide();
                    } else {
                        $("#headerItemListJackpot").show();
                    }
                });
            })
        </script>
    </div>

    <div class="responsivescale" style="z-index: 200">
        <div class="center-respon">
            <div class="main">
                <div class="center">
                    <div class="noti">
                    </div>
                    <div class="content">
                        <div class="ads">
                            <div>
                                <a href="https://goo.gl/NKd2cZ" target="_blank"><img src="{{ url('/frontend/assets') }}/Contents/images/Banner/01.png" /></a>
                            </div>
                            <div>
                                <a href="https://goo.gl/NKd2cZ" target="_blank"><img src="{{ url('/frontend/assets') }}/Contents/images/Banner/02.png" /></a>
                            </div>
                            <div>
                                <a href="https://goo.gl/NKd2cZ" target="_blank"><img src="{{ url('/frontend/assets') }}/Contents/images/Banner/03.png" /></a>
                            </div>
                        </div>
                        <div class="games">
                            <div class="gamemenu">
                                <ul>
                                    <li id="currenttab" alt="allgame"><a href="javascript:void(0);">All Game</a></li>
                                    <li alt="slotgame"><a href="javascript:void(0);">Slot Game</a></li>
                                    <li alt="minigame"><a href="javascript:void(0);">Mini Game</a></li>
                                </ul>
                            </div>
                            <div class="gamelist" id="allgame">
                                <div class="gamepage">
                                    <div class="gameico"><img onclick="LuckyDiceGame.showHideLuckyDice()" src="{{ url('/frontend/assets') }}/Contents/images/Icon/TaiXiu.png" /></div>
                                    <div class="gameico">
                                        <img onclick="LongPhungGame.ShowHide(true)" src="{{ url('/frontend/assets') }}/Contents/images/Icon/LongPhung.png" />
                                    </div>
                                    <div class="gameico" onclick="window.open('vuaphattai.html','_blank')">
                                        <div class="info_game">
                                            <p id="jp_prizevalue_home_100_vuaphattai"></p>
                                            <p id="jp_prizevalue_home_1000_vuaphattai"></p>
                                            <p id="jp_prizevalue_home_10000_vuaphattai"></p>
                                        </div>
                                        <img src="{{ url('/frontend/assets') }}/Contents/images/Icon/VuaPhatTai.png" />
                                    </div>
                                    <div class="gameico">
                                        <div class="info_game">
                                        </div>
                                        <img src="{{ url('/frontend/assets') }}/Contents/images/Icon/Coming.png" />
                                    </div>
                                    <div class="gameico">
                                        <div class="info_game">
                                            <p id="jp_prizevalue_home_100_thienha"></p>
                                            <p id="jp_prizevalue_home_1000_thienha"></p>
                                            <p id="jp_prizevalue_home_10000_thienha"></p>
                                        </div>
                                        <img onclick="ThienHaGame.showHide()" src="{{ url('/frontend/assets') }}/Contents/images/Icon/ThienHa.png" />
                                    </div>
                                    <div class="gameico">
                                        <div class="info_game">
                                            <p id="jp_prizevalue_home_100_minipoker"></p>
                                            <p id="jp_prizevalue_home_1000_minipoker"></p>
                                            <p id="jp_prizevalue_home_10000_minipoker"></p>
                                        </div>
                                        <img onclick="MiniPokerGame.showHideGame()" src="{{ url('/frontend/assets') }}/Contents/images/Icon/MiniPoker.png" />
                                    </div>
                                    <div class="gameico" onclick="window.open('avenger/index.html','_blank')">
                                        <div class="info_game">
                                            <p id="jp_prizevalue_home_100_Avengers"></p>
                                            <p id="jp_prizevalue_home_1000_Avengers"></p>
                                            <p id="jp_prizevalue_home_10000_Avengers"></p>
                                        </div>
                                        <img src="{{ url('/frontend/assets') }}/Contents/images/Icon/Avengers.png" />
                                    </div>
                                    <div class="gameico"><img src="{{ url('/frontend/assets') }}/Contents/images/Icon/Coming.png" /></div>
                                </div>
                            </div>
                            <div class="gamelist" id="slotgame">
                                <div class="gamepage">
                                    <div class="gameico" onclick="window.open('vuaphattai.html','_blank')">
                                        <div class="info_game">
                                            <p id="jp_prizevalue_home2_100_vuaphattai"></p>
                                            <p id="jp_prizevalue_home2_1000_vuaphattai"></p>
                                            <p id="jp_prizevalue_home2_10000_vuaphattai"></p>
                                        </div>
                                        <img src="{{ url('/frontend/assets') }}/Contents/images/Icon/VuaPhatTai.png" />
                                    </div>
                                    <div class="gameico">
                                        <div class="info_game">
                                        </div>
                                        <img src="{{ url('/frontend/assets') }}/Contents/images/Icon/Coming.png" />
                                    </div>
                                    <div class="gameico">
                                        <div class="info_game">
                                            <p id="jp_prizevalue_home2_100_minipoker"></p>
                                            <p id="jp_prizevalue_home2_1000_minipoker"></p>
                                            <p id="jp_prizevalue_home2_10000_minipoker"></p>
                                        </div>
                                        <img onclick="MiniPokerGame.showHideGame()" src="{{ url('/frontend/assets') }}/Contents/images/Icon/MiniPoker.png" />
                                    </div>
                                    <div class="gameico"><img src="{{ url('/frontend/assets') }}/Contents/images/Icon/Coming.png" /></div>
                                    <div class="gameico"><img src="{{ url('/frontend/assets') }}/Contents/images/Icon/Coming.png" /></div>
                                    <div class="gameico"><img src="{{ url('/frontend/assets') }}/Contents/images/Icon/Coming.png" /></div>
                                    <div class="gameico" onclick="window.open('avenger/index.html','_blank')">
                                        <div class="info_game">
                                            <p id="jp_prizevalue_home_100_Avengers"></p>
                                            <p id="jp_prizevalue_home_1000_Avengers"></p>
                                            <p id="jp_prizevalue_home_10000_Avengers"></p>
                                        </div>
                                        <img src="{{ url('/frontend/assets') }}/Contents/images/Icon/Avengers.png" />
                                    </div>
                                    <div class="gameico"><img src="{{ url('/frontend/assets') }}/Contents/images/Icon/Coming.png" /></div>
                                </div>
                            </div>
                            <div class="gamelist" id="minigame">
                                <div class="gamepage">
                                    <div class="gameico"><img onclick="LuckyDiceGame.showHideLuckyDice()" src="{{ url('/frontend/assets') }}/Contents/images/Icon/TaiXiu.png" /></div>
                                    <div class="gameico"><img onclick="LongPhungGame.ShowHide(true)" src="{{ url('/frontend/assets') }}/Contents/images/Icon/LongPhung.png" /></div>
                                    <div class="gameico">
                                        <div class="info_game">
                                            <p id="jp_prizevalue_home3_100_minipoker"></p>
                                            <p id="jp_prizevalue_home3_1000_minipoker"></p>
                                            <p id="jp_prizevalue_home3_10000_minipoker"></p>
                                        </div>
                                        <img onclick="MiniPokerGame.showHideGame()" src="{{ url('/frontend/assets') }}/Contents/images/Icon/MiniPoker.png" />
                                    </div>
                                    <div class="gameico">
                                        <div class="info_game">
                                            <p id="jp_prizevalue_home3_100_thienha"></p>
                                            <p id="jp_prizevalue_home3_1000_thienha"></p>
                                            <p id="jp_prizevalue_home3_10000_thienha"></p>
                                        </div>
                                        <img onclick="ThienHaGame.showHide()" src="{{ url('/frontend/assets') }}/Contents/images/Icon/ThienHa.png" />
                                    </div>
                                    <div class="gameico"><img src="{{ url('/frontend/assets') }}/Contents/images/Icon/Coming.png" /></div>
                                    <div class="gameico"><img src="{{ url('/frontend/assets') }}/Contents/images/Icon/Coming.png" /></div>
                                    <div class="gameico"><img src="{{ url('/frontend/assets') }}/Contents/images/Icon/Coming.png" /></div>
                                    <div class="gameico"><img src="{{ url('/frontend/assets') }}/Contents/images/Icon/Coming.png" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bot">
                <div class="center">
                    <div class="menubot">
                        <ul>
                            <li>
                                <a href="javascript:void(0);" onclick="EventVqh.ShowLoginPopup()"><img src="{{ url('/frontend/assets') }}/Contents/images/EventIcon.png" />
                                    <br>S? Ki?n</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" onclick="GlobalHeader.ShowLoginPopup()"><img src="{{ url('/frontend/assets') }}/Contents/images/ico-daily.png" />
                                    <br>–?I L›</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" onclick="GlobalHeader.ShowLoginPopup()"><img src="{{ url('/frontend/assets') }}/Contents/images/ico-gc.png" />
                                    <br>GIFTCODE</a>
                            </li>
                            <li class="spin">
                                <p class="num" id="CurLuckySpin" style="display: none">0</p>
                                <a href="javascript:void(0);" onclick="GlobalHeader.ShowLoginPopup()" style=" z-index: 1; "> </a>
                                <div class="list_img" style=" width: 109px; position: absolute; height: 109px; ">
                                    <img class="active" src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_00.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_01.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_02.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_03.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_04.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_05.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_06.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_07.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_08.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_09.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_10.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_11.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_12.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_13.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_14.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_15.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_16.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_17.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_18.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_19.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_20.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_21.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_22.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_23.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_24.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_25.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_26.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_27.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_28.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_29.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_30.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_31.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_32.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_33.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_34.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_35.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_36.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_37.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_38.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_39.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_40.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_41.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_42.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_43.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_44.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_45.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_46.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_47.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_48.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_49.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_50.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_51.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_52.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_53.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_54.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_55.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_56.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_57.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_58.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_59.png" alt="" />
                                    <img src="{{ url('/frontend/assets') }}/Contents/images/VongQuayAll/VongQuayAll_60.png" alt="" />
                                </div>
                            </li>
                            <li>
                                <a href="http://vzon.net/" target="_blank"><img src="{{ url('/frontend/assets') }}/Contents/images/ico-tintuc.png" />
                                    <br>TIN T?C</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);"><img src="{{ url('/frontend/assets') }}/Contents/images/ico-hd.png" />
                                    <br>HU?NG D?N</a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/groups/vzon.club/" target="_blank"><img src="{{ url('/frontend/assets') }}/Contents/images/ico-hotro.png" />
                                    <br>H? TR?</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer">
                        <div class="os">
                            <a href="http://bit.ly/vzonclubapk2" target="_blank" class="android"><img src="{{ url('/frontend/assets') }}/Contents/images/ico-adroid.png" /></a>
                            <a href="javascrip:;" onclick="GlobalHeader.showIosDownload()" class="ios"><img src="{{ url('/frontend/assets') }}/Contents/images/ico-ios.png" /></a>
                            <a href="http://bit.ly/vzonclubPC" target="_blank" class="ios"><img src="{{ url('/frontend/assets') }}/Contents/images/windows-icon.png" /></a>
                        </div>
                        <div class="contact">
                            <div class="info"><img src="{{ url('/frontend/assets') }}/Contents/images/ico-info-fb.png" /><a href="https://www.facebook.com/vzon.club/" target="_blank">Vzon Fanpage</a></div>
                            <div class="info"><img src="{{ url('/frontend/assets') }}/Contents/images/ico-info-gr.png" /><a href="https://www.facebook.com/groups/vzon.club/" target="_blank">Vzon Club</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="fb-root"></div>
    <script>
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = '../connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.12&autoLogAppEvents=1';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    </script>

    <div class="fb-customerchat" page_id="2112075309027478" theme_color="#ff7e29" logged_in_greeting="Xin ch‡o! Ch˙ng tÙi cÛ th? gi˙p gÏ cho b?n?" logged_out_greeting="Xin ch‡o! Ch˙ng tÙi cÛ th? gi˙p gÏ cho b?n?">
    </div>
    <script type="text/javascript">
        $(document).ready(function() {
            var accountId = 0;
            var isLogin = 0;
            if (accountId > 0) {
                isLogin = 1;
            }
            var infoHeader = {
                ServiceId: 50001,
                UrlRoot: location.href,
                LoginUrl: 'http://vzon.club/' + 'Api/AccountApi/Login',
                LogoutUrl: 'http://vzon.club/' + 'Api/AccountApi/logout?servicesId=50001',
                IsLogin: isLogin,
                AccountId: accountId
            }
            GlobalHeader.InitHeader(infoHeader);
            GlobalHeader.getCurrentMail();
            spinLucky.getCurrentSpin();
            JackpotInfoHome.Init();
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
            $('.games .gamemenu li').mousedown(function() {
                $('.games .gamemenu li').removeAttr('id', 'currenttab');
                $(this).attr('id', 'currenttab');
                var x = $(this).attr("alt");
                /*alert(x);*/
                $('.gamelist').hide();
                $(document.getElementById(x)).show();
            });
            var winheight = $(window).height();
            var winwidth = ($(window).width() - 1280) / 2;
            $(".blackscreen").css("height", winheight);

            $('.xem').click(function() {
                $('.ans').hide();
                $('#ans' + jQuery(this).attr('target')).show();
            });
			
			

        })

		

    </script>
</body>

</html>