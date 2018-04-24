//Xử lý các sự kiện ở UI
var GuiContents = new function () {
    var timeoutPopup;
	this.BindEvents = function () {
		$('#btnSpinAvenger').unbind('click');
		$('#btnAutoSpinAvenger').unbind('click');
		$('#x2GameAvenger').unbind('click');
		$('.changeModePlay').unbind('click');

		$('#btnGuide').unbind('click');
		$('#btnBigWin').unbind('click');
		$('#btnHistory').unbind('click');
		$('.cd2_bangthuong').unbind('click');
		$("#changeRoomAvenger").unbind('click');

		$('#btnSpinAvenger').click(
            function () {
                GameAudio.Play('Sound.Button.BetChange');
                GuiContents.Spin();
            });
		$('.changeModePlay').click(GuiContents.ClickPlayTry);

		$('#btnGuide').click(function () {
		    GuiContents.ShowPanelGuide(1);
		});
		$('#btnBigWin').click(function () {
		    GuiContents.LoadBigWin(1, 0);
		});
		$('#btnHistory').click(function () {
		    GuiContents.LoadHistory(1);
		});
		$('.cd2_bangthuong').click(GuiContents.ShowPanelReward);
		$('#changeRoomAvenger').click(GuiContents.ShowPanelChangeRoom);

		$('#avengerBtnSpin').attr("src", Config.Url.ROOT + "images/button/btn_Quay.png");
	    //$('#btnAutoSpinAvenger').css('background', 'url(' + Config.Url.ROOT + 'images/Button/bt_TuQuay.png) no-repeat');
	    $('#x2GameAvenger img').attr('src', Config.Url.ROOT + 'images/button/bt_x2.png');

		if (App.CD2AccInfo) {
			$('#btnAutoSpinAvenger').click(GuiContents.ShowPanelAutoSpin);
			$('#x2GameAvenger').click(GuiContents.ShowX2Game);

			if (Config.IsAutoSpin && Config.TotalAutoSpin > 0) {
				$('#btnAutoSpinAvenger').unbind('click');
				$('.changeModePlay').unbind('click');
				$('#btnSpinAvenger').unbind('click');
			    $("#changeRoomAvenger").unbind('click');

				$('#avengerBtnSpin').attr("src", Config.Url.ROOT + "images/button/btn_DungQuay.png");
				//$('#btnAutoSpinAvenger').css('background', 'url(' + Config.Url.ROOT + 'images/Button/bt_TuQuayD.png) no-repeat');
				
				if (Config.IsAutoByServer) {
				    $('#btnGuide').unbind('click');
				    $('#btnBigWin').unbind('click');
				    $('#btnHistory').unbind('click');
				    $('.cd2_bangthuong').unbind('click');
				}
			}

			if (Config.TotalFreeSpin > 0) {
			    $('#btnSpinAvenger').unbind('click');
			    $("#changeRoomAvenger").unbind('click');
			    if ($('#btnSpinAvenger').hasClass('stop-wheel')) {
			        $('#btnSpinAvenger').removeClass('disable');
			    } else {
			        $('#btnSpinAvenger').addClass('disable');
			    }
			    $('#btnAutoSpinAvenger').unbind('click');
			    //$('#btnAutoSpinAvenger').css('background', 'url(' + Config.Url.ROOT + 'images/Button/bt_TuQuayD.png) no-repeat');
            }
			if (!Config.CanPlayDouble) {
			    $('#x2GameAvenger').unbind('click');
			    $('#x2GameAvenger img').attr('src', Config.Url.ROOT + 'images/button/bt_x2D.png');
			}

			if (Config.IsTry) {
			    $('#btnAutoSpinAvenger').unbind('click');
			    //$('#btnAutoSpinAvenger').css('background', 'url(' + Config.Url.ROOT + 'images/Button/bt_TuQuayD.png) no-repeat');
			}

			if (Config.CurrentState !== 0) {
			    $('#btnAutoSpinAvenger').unbind('click');
			    //$('#btnAutoSpinAvenger').css('background', 'url(' + Config.Url.ROOT + 'images/Button/bt_TuQuayD.png) no-repeat');
			}
		} else {
		    $('#btnAutoSpinAvenger').click(function () {
		        GameAudio.Play('Sound.Button.BetChange');
		        GuiContents.ShowPopup("Bạn chưa đăng nhập!", 5);
		    });
		    $('#x2GameAvenger').click(function () {
	                    GameAudio.Play('Sound.Button.BetChange');
		        GuiContents.ShowPopup("Bạn chưa đăng nhập!", 5);
		    });
		}
	}

    this.UnbindEvents = function () {
		$('#btnAutoSpinAvenger').unbind('click');
		$('#x2GameAvenger').unbind('click');
		$('.changeModePlay').unbind('click');
		$("#changeRoomAvenger").unbind('click');
        $('#x2GameAvenger img').attr('src', Config.Url.ROOT + 'images/button/bt_x2D.png');

        if (Config.IsAutoSpin) {
            $('#btnSpinAvenger').click(
                function () {
                    GameAudio.Play('Sound.Button.BetChange');
                    GuiContents.StopAuto();
                });
            $('#avengerBtnSpin').attr("src", Config.Url.ROOT + "images/button/btn_DungQuay.png");
            //$('#btnAutoSpinAvenger').css('background', 'url(' + Config.Url.ROOT + 'images/Button/bt_TuQuayD.png) no-repeat');
        } else {
            $('#btnSpinAvenger').unbind('click');
            $('#avengerBtnSpin').attr("src", Config.Url.ROOT + "images/button/btn_QuayD.png");
            //$('#btnAutoSpinAvenger').css('background', 'url(' + Config.Url.ROOT + 'images/Button/bt_TuQuayD.png) no-repeat');
        }
	}

	//Spin
    this.Spin = function () {
	    if (App.CD2AccInfo) {
	    	if (Config.CurrentState !== 0) {
	    		console.log('Can\'t spin, current state:', Config.CurrentState);
	    		return;
	    	}

	    	//GameAudio.Play("Sound.ReelStart");
	    	GuiContents.UnbindEvents();
	    	GuiContents.HideSetting();
	    	Config.CurrentState = 1;
	    	Config.CanPlayDouble = false;
	    	Config.IsAutoSpin = true;

	        $("#totalWinAvenger").html("0");
	    	App.gameHub.server.Spin(roomValue[Config.RoomId]);
	    } else {
	    	GuiContents.ShowPopup("Bạn chưa đăng nhập!", 5);
	    }
	}

    this.StopSpin = function () {
        $('#avengerBtnSpin').attr("src", Config.Url.ROOT + "images/button/btn_DungQuayD.png");
		App.Game.StopSpin();
	}

    this.AutoSpin = function () {
		//Tự động quay khi gặp freespin, hoặc đang auto trên thiết bị
		if (timeoutSpin) {
			clearTimeout(timeoutSpin);
		} 
		if (Config.IsAutoSpin) {
		    if (timeoutRepeat) {
		        clearTimeout(timeoutRepeat);
		    }
			if (!Config.IsAutoByServer) {
				if (App.CD2AccInfo.StopAutoConditions.length > 0) {
					var isStop = false;
					App.CD2AccInfo.StopAutoConditions.forEach(function (condition) {
						switch (+condition.StopAutoWhen) {
							case 1:
								if (Config.WinJackpot === true) {
									isStop = true;
								}
								break;
							case 5:
								if (App.CD2AccInfo.AutoSpinRevenue <= -+condition.ConditionCompareValue) {
									isStop = true;
								}
								break;
							case 6:
								if (App.CD2AccInfo.AutoSpinRevenue >= +condition.ConditionCompareValue) {
									isStop = true;
								}
								break;
							case 4:
								if (App.CD2AccInfo.SpinData.PayLinePrizeValue >= +condition.ConditionCompareValue) {
									isStop = true;
								}
								break;
						}
					});
					if (isStop) {
						App.gameHub.server.SetAutoSpin(false, 0, 0, false, null);
						Config.TotalAutoSpin = 0;
						Config.IsAutoSpin = false;
						GuiContents.UpdateAutoSpin(Config.TotalAutoSpin);
						GuiContents.BindEvents();
					} else {
						timeoutSpin = setTimeout(function () {
							GuiContents.UnbindEvents();
							GuiContents.Spin();
						}, 500);
					}
				} else {
					if (Config.TotalAutoSpin > 0) {
						timeoutSpin = setTimeout(function () {
							GuiContents.UnbindEvents();
							GuiContents.Spin();
						}, 500);
						GuiContents.BindEvents();
					} else {
					    if (Config.TotalFreeSpin > 0) {
					        timeoutSpin = setTimeout(function () {
					            GuiContents.UnbindEvents();
					            GuiContents.Spin();
					        }, 500);
					        GuiContents.BindEvents();
					    } else {
					        Config.IsAutoSpin = false;
					        Config.TotalAutoSpin = 0;
					        GuiContents.BindEvents();
					    }
					}
				}
			}
		} else {
		    if (Config.TotalFreeSpin > 0) {

		        if (timeoutRepeat) {
		            clearTimeout(timeoutRepeat);
		        }
				timeoutSpin = setTimeout(function () {
					GuiContents.UnbindEvents();
					GuiContents.Spin();
				}, 1000);
				GuiContents.BindEvents();
			} else {
				Config.IsAutoSpin = false;
				Config.TotalAutoSpin = 0;
				GuiContents.BindEvents();
			}
		}
	}

	this.StopAuto = function () {
		if (timeoutSpin) {
			clearTimeout(timeoutSpin);
		}

		if (Config.IsAutoByServer) {
			GuiContents.HidePopup();
		}
	    $('#avengerBtnSpin').attr("src", Config.Url.ROOT + "images/button/btn_DungQuayD.png");

		//Config.IsStillAutoSpin = false;
		Config.IsAutoSpin = false;
		Config.TotalAutoSpin = 0;

		if (Config.CurrentState === 0) {
			GuiContents.UpdateAutoSpin(Config.TotalAutoSpin);
		}

		App.gameHub.server.SetAutoSpin(false, 0, Config.RoomValue, false, null);
		GuiContents.AutoSpin();
	}

	//Bonus Game
    this.ShowBonusGame = function (data) {
    	if (timeoutSpin) {
    		clearTimeout(timeoutSpin);
    	}
		App.Bonus = new window.BonusLogic(data);

		//Animation.ShowDoubleAndBonusGame();
		//App.Bonus.UpdateBonusJackpot(App.CD2AccInfo.SlotInfo.Jackpot);
		//$('.fix-left-update').hide();
		//$('.chuadao2').hide();
		////$('.cd2_chat').hide();
		//$('.chuadao2-bonus').show();
	}

    this.HideBonusGame = function (prize) {
        Config.CurrentState = 0;
        if (Config.IsAutoByServer) {
            var currBalance = App.Game.getCurrentBalance();
            App.Game.UpdateBalance(currBalance, currBalance + prize);
        } else {

            $('#BonusGameAvenger').hide();
            $('#avengerMainGame').show();
            var currBalance = App.Game.getCurrentBalance();
            App.Game.UpdateBalance(currBalance, currBalance + prize);

            GuiContents.AutoSpin();
        }
	}

	//x2 Game
    this.ShowX2Game = function () {
        if (App.CD2AccInfo.X2Game != undefined && App.CD2AccInfo.X2Game)
    	if (timeoutSpin) {
    		clearTimeout(timeoutSpin);
    	}

    	GameAudio.Play('Sound.X2.Click');

        $.ajax({
            type: "GET",
            url: Config.Url.ROOT + 'Home/ShowX2Game',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
                $('#avengerX2Game').html(data);
                $('#avengerX2Game').show();
                $('#effectWinAvenger').hide();
                $('#canvasAvenger').hide();
                App.Double = new window.DoubleLogic(App.CD2AccInfo.X2Game);

            },
            fail: function (fail) {
                console.log(fail);
            }
        });

        $('#x2GameAvenger').unbind('click');
        $('#x2GameAvenger img').attr('src', Config.Url.ROOT + 'images/button/bt_x2D.png');
        //Animation.ShowDoubleAndBonusGame();
		//$('.fix-left-update').hide();
		//$('.chuadao2').hide();
		//$('.cd2_chat').hide();
		//$('.chuadao2-double').show();
	}

    this.HideX2Game = function () {
        $('#avengerX2Game').html("");
        $('#avengerX2Game').hide();
        $('#effectWinAvenger').hide();
        $('#canvasAvenger').show();
	    GuiContents.AutoSpin();
	}

	this.StopX2Game = function () {
		if (timeoutDouble) {
			clearTimeout(timeoutDouble);
		}

		$('#stop-x2').hide();
		$('#continue-x2').hide();
		$('#x2-text').hide();

		Config.CurrentState = 0;
		if (Config.IsInDouble && Config.X2CurrentStep > 0) {
			prizeValue = App.CD2AccInfo.X2Game.PrizeValue > 0 ? App.CD2AccInfo.X2Game.PrizeValue : App.CD2AccInfo.X2Game.StartBetValue;
			//Animation.ShowDoublePopupPrize(prizeValue, function () {
				if (Config.X2CurrentStep < 3) {
                    App.gameHub.server.StopX2Game().done(function (data) {
						console.log('Stop X2:', data);
						if (data === true) {
							Config.IsInDouble = false;
							App.gameHub.server.PlayNow().done(function(accId) {
									console.log('PlayNow:', accId);
									if (accId < 0) {
									    $('.changeModePlay').click(GuiContents.ClickPlayTry);
										App.CD2AccInfo = null;
									}
								}).fail(function(err) {
									console.log('PlayNow Error:', err);
								});
							GuiContents.HideX2Game();
						}
					});
				} else {
					Config.IsInDouble = false;
					App.gameHub.server.PlayNow().done(function(accId) {
						console.log('PlayNow:', accId);
						if (accId < 0) {
						    $('.changeModePlay').click(GuiContents.ClickPlayTry);
							App.CD2AccInfo = null;
						}
					}).fail(function(err) {
						console.log('PlayNow Error:', err);
					});
					GuiContents.HideX2Game();
				}
			//});
		} else {
			Config.IsInDouble = false;
			App.gameHub.server.PlayNow().done(function(accId) {
				console.log('PlayNow:', accId);
				if (accId < 0) {
				    $('.changeModePlay').click(GuiContents.ClickPlayTry);
					App.CD2AccInfo = null;
				}
			}).fail(function(err) {
				console.log('PlayNow Error:', err);
			});
			GuiContents.HideX2Game();
		}
	}

	this.ContinueX2Game = function () {
		App.Double.NextX2Game();
	}

	//Change Room
	this.PrevRoom = function () {
		GuiContents.ChangeRoom(false);
	}

	this.NextRoom = function () {
		GuiContents.ChangeRoom(true);
	}

	this.ChangeRoom = function (roomId) {
	    if (Config.RoomId != roomId) {
	        App.gameHub.server.ChangeRoom(roomId)
	            .done(function (data) {
	                console.log("ChangeRoom:", data);
	                if (data === true) {
	                    Config.RoomId = roomId;
	                    Config.RoomValue = roomValue[Config.RoomId];
	                    GuiContents.UpdateRoom();
	                }
	            })
	            .fail(function (err) {
	                console.log("ChangeRoom error:", err);
	            });
	    }
	}

	this.UpdateRoom = function () {
	    App.Game.RerenderItem();
	    if (Config.RoomValue != 1000 && Config.RoomValue != 10000 && Config.RoomValue != 100000) {
	        Config.RoomValue = 1000;
	    }
		$('#currentRoomAvenger').text(Config.RoomValue/1000 + "K");
	}

	//Free Spin
    this.ShowFreeSpin = function () {
        $('#avengerFreeSpinDiv').show();
	}

    this.UpdateFreeSpin = function (freeSpin) {
        $('#totalAvengerFreeSpin').text(freeSpin);
	}

	this.HideFreeSpin = function () {
	    $('#totalAvengerFreeSpin').html("0");
	    $('#avengerFreeSpinDiv').hide();
	}

	//Play Try
	this.ClickPlayTry = function () {
	    GameAudio.Play('Sound.Button.BetChange');
        App.gameHub.server.PlayTry(!Config.IsTry).done(function (player) {
			console.log('PlayTry:', player);
			App.Game.JoinGame(player);
			GuiContents.HideSetting();
			App.Game.UpdateJackpot(player.SlotInfo.Jackpot);
			if (Config.IsTry) {
			    $('#btnPlayReal').css('background', 'url(' + Config.Url.ROOT + 'images/Button/bt_ChoiThat.png) no-repeat');
			    $('#btnPlayTry').css('background', 'url(' + Config.Url.ROOT + 'images/Button/bt_ChoiThuA.png) no-repeat');
			} else {
				if (player.AccountID === 0) {
					App.CD2AccInfo = null;
				}
			    $('#btnPlayReal').css('background', 'url(' + Config.Url.ROOT + 'images/Button/bt_ChoiThatA.png) no-repeat');
			    $('#btnPlayTry').css('background', 'url(' + Config.Url.ROOT + 'images/Button/bt_ChoiThu.png) no-repeat');
			}
        }).fail(function (err) {
			console.log(err);
		});
    }

    this.ShowPanelChangeRoom = function()
    {
        GameAudio.Play('Sound.Button.BetChange');
        if ($("#changeRoomAvenger").hasClass('show_choose')) {
            $('.avg_frame .avg_bot .muc_cuoc .choose_money').fadeOut(200);
            $("#changeRoomAvenger").removeClass('show_choose');
        } else {
            $('.avg_frame .avg_bot .muc_cuoc .choose_money').fadeIn(500);
            $("#changeRoomAvenger").addClass('show_choose');
            $('.avg_frame .avg_bot .tu_quay .choose_money').fadeOut(200);
            $('.avg_frame .avg_bot .tu_quay').removeClass('show_choose');
            $('.avg_frame .avg_bot .muc_cuoc .choose_money span').click(function () {
                $(this).parent().parent().find('> span').text($(this).text());
                var roomId = 1;
                if ($(this).text() == "10K") {
                    roomId = 2;
                }
                if ($(this).text() == "100K") {
                    roomId = 3;
                }
                GuiContents.ChangeRoom(roomId);
            });
        }
    }

	//Panel
    this.ShowPanel = function () {
    	$('.cd2_popup').show();
    	Config.IsShowPanel = true;
    	GuiContents.HideSetting();
	    GuiContents.UnbindEvents();
    }

	this.HidePanel = function () {
		$('.cd2_popup').hide();
		Config.IsShowPanel = false;
		GuiContents.BindEvents();
	}

    this.HideAllPanel = function () {
        $('#panelAutoSpinAvenger').hide();
		$('#panelReward').hide();
		$('#panelGuide').hide();
		$('#panelHistory').hide();
		$('#panelAutoSpin').hide();
		Config.IsShowPanel = false;
    }

	this.ShowPanelHonor = function () {
	    GuiContents.HideAllPanel();
	    GuiContents.ShowPanel();
	    $('#panelHonor').show();
	}

	//Vinh danh
    this.HidePanelHonor = function () {
		GuiContents.HidePanel();
		$('#panelHonor').hide();
	}

	//Bảng thưởng
    this.ShowPanelReward = function () {
		GuiContents.HideAllPanel();
		GuiContents.ShowPanel();
		$('#panelReward').show();
	}

    this.HidePanelReward = function () {
		GuiContents.HidePanel();
		$('#panelReward').hide();
	}

	//Hướng dẫn
    this.ShowPanelGuide = function (page) {
    	GuiContents.HideAllPanel();

	    if (!page || page < 1 || page > 5) {
		    page = 1;
	    }

	    $('#panelGuide .huongdan_slide li').hide();
	    $('#panelGuide .huongdan_slide li').eq(page - 1).show();

	    var paging = '<li onclick="GuiContents.ShowPanelGuide(' + (page > 1 ? page - 1 : 5) + ')"></li><li  onclick="GuiContents.ShowPanelGuide(' + (page < 5 ? page + 1 : 1) + ')"></li>';
	    $('#panelGuidePaging').html(paging);

    	GuiContents.ShowPanel();
    	$('#panelGuide').show();
    }

    this.HidePanelGuide = function () {
		GuiContents.HidePanel();
		$('#panelGuide').hide();
	}

    //Lịch sử
	this.ShowPanelHistory = function () {
	    GuiContents.HideAllPanel();
	    GuiContents.ShowPanel();
	    $('#panelHistory').show();
	}

    this.HidePanelHistory = function () {
		GuiContents.HidePanel();
		$('#panelHistory').hide();
	}

	//Auto Spin
    this.ShowPanelAutoSpin = function () {

        GameAudio.Play('Sound.Button.BetChange');
	    if ($('#btnAutoSpinAvenger').hasClass('show_choose')) {
	    	$('.avg_frame .avg_bot .tu_quay .choose_money').fadeOut(200);
	    	$('#btnAutoSpinAvenger').removeClass('show_choose');
	    }else{
	    	$('.avg_frame .avg_bot .tu_quay .choose_money').fadeIn(500);
	    	$('#btnAutoSpinAvenger').addClass('show_choose');
	    	$('.avg_frame .avg_bot .muc_cuoc .choose_money').fadeOut(200);
	    	$('.avg_frame .avg_bot .muc_cuoc').removeClass('show_choose');
	    	$('.avg_frame .avg_bot .tu_quay .choose_money span').click(function () {
		        GameAudio.Play('Sound.Button.BetChange');
	    	    $('#totalAvengerAutoSpin').text($(this).text());
	    	    $('#panelAutoSpinAvenger').fadeOut(200);
	    		GuiContents.StartAutoSpin($(this).text());
		    });
	    }
	}


	this.ResetAutoSpin = function () {
		$('#jackpotStop').attr("checked", false);
		$('#maxBalanceStop').attr("checked", false);
		$('#minBalanceStop').attr("checked", false);
		$('#prizeStop').attr("checked", false);
		$('#maxBalanceStopValue').val(0);
		$('#minBalanceStopValue').val(0);
		$('#prizeStopValue').val(0);
	}

	this.StartAutoSpin = function(totalAutoSpin) {
	    var numberSpin = totalAutoSpin;
	    if (isNaN(totalAutoSpin)) {
	        numberSpin = 1000000000;
	    }

		/*
		StopAutoWhen: Điều kiện dừng
		1: Nổ hũ
		2: Tài khoản tăng tới
		3: Tài khoản giảm tới
		4: Tiền thắng lớn hơn
		5: Lợi nhuận (Tiền thắng - tiền đặt) giảm tới
		6: Lợi nhuận (Tiền thắng - tiền đặt) tăng tới
		*/
		var conditions = [];

	    conditions.push({ 'StopAutoWhen': 1, 'ConditionCompareValue': 0 });

	    App.gameHub.server.SetAutoSpin(true, numberSpin, Config.RoomValue, false, conditions);
	    GuiContents.Spin();
	}

	this.UpdateAutoSpin = function (autoSpin) {
	    if (autoSpin > 100000) {
	        $('#totalAvengerAutoSpin').text("Vô Hạn");
	        return;
	    }
	    $('#totalAvengerAutoSpin').text(CommonUtility.formatMoney(autoSpin));
	}

	//Settings
    this.ToggleSetting = function () {
		$('.settings').toggle();
	}

    this.HideSetting = function () {
		$('.settings').hide();
    }

    this.ClickSoundSetting = function () {
    	sessionStorage.setItem('cd2_setting_sound', !Config.IsPlaySound);
    	$('#setting-sound').toggleClass('off');
	    GameAudio.SetMuteSound(!Config.IsPlaySound);
    };

    this.ClickMusicSetting = function () {
    	sessionStorage.setItem('cd2_setting_music', !Config.IsPlayMusic);
    	$('#setting-music').toggleClass('off');
    	GameAudio.SetMuteMusic(!Config.IsPlayMusic);
    };

    this.ClickFullScreenSetting = function () {
		$('#setting-full').toggleClass('off');
		toggleFullScreen(document.documentElement);
	};

	function toggleFullScreen(elem) {
		// ## The below if statement seems to work better ## if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
		if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
			if (elem.requestFullScreen) {
				elem.requestFullScreen();
			} else if (elem.mozRequestFullScreen) {
				elem.mozRequestFullScreen();
			} else if (elem.webkitRequestFullScreen) {
				elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
			} else if (elem.msRequestFullscreen) {
				elem.msRequestFullscreen();
			}
		} else {
			if (document.cancelFullScreen) {
				document.cancelFullScreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
		}
	}

    //BigWin and History
	this.LoadBigWin = function (currPage, type) {
	    GuiContents.UnbindEvents();

	    if (!currPage) {
	        currPage = 1;
	    }
	    if (!type) {
	        type = 0;
	    }
	    if (!(currPage > 0)) {
	        return;
	    }

	    App.GameAPI.GetBigWin(type, function (data) {
	        GuiContents.BindEvents();
	        if (data) {
	            var totalPage = Math.ceil(data.length / 10);
	            var pagingHtml = '', startPage = 1;

	            pagingHtml += '<li ' + (currPage > 1 ? ' onclick="GuiContents.LoadBigWin(' + (currPage - 1) + ',' + type + ');"' : '') + '></li><li><ul>';

	            if (currPage < 4) startPage = 1;
	            if (currPage > 3 && currPage < totalPage - 1) startPage = currPage - 2;
	            if (currPage > totalPage - 2 && currPage > 4) startPage = totalPage - 4;

	            for (var i = startPage, count = 0; i <= totalPage && count < 5; i++, count++) {
	                pagingHtml += '<li ' + (i === currPage ? ' class="active"' : "") + ' onclick="GuiContents.LoadBigWin(' + i + ',' + type + ');">' + i + '</li>';
	            }
	            pagingHtml += '</ul></li><li ' + (currPage < totalPage ? ' onclick="GuiContents.LoadBigWin(' + (currPage + 1) + ',' + type + ');"' : '') + '></li>';
	            $("#cdhonorphantrang").html(pagingHtml);

	            var tabhtml = '';
	            switch (type) {
	                case 0:
	                    var tabhtml = '<li onclick="GuiContents.LoadBigWin(1, 1)"></li><li onclick="GuiContents.LoadBigWin(1, 2)"></li><li onclick="GuiContents.LoadBigWin(1, 0)" class="active"></li>';
	                    break;
	                case 1:
	                    var tabhtml = '<li onclick="GuiContents.LoadBigWin(1, 1)" class="active"></li><li onclick="GuiContents.LoadBigWin(1, 2)"></li><li onclick="GuiContents.LoadBigWin(1, 0)"></li>';
	                    break;
	                case 2:
	                    var tabhtml = '<li onclick="GuiContents.LoadBigWin(1, 1)"></li><li onclick="GuiContents.LoadBigWin(1, 2)" class="active"></li><li onclick="GuiContents.LoadBigWin(1, 0)"></li>';
	                    break;
	            }
	            $('#cd2HonorTabs').html(tabhtml);

	            var html = '<table> <thead><tr>' +
                    '<td>Thời gian</td>' +
                    '<td>Tài khoản</td>' +
                    '<td>Mức đặt</td>' +
                    '<td>Thắng</td>' +
                    '<td>Mô tả</td>' +
                    '</tr></thead><tbody>';
	            var bigWins = data.splice((currPage - 1) * 10, 10);
	            var indexData = 0;
	            $.each(bigWins, function (key, value) {
	                var prizeValue = CommonUtility.formatMoney(value.TotalPrize);
	                var betValue = CommonUtility.formatMoney(value.BetValue);
	                if (betValue == 0) {
	                    value.Description = [value.Description, "FreeSpin"].join(' + ');
	                }
	                html += "<tr>" +
                                "<td>" + Common.ConverDateTime(value.CreatedTime) + "</td>" +
                                "<td>" + value.Username + "</td>" +
                                "<td>" + betValue + "</td>" +
                                "<td>" + prizeValue + "</td>" +
                                "<td>" + value.Description + "</td></tr></tbody>";
	                indexData++;
	            });
	            $("#divHonor").html(html);
	            $("#divHonor").mCustomScrollbar("update");
	            GuiContents.ShowPanelHonor();
	        }
	    });
	};

	this.LoadHistory = function (currPage) {
	    if (!App.CD2AccInfo || !(currPage > 0)) {
	        return;
	    }

	    GuiContents.UnbindEvents();
	    if (!currPage) {
	        currPage = 1;
	    }

	    App.GameAPI.GetHistory(function (data) {
	        GuiContents.BindEvents();
	        if (data) {
	            var totalPage = Math.ceil(data.length / 10);
	            var pagingHtml = '', startPage = 1;

	            pagingHtml += '<li ' + (currPage > 1 ? ' onclick="GuiContents.LoadHistory(' + (currPage - 1) + ');"' : '') + '></li><li><ul>';

	            if (currPage < 4) startPage = 1;
	            if (currPage > 3 && currPage < totalPage - 1) startPage = currPage - 2;
	            if (currPage > totalPage - 2 && currPage > 4) startPage = totalPage - 4;

	            for (var i = startPage, count = 0; i <= totalPage && count < 5; i++, count++) {
	                pagingHtml += '<li ' + (i === currPage ? ' class="active"' : "") + ' onclick="GuiContents.LoadHistory(' + i + ');">' + i + '</li>';
	            }
	            pagingHtml += '</ul></li><li ' + (currPage < totalPage ? ' onclick="GuiContents.LoadHistory(' + (currPage + 1) + ');"' : '') + '></li>';
	            $("#cd2_panelHistory_phantrang").html(pagingHtml);

	            var html = '<table> <thead><tr>' +
                    '<td>Thời gian</td>' +
                    '<td>Tài khoản</td>' +
                    '<td>Mức đặt</td>' +
                    '<td>Thắng</td>' +
                    '<td>Mô tả</td>' +
                    '</tr></thead><tbody>';
	            var spinDataHistory = data.splice((currPage - 1) * 10, 10);
	            var indexData = 0;
	            $.each(spinDataHistory, function (key, value) {
	                var prizeValue = CommonUtility.formatMoney(value.TotalPrize);
	                //if (prizeValue == 0 && value.Description.length > 1) {
	                //prizeValue = value.Description;
	                //}
	                var betValue = CommonUtility.formatMoney(value.BetValue);
	                if (betValue == 0) {
	                    value.Description = value.Description === "" ? "FreeSpin" : value.Description + " + FreeSpin";
	                }
	                html += "<tr>" +
                                "<td>" + Common.ConverDateTime(value.CreatedTime) + "</td>" +
                                "<td>" + value.Username + "</td>" +
                                "<td>" + betValue + "</td>" +
                                "<td>" + prizeValue + "</td>" +
                                "<td>" + value.Description + "</td></tr></tbody>";
	                indexData++;
	            });
	            $("#cd2_panelHistory_content").html(html);
	            $("#cd2_panelHistory_content").mCustomScrollbar("update");
	            GuiContents.ShowPanelHistory();
	        }
	    });
	};

	//Jackpot hunter
	this.ShowJackpotHunter = function () {
		if (!isShowJackpotHunter) {
			//GameAudio.Play("Sound.AppearHunter");
		isShowJackpotHunter = true;
		$('.cd2_thosanhu').animate({ 'top': -50 }, 1500, 'easeOutBounce');
		$('.cd2_vinhdanh').addClass('cd2_thosanhu_open cd2_thosanhu_show');
		$('#content-vinhdanh').addClass('cd2_thosanhu_open cd2_thosanhu_show');
		}
	}

	this.HideJackpotHunter = function () {
		if (isShowJackpotHunter) {
			//GameAudio.Play("Sound.DisappearHunter");
			isShowJackpotHunter = false;
			$('.cd2_thosanhu').animate({ 'top': -500 }, 1500, 'easeInQuart', function() {
				$('#content-vinhdanh').mCustomScrollbar("scrollTo", 0);
			});
			$('.cd2_vinhdanh').removeClass('cd2_thosanhu_open cd2_thosanhu_show');
			$('#content-vinhdanh').removeClass('cd2_thosanhu_open cd2_thosanhu_show');
		}
	}

	this.OpenJackpotHunter = function() {
		$('.cd2_thosanhu').addClass('cd2_thosanhu_open');
		$('.cd2_vinhdanh').addClass('cd2_thosanhu_open');
		$('#content-vinhdanh').addClass('cd2_thosanhu_open');

		$('#btnJackpotHunter').unbind('click');
		$('#btnJackpotHunter').click(GuiContents.CloseJackpotHunter);
	}

	this.CloseJackpotHunter = function() {
		$('.cd2_thosanhu').removeClass('cd2_thosanhu_open');
		$('.cd2_vinhdanh').removeClass('cd2_thosanhu_open');
		$('#content-vinhdanh').removeClass('cd2_thosanhu_open');

		$('#btnJackpotHunter').unbind('click');
		$('#btnJackpotHunter').click(GuiContents.OpenJackpotHunter);
	}

	this.UpdateJackpotHunter = function (players) {
		if (players && players.length > 0) {
			var room1Html = '',
				room2Html = '',
				room3Html = '';
			$.each(players, function(index, player) {
				switch (player.CurrentRoomID) {
				case 1:
				    room1Html += "<p><img src='" + Config.Url.ROOT + "Images/Icons/cd2_favicon.png' class='cd2_favicon'></img><span>" + player.MashUserName + "</span> " + getDateString(player.CreatedTime, player.ServerTime) + ".</p>";
					break;
				case 2:
				    room2Html += "<p><img src='" + Config.Url.ROOT + "Images/Icons/cd2_favicon.png' class='cd2_favicon'></img><span>" + player.MashUserName + "</span> " + getDateString(player.CreatedTime, player.ServerTime) + ".</p>";
					break;
				case 3:
				    room3Html += "<p><img src='" + Config.Url.ROOT + "Images/Icons/cd2_favicon.png' class='cd2_favicon'></img><span>" + player.MashUserName + "</span> " + getDateString(player.CreatedTime, player.ServerTime) + ".</p>";
					break;
				}
			});
			if (room1Html !== '') {
				$("#jackpotHunterRoom1").show();
				$("#content-jackpotHunter-room1").html(room1Html);
			} else {
				$("#jackpotHunterRoom1").hide();
			}
			if (room2Html !== '') {
				$("#jackpotHunterRoom2").show();
				$("#content-jackpotHunter-room2").html(room2Html);
			} else {
				$("#jackpotHunterRoom2").hide();
			}
			if (room3Html !== '') {
				$("#jackpotHunterRoom3").show();
				$("#content-jackpotHunter-room3").html(room3Html);
			} else {
				$("#jackpotHunterRoom3").hide();
			}

			if (!isShowJackpotHunter) {
				GuiContents.OpenJackpotHunter();
				GuiContents.ShowJackpotHunter();
			}
		} else {
			GuiContents.HideJackpotHunter();
		}
	}

    //Chat and top honor
	this.ShowChat = function () {
		$('.cd2_chat').removeClass('hide_chat');

	    $('.cd2_chat_content').animate({ 'right': 0 }, 1000);

	    $('.cd2_hidechat_btn').unbind('click');
	    $('.cd2_hidechat_btn').click(GuiContents.HideChat);
	}

	this.HideChat = function () {
		$('.cd2_chat').addClass('hide_chat');

		$('.cd2_chat_content').animate({ 'right': -220 }, 1000);

	    $('.cd2_hidechat_btn').unbind('click');
	    $('.cd2_hidechat_btn').click(GuiContents.ShowChat);
	}

	this.UpdateHonor = function (honor) {
	    if (honor != null && honor.length > 0) {
	        var html = "";
	        var i = 0;
	        $.each(honor, function (key, value) {
	        	if (value.Type == 1) {
	        	    if (i < 2) {
	        	        html += '<p style="font-size: 15px;    font-weight: bold;"><b>' +
		                    value.Username +
		                    "</b> vừa nổ hũ <span>Phòng " +
		                    CommonUtility.formatMoney(value.RoomID) +
		                    "</span> trị giá <span>" +
		                    CommonUtility.formatMoney(value.BonusPrize) +
		                    " Vgold</span> " +
		                    getDateString(value.CreatedTime, value.ServerTime) +
		                    ".</p>";
		            } else {
		                html += '<p><b>' +
		                    value.Username +
		                    "</b> vừa nổ hũ <span>Phòng " +
		                    CommonUtility.formatMoney(value.RoomID) +
		                    "</span> trị giá <span>" +
		                    CommonUtility.formatMoney(value.BonusPrize) +
		                    " Vgold</span> " +
		                    getDateString(value.CreatedTime, value.ServerTime) +
		                    ".</p>";
		            }
	            } else {
	        	    html += "<p><b>" + value.Username + "</b> vừa thắng <span>" + CommonUtility.formatMoney(value.BonusPrize) + " Vgold</span> " + getDateString(value.CreatedTime, value.ServerTime) + ".</p>";
	        	}
	            i ++;
	        });
	        $("#vinhdanh_detail_contentDetail").html(html);
	        if ($("#vinhdanh_detail_content").hasClass("mCustomScrollbar")) {
	            $("#vinhdanh_detail_content").mCustomScrollbar("update");
	        } else {
	            $("#vinhdanh_detail_content").mCustomScrollbar();
	        }
	    }
	};

	var getDateString = function (dbTime, serverTime) {
	    var dbDate = new Date(dbTime.split('.')[0] + "+07:00");

	    var svDate = new Date(serverTime);

	    var diffSec = Math.round((svDate - dbDate) / 1000);

	    if (diffSec < 60) {
	        return (diffSec > 0 ? diffSec : 0) + ' giây trước';
	    } else if (diffSec < 15 * 60) {
	        var diffMin = Math.floor(diffSec / 60);
	        return diffMin + ' phút trước';
	    } else {
	        var _day = dbDate.getDate();
	        var _month = dbDate.getMonth() + 1;
	        var _year = dbDate.getFullYear();
	        var _hour = dbDate.getHours();
	        var _minute = dbDate.getMinutes();
	        if (_day < 10) _day = "0" + _day;
	        if (_month < 10) _month = "0" + _month;
	        if (_hour < 10) _hour = "0" + _hour;
	        if (_minute < 10) _minute = "0" + _minute;

	        var sDate = 'lúc ' + _hour + ':' + _minute;
	        if (_day != svDate.getDate() && _month != svDate.getMonth())
	            sDate += ' ' + _day + '/' + _month;
	        if (_year != svDate.getFullYear())
	            sDate += '/' + _year;

	        return sDate;
	    }
	}

	//Popup
	this.ShowPopup = function(message, time, type) {
		if (message) {
			if (timeoutPopup) {
				clearTimeout(timeoutPopup);
			}
		    $('#popupMessageContentAvenger').html(message);
			$('#popupMessageAvenger').show();
			if (time) {
				timeoutPopup = setTimeout(function() {
					GuiContents.HidePopup();
				}, time * 1000);
			}

			$('#popupMessageAvenger').unbind('click');
			$('#popupMessageAvenger').click(GuiContents.HidePopup);

            ////Hiện button nạp sao
			//if (type == 1) {
			//    $('#popupNoti .popup-text').removeClass('dong auto-stop');
			//    $('#popupMessageAvenger').addClass('napsao');

			//    $('#popupMessageAvenger').unbind('click');
			//    $('#popupMessageAvenger').click(function () {
			//        $('#btnTopupStar').trigger('click');
			//    });
			//}
            ////Quay tự động server
			//if (type == 2) {
			//    $(' #popupNoti .close').hide();

			//    $('#popupNoti .popup-text').removeClass('dong').addClass('auto-stop');
			//    $('#popupMessageAvenger').removeClass('napsao');

			//    $('#popupMessageAvenger').unbind('click');
			//    $('#popupMessageAvenger').click(GuiContents.StopAuto);

			//    App.Game.DrawShadowBackground();
			//}
		}
	}

	this.HidePopup = function () {
	    $('#popupMessageContentAvenger').html("");
	    $('#popupMessageAvenger').hide();
	}
}