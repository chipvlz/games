
(function (window, $) {
	var Chat = function () {
		this._init();
	};


	Chat.prototype._init = function () {
		if (this.isInit)
			return;

		var that = this;
		this.isInit = true;

		$('#chatTextBoxAvenger').keypress(function (e) {
			if (e.keyCode === 13) {
			    that.sendMessage(that);
			}
		});

		that.initChat();
		that.initEmoticon();
		//GetNotifications();
	};

	Chat.prototype.initHub = function () {
		var chatUrl = Config.Url.Chat_Hub;
	    var that = this;
		if (!App.chatHub || App.chatHub.hubName !== 'chathub') {
			App.chatHub = new ChatHub(chatUrl);
			App.chatHub.connection.stateChanged(function (change) {
		        if (change.newState === $.signalR.connectionState.connecting) {
		            console.log('Đang kết nối Chat...');
		        } else if (change.newState === $.signalR.connectionState.reconnecting) {
		            console.log('Đang kết nối Chat lại...');
		        } else if (change.newState === $.signalR.connectionState.connected) {
		            // kết nối thành công
		            console.log(' kết nối Chat Thành công...');
		            that.registerChanel();
		        } else if (change.newState === $.signalR.connectionState.disconnected) {
		            console.log('Mất kết  nối Chat...');
		        }
		    });
			App.chatHub.client = {
				listLastMessages: function (lastMessages) {
				    $('#avengerChatContent').html('');

					if (lastMessages) {
						$.each(lastMessages, function (k, v) {
							App.chatHub.client.receiveMessage(v);
						});
					}
				},

				receiveMessage: function (chatMessage) {
					if (typeof (chatMessage) !== "undefined" && chatMessage !== null) {
						chatMessage.ChannelId = chatMessage.i || chatMessage.ChannelId;
						chatMessage.AccountID = chatMessage.a || chatMessage.AccountID;
						chatMessage.NickName = chatMessage.n || chatMessage.AccountID;
						chatMessage.Content = chatMessage.c || chatMessage.Content;

						that.receiveMessage(chatMessage);
					}
				},

				addUserOnline: function (chatUser) {
				},

				removeUserOnline: function (chatUser) {
				},

				listUserOnlines: function (userOnlines) {
					//if (userOnlines) {                        
					//    $.each(userOnlines, function (k, v) {
					//        //App.chatHub.client.addUserOnline(v);
					//    });                                                
					//}                    
				},

				notification: function (messages) {
					if (messages) {
						var ulContainer = $('#notification_container ul');
						if (ulContainer.length == 0) {
							var div = $('<div id="notification_container"></div>');
							ulContainer = $('<ul></ul>');
							ulContainer.css('left', 450);
							div.append(ulContainer);
							$('#content-2').append(div);
						}

						var ulWidth = 0,
                            ulDuration = 0;

						$.each(messages, function (i, message) {
							if (message.Type == 30001) {
								Util.showMessage(message.Message);
								return;
							}

							var timeOut = 8000,
                                iconClass = '';

							if (message.Icon == 'taixiu' || message.Icon == 'minipoker')
								iconClass += " icon-" + message.Icon;

							var $li = $('<li class="' + iconClass + '"></li>');
							$li.html(message.Message);
							ulContainer.append($li);
							ulDuration += timeOut;
						});
						$.each($('#notification_container li'), function () {
							ulWidth += $(this).outerWidth();
						});
						ulContainer.width(ulWidth + 100);
						ulContainer.animate({ left: (200 - ulWidth) + "px" }, {
							duration: ulDuration, done: function () {
								if (ulContainer.width() + parseInt(ulContainer.css('left')) <= 400)
									$('#notification_container').remove();
							}
						});
					}
				}
			};
		}
	};

	Chat.prototype.startHub = function (cb) {
		try {
		    App.chatHub.connection.start({ transport: ['webSockets', 'longPolling'], jsonp: true }).done();
		} catch (e) {
		    console.log(e);
		}
	};

	Chat.prototype.initChat = function () {
		var chatContentHeight = $('#content-chat').prop('scrollHeight');
		$('#content-chat').animate({ scrollTop: chatContentHeight }, 0);

		this.registerChat();
	};
	Chat.prototype.startChat = function () {
	    var that = this;
	    that.startHub(function () {
	        $('#chatTextBoxAvenger').on('keypress', function (event) {
	            if (event.which == '13') {
	                that.sendMessage();
	            }
	        });

	        $('#vqs_btn_send_chat').unbind("click").bind("click", function () {
	            that.sendMessage();
	        });
	    });
	};
	Chat.prototype.registerChat = function () {
	    var that = this;
	    var chatContent = $('#avengerChatContent'),
			chatInput = $('#chatTextBoxAvenger');

		var oldChannel = Config.ChatChannel;
		if (App.chatHub && Config.ChatChannel === oldChannel)
			return;

	    that.initHub();
		

		if (App.chatHub.connection.state === $.signalR.connectionState.connected) {
		    that.registerChanel();
		} else {
		    that.startHub();
		}
	}
	Chat.prototype.registerChanel = function (that) {
        var that = this;
        if (App.chatHub.connection.state === $.signalR.connectionState.connected) {
            try {
                App.chatHub.server.registerChat(Config.ChatChannel).done(function (result) {
                    if (result) {
                        $('#chatTextBoxAvenger').attr('placeholder', 'Nhập nội dung chat...');
                        $('#chatTextBoxAvenger').attr('disabled', false);
                        $("#emoticon").bind("click");
                    } else {
                        $('#chatTextBoxAvenger').attr('placeholder', 'Bạn cần đăng nhập để chat...');
                        $('#chatTextBoxAvenger').attr('disabled', true);
                        $("#emoticon").unbind("click");
                    }
                }).fail(function (e) {
                    console.log(e)
                });
            } catch (e) {
                console.log(e)
            }
        } else {
            that.startHub(function () {
                try {
                    App.chatHub.server.registerChat(Config.ChatChannel).done(function (result) {
                        if (result) {
                            $('#chatTextBoxAvenger').attr('placeholder', 'Nhập nội dung chat...');
                            $('#chatTextBoxAvenger').attr('disabled', false);
                            $("#emoticon").bind("click");
                        } else {
                            $('#chatTextBoxAvenger').attr('placeholder', 'Bạn cần đăng nhập để chat...');
                            $('#chatTextBoxAvenger').attr('disabled', true);
                            $("#emoticon").unbind("click");
                        }
                    }).fail(function (e) {
                        console.log(e)
                    });
                } catch (e) {
                    console.log(e)
                }
            });
        }
    }

	Chat.prototype.initEmoticon = function () {
		if ($('div.emoticon').emotions)
			$('div.emoticon label').emotions();
		$('div.emoticon').hide();
		$('div.emoticon label').click(function () {
			$('div.emoticon').hide();
			if (App.AccountID <= 0) {
				return;
			}
			var chatTextBox = $('#chatTextBoxAvenger').val().trim() + $(this).data('value');
			$('#chatTextBoxAvenger').val(chatTextBox).focus();
		});

		$('#emoticon').click(function (e) {
			$('div.emoticon').toggle();
		});
	};
	Chat.prototype.sendMessage = function () {
	    var that = this;
		var msg = $('#chatTextBoxAvenger').val();
		Config.ChatChannel = Config.ChatChannel != null ? Config.ChatChannel : 'rieng';

		if (msg != null && msg.length <= 125) {
			if (App.chatHub && App.chatHub.connection && (App.chatHub.connection.state === $.signalR.connectionState.connected)) {
			    send(msg, Config.ChatChannel);
			} else {
				that.initHub();
				that.startHub(function () {
					try {
					    App.chatHub.server.registerChat(Config.ChatChannel).done(function () {
					        send(msg, Config.ChatChannel);
						});
					} catch (e) { }
				});
			}
		}
	}

	Chat.prototype.broadcastMessage = function (messages) {
	    var html = '<li><p id="bxvg_chat_notitime" style="color: red;">' + messages + '</p></li>';
	    $('#avengerChatContent').append(html);
	    $('.content_chat').mCustomScrollbar("scrollTo", "bottom");
	    setTimeout(function () {
	        $('#bxvg_chat_notitime').remove();
	    }, 2000);
	};
	function bindingPlayerName(accountId, playerName) {
		var pName = $('<span data-type="player" data-value="' + accountId + '">' + playerName + '</span>');

		pName.click(function (e) {
			var self = $(this);
			if (self.data('toggle')) {
				$('#content').click();
				return false;
			}
			self.data('toggle', true);
			$('.meucontext').remove();

			var divEle = $('<div class="btn_area meucontext" style="position: absolute; width: 140px; height: 70px; opacity: 0.90; border: 1px solid rgba(0,0,0,.3)"></div>');
			var btn = $('<a class="line" style="text-align: center; height: 25px; width: 120px; position: absolute; bottom: 10px; left: 10px;">Xem Profile</a>');
			divEle.append('<span style="padding: 10px; line-height: 30px;">' + self.text() + '</span>');
			divEle.append(btn);
			var container = $('#chat:visible, #chatbox:visible');
			var offset = container.position();
			var top = offset.top + $(this).position().top + 50;
			var left = offset.left + $(this).position().left + 50;
			divEle.css('top', top);
			divEle.css('left', left);
			btn.click(function () {
				Profile.showProfileInfo(self.data('value'), true);
				$('.meucontext').remove();
				self.data('toggle', false);
			});
			e.stopPropagation();

			$('#content').append(divEle);
			$(document).click(function () {
				$(document).unbind('click');
				$('.meucontext').remove();
				self.data('toggle', false);
			});
		});

		return pName;
	}

	function afterSendMessage(success) {
		if (success) {
			$('#chatTextBoxAvenger').val('');
		}
	}

	function send(msg, channel) {
		try {
			App.chatHub.server.sendMessage(msg, channel).done(function (success) {
				afterSendMessage(success);
			});
		} catch (e) { }
	}

	Chat.prototype.receiveMessage = function (chatMessage) {
	    if (typeof (chatMessage) !== "undefined" && chatMessage !== null) {
	        chatMessage.ChannelId = chatMessage.i || chatMessage.ChannelId;
	        chatMessage.AccountID = chatMessage.a || chatMessage.AccountID;
	        chatMessage.NickName = chatMessage.n || chatMessage.AccountID;
	        chatMessage.Content = chatMessage.c || chatMessage.Content;
	        this.receiveMessage02(chatMessage);
	    }
	    //if (chatMessage.ChannelId !== Config.ChatChannel)
		//	return;

		//if (typeof (chatMessage.NickName) !== "undefined" && chatMessage.NickName !== null && chatMessage.NickName !== '') {
		//	var pEle = $('<p></p>');
		//	var pName = bindingPlayerName(chatMessage.AccountID, chatMessage.NickName);
		//	pEle.append(pName);

		//	//var emotion = chatMessage.Content;
		//	var message = $('<label/>').text(chatMessage.Content);
		//	pEle.append(': ');
		//	pEle.append(message);
		//	message.emotions();

		//	$('div.emoticon').hide();
		//	$("#content-chat .mCSB_container").append(pEle.clone(true));

		//	setTimeout(function() {
		//		$('#content-chat').mCustomScrollbar("scrollTo", parseInt($("#content-chat .mCSB_container").height(), 10));
		//	}, 500);
		//}
	}
	Chat.prototype.receiveMessage02 = function (chatMessage) {
	    if (chatMessage.ChannelId !== Config.ChatChannel)
	        return;

	    var count = $('#avengerChatContent').children().length;
	    if (count > 30) {
	        for (var i = 0; i < count - 30; i++) {
	            $('#avengerChatContent  p:nth-child(1)').remove();
	        }
	    }

	    if (typeof (chatMessage.NickName) !== "undefined" && chatMessage.NickName !== null && chatMessage.NickName !== '') {
	        var pEle = '';

	        if (App.CD2AccInfo != undefined && chatMessage.AccountID == parseInt(App.CD2AccInfo.Account.AccountID)) {
	            pEle += '<p><b style="color: #57c34a;">' + chatMessage.n + ': </b>' + chatMessage.c + '</p>';
	        } else {
	            pEle += '<p><b>' + chatMessage.n + ': </b>' + chatMessage.c + '</p>';
	        }

	        $('#avengerChatContent').append(pEle);

	        $('.content_chat').mCustomScrollbar({ advanced: { updateOnContentResize: true } });
	        $('.content_chat').mCustomScrollbar("scrollTo", "bottom");
	    }
	};
	window.ChatAvenger = Chat;
})(window, jQuery);

$(document).ready(function () {
    //debugger;
    //ChatAvenger.startChat();
    //setTimeout(function () {
    //    ChatAvenger.registerChat(); 
    //}, 3000);
});