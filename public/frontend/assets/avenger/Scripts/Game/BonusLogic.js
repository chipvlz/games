//Xử lý logic bonus game
(function (scope, $) {
	window.BonusLogic = {};

	//Thông số các item bạch tuộc
	//x, y: tọa độ container
	//w, h: chiều dài, chiều cao
	//effx, effy: tọa độ effect đạn nổ
	//prizex, prizey: tọa độ vị trí hiện tiền
	//jpx, jpy: tọa độ hiển thị skull, jackpot
	var itemPos = [
		    //0
		    { x: 350, y: 275, w: 302, h: 310, effx: 200, effy: 150, prizex: 500, prizey: 275, jpx: 550, jpy: 375 },
		    //1
		    { x: 320, y: 275, w: 98, h: 185, effx: 65, effy: 115, prizex: 320, prizey: 275, jpx: 350, jpy: 325 },
		    //2
		    { x: 150, y: 275, w: 180, h: 255, effx: 130, effy: 150, prizex: 225, prizey: 275, jpx: 250, jpy: 350 },
		    //3
		    { x: 25, y: 325, w: 300, h: 250, effx: 100, effy: 170, prizex: 25, prizey: 375, jpx: 125, jpy: 425 },
		    //4
		    { x: 325, y: 325, w: 155, h: 290, effx: 50, effy: 180, prizex: 350, prizey: 350, jpx: 375, jpy: 450 },
		    //5
		    { x: 150, y: 425, w: 140, h: 180, effx: 75, effy: 130, prizex: 150, prizey: 425, jpx: 200, jpy: 475 },
		    //6
		    { x: 600, y: 325, w: 190, h: 130, effx: 125, effy: 65, prizex: 650, prizey: 325, jpx: 700, jpy: 350 },
		    //7
		    { x: 650, y: 325, w: 260, h: 180, effx: 175, effy: 75, prizex: 775, prizey: 325, jpx: 825, jpy: 350 },
		    //8
		    { x: 575, y: 400, w: 176, h: 180, effx: 110, effy: 120, prizex: 650, prizey: 400, jpx: 700, jpy: 425 },
		    //9
		    { x: 750, y: 350, w: 210, h: 245, effx: 175, effy: 155, prizex: 850, prizey: 350, jpx: 850, jpy: 575 },
		    //10
		    { x: 650, y: 400, w: 184, h: 225, effx: 100, effy: 160, prizex: 725, prizey: 400, jpx: 750, jpy: 550 },
		    //11
		    { x: 400, y: 450, w: 282, h: 155, effx: 140, effy: 100, prizex: 500, prizey: 450, jpx: 550, jpy: 500 }
	],
		canShoot,
		currentPrize,
		stopByTimer,
		intervalTimer;
	var intervalBanYeuQuai;
	var timeoutFinishBonus;
    var moneyWinInterval;

	var bonusLogic = function (data) {
		initBonusGame((data && data.BonusPrize) ? data.BonusPrize : 0);
		renderBonus((data && data.SelectedItems) ? data.SelectedItems : '', data);
	}

	bonusLogic.prototype.ResultPlayBonus = function (data) {
		canShoot = false;
	    updateBonusJackpot(data.Jackpot);

		GameAudio.Play('Sound.Bonus.CannonFire');
		var index = data.ItemID;

	    var divClass = "";
	    if (index < 10) {
	        divClass = "quai0" + index;
	    } else {
	        divClass = "quai" + index;
	    }
	    var prizeValue = data.BonusTotalPrize;

	    $('.list_quaivat .' + divClass).addClass('select');
	    $('.list_quaivat .' + divClass).attr('data',"0");
	    if (data.TypeID == 1) {
	        //Money
	        startTimer(15);
	        countUpBonusPrize(currentPrize, currentPrize + prizeValue);
	        currentPrize += prizeValue;
	        $('.list_quaivat .' + divClass + '.select span').html(CommonUtility.formatMoney(prizeValue));
	    }
	    if (data.TypeID == 2) {
	        //Stop
	        $('.list_quaivat .' + divClass + '.select span').html('<img src="' + Config.Url.ROOT + 'images/MiniGame/DauLau.png" alt=""/>');
	    }
	    if (data.TypeID == 3) {
	        //Jackpot
	        $('.list_quaivat .' + divClass + '.select span').html('<img src="' + Config.Url.ROOT + 'images/MiniGame/TayJack.png" alt=""/>');
	    }
	    $('.list_quaivat .' + divClass + '.select strong').show(200);
	    $('.list_quaivat .' + divClass + '.select .list_img_banquai img').first().addClass('active');
	    var setBanQuai = function () {
	        if ($('.list_quaivat .' + divClass + '.select .list_img_banquai > img').last().hasClass('active')) {
	            canShoot = true;
	            if (data.TypeID == 1) {
	                //Money
	                GameAudio.Play('Sound.Bonus.Money');
	            }
	            if (data.TypeID == 2) {
	                //Stop
	                $('.list_quaivat .quai').attr('data', "0");
	                GameAudio.Play('Sound.Bonus.Skull');
	                App.gameHub.server.FinishBonus().done(function (data) {
	                    console.log('FinishBonus:', data);
	                });
	            }
	            if (data.TypeID == 3) {
	                //Jackpot

	                Config.WinJackpot = true;
	                $('.list_quaivat .quai').attr('data', "0");
	                App.Bonus.ShowJackpotEffect(data.BonusTotalPrize);
	            }
	            clearInterval(intervalBanYeuQuai);
	        } else {
	            $('.list_quaivat .' + divClass + '.select .list_img_banquai > img.active').removeClass('active').next().addClass('active');
	        }
	    };
	    intervalBanYeuQuai = setInterval(setBanQuai, 50);
	    $('.list_quaivat .' + divClass + '.select span').delay(100).fadeIn(200);
	   
	}

    bonusLogic.prototype.ShowJackpotEffect = function (totalPrize) {

        if (intervalTimer) {
            clearInterval(intervalTimer);
            delete intervalTimer;
        }
        setTimeout(function () {
            $.ajax({
                type: "GET",
                url: Config.Url.ROOT + 'Home/EfectJackpot',
                crossDomain: true,
                xhrFields: {
                    withCredentials: true
                },
                success: function (data) {
                    GameAudio.Play('Sound.Jackpot');
                    $('#avengerBonusWin').html(data);
                    $("#avengerBonusWin").show();

                    if (intervalBanYeuQuai) {
                        clearInterval(intervalBanYeuQuai);
                        delete intervalBanYeuQuai;
                    }
                    $('#avengerTotalJackpotWin').html(CommonUtility.formatMoney(totalPrize));
                    intervalBanYeuQuai = setInterval(function () {
                            if ($('.effect_thang .bg_effect img').last().hasClass('active')) {
                                $('.effect_thang .bg_effect img.active').removeClass('active');
                                $('.effect_thang .bg_effect img').first().addClass('active');
                            } else {
                                $('.effect_thang .bg_effect img.active').removeClass('active').next()
                                    .addClass('active');
                            }
                        },
                        50);
                    if (moneyWinInterval) {
                        clearInterval(moneyWinInterval);
                        delete moneyWinInterval;
                    }
                    moneyWinInterval = setInterval(function () {
                        if ($('.effect_thang .xutung img').last().hasClass('active')) {
                            $('.effect_thang .xutung img.active').removeClass('active');
                            $('.effect_thang .xutung img').first().addClass('active');
                        } else {
                            $('.effect_thang .xutung img.active').removeClass('active').next().addClass('active');
                        }
                    }, 50);
                    $('.effect_Win_trungjackpot').unbind("click");
                    $('.effect_Win_trungjackpot').click = function () {
                        App.Bonus.HideJackpotEffect();
                    }
                    $('.effect_thang img').unbind("click");
                    $('.effect_thang img').click = function () {
                        App.Bonus.HideJackpotEffect();
                    }
                },
                fail: function (fail) {
                    console.log(fail);
                }
            });
        }, 1000);
    }
    bonusLogic.prototype.HideJackpotEffect = function (data) {
        $("#avengerBonusWin").hide();
        $("#avengerBonusWin").html("");

        if (intervalBanYeuQuai) {
            clearInterval(intervalBanYeuQuai);
            delete intervalBanYeuQuai;
        }
        if (moneyWinInterval) {
            clearInterval(moneyWinInterval);
            delete moneyWinInterval;
        }

        App.gameHub.server.FinishBonus().done(function (data) {
            console.log('IsFinishBonus:', data);
        });
    }
	bonusLogic.prototype.ResultFinishBonus = function (data) {
		currentPrize = data.BonusTotalPrize;
		if (intervalTimer) {
			clearInterval(intervalTimer);
			delete intervalTimer;
		}
		$('#content-bonus-timer').hide();

		Config.WinJackpot = data.IsJackpot;
		if (data.IsJackpot) {
		    App.Bonus.ShowJackpotEffect(currentPrize);
		} else {
		    App.Bonus.FinishBonusMessage(currentPrize);
		}

		
	}

    bonusLogic.prototype.FinishBonusMessage = function(totalPrizeValue) {
        $(".avg_popup_kt_sanjackpot").show();
        $("#avengerTotalBonusWin").html(CommonUtility.formatMoney(totalPrizeValue));
        if (Config.IsAutoSpin) {
            timeoutFinishBonus = setTimeout(function () {
                App.Bonus.HideBonus();
            }, 3000);
        }
    }

    bonusLogic.prototype.HideBonus = function () {
        if (timeoutFinishBonus) {
            clearTimeout(timeoutFinishBonus);
            delete timeoutFinishBonus;
        }
        StopBonusTheme();
        GuiContents.HideBonusGame();
        GuiContents.AutoSpin();
        //GameAudio.Play("Sound.DisappearHunter");
    }

	bonusLogic.prototype.UpdateBonusJackpot = function (jackpot) {
        var currJackpot = CommonUtility.parseIntMoney($('#avengerJackpotBonus').text());
        if (jackpot > 0) {
            var countUpJackpot = new CDCountUp(null, currJackpot, jackpot, 0, 2.5, options, function (value) {
                $('#avengerJackpotBonus').text(CommonUtility.formatMoney(value));
            });
            countUpJackpot.start();
        }
    }
    function updateBonusJackpot (jackpot) {
	    var currJackpot = CommonUtility.parseIntMoney($('#avengerJackpotBonus').text());
		if (jackpot > 0) {
			var countUpJackpot = new CDCountUp(null, currJackpot, jackpot, 0, 2.5, options, function (value) {
			    $("#avengerJackpotBonus").text(CommonUtility.formatMoney(value));
			});
			countUpJackpot.start();
		}
	}

	function initBonusGame(bonusPrize) {
		//Setup initialize value
		Config.CurrentState = 4;
		PlayBonusTheme();
		currentPrize = 0;
		stopByTimer = false;
		if (bonusPrize > 0) {
			currentPrize = bonusPrize;
			countUpBonusPrize(0, currentPrize);
		}
		canShoot = false;
	}

	function PlayBonusTheme() {
		GameAudio.Stop('Music.BGM.MainGame');
		GameAudio.Play('Music.BGM.BonusGame', 0.35, 1);
	}

	function StopBonusTheme() {
		GameAudio.Stop('Music.BGM.BonusGame');
		GameAudio.Play('Music.BGM.MainGame', 0.35, 1);
	}

	function renderBonus(selectedItems, data) {
	    $.ajax({
	        type: "GET",
	        url: Config.Url.ROOT + 'Home/ShowBonusGame',
	        crossDomain: true,
	        xhrFields: {
	            withCredentials: true
	        },
	        success: function (dataHtml) {
	            //GameAudio.Play("Sound.AppearHunter");
	            $('#BonusGameAvenger').html(dataHtml);
	            $('#BonusGameAvenger').show();
	            $('#avengerMainGame').hide();
	            updateBonusJackpot(App.CD2AccInfo.SlotInfo.Jackpot);
	            canShoot = true;
	            startTimer(15);
	            if (data != null && data.CurrentStep > 0 && selectedItems != '' && selectedItems.split(',').length > 0) {
	                var prizeValue = data.BonusPrize;
	                countUpBonusPrize(0, prizeValue);
	                currentPrize += prizeValue;
	                $.each(selectedItems.split(','), function(key, value) {
	                    var divClass = "";
	                    if (value < 10) {
	                        divClass = "quai0" + value;
	                    } else {
	                        divClass = "quai" + value;
	                    }
	                    $('.list_quaivat .' + divClass).addClass('select');
	                    $('.list_quaivat .' + divClass).attr('data', "0");
	                    //Money
	                    $('.list_quaivat .' + divClass + '.select span').html(data.StepDetail[key].BonusPrize);

	                    $('.list_quaivat .' + divClass + '.select strong').show(200);
	                    $('.list_quaivat .' + divClass + '.select span').show();
	                    $('.list_quaivat .' + divClass + ' .list_img_banquai').hide();
	                });
                }
	            $('.list_quaivat span').click(function () {
                    if (canShoot) {
                        var item = $(this).attr('data');
                        if (item > 0) {
                            App.gameHub.server.PlayBonusGame(item).done(function (data) {
                                console.log('PlayBonus:', data);
                            });
                        }
                    }
	            });
	        },
	        fail: function (fail) {
	            console.log(fail);
	        }
	    });

	}


	function startTimer(time) {
		if (intervalTimer) {
			clearInterval(intervalTimer);
			delete intervalTimer;
		}
		var counter = time - 1;
		$('#bonusTimerAvenger').text(time);
		intervalTimer = setInterval(function () {
			$('#bonusTimerAvenger').text(counter);
			if (counter <= 0) {
				if (intervalTimer) {
					clearInterval(intervalTimer);
					delete intervalTimer;
				}
				stopByTimer = true;
				App.gameHub.server.FinishBonus().done(function (data) {
					console.log('FinishBonus:', data);
				});
			} else {
				counter--;
			}
		}, 1000);
	}

	function countUpBonusPrize(start, end, y, left) {

		var countUpPrize = new CDCountUp(null, start, end, 0, 0.6, options, function (value) {
		    $("#avengerTotalWin").html(CommonUtility.formatMoney(value));
		});
		countUpPrize.start();
	}


	window.BonusLogic = bonusLogic;
})(window, jQuery);