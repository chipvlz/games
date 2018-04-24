(function (scope) {
	var hubmanager = function () { this.ConnectHub(); };
	var connection = null;
	hubmanager.prototype.ConnectHub = function () {

		this.Connection = $.hubConnection(Config.Url.Game_Hub);
		App.gameHub = this.Connection.createHubProxy('gameHub');
		$.connection.hub.logging = true;
		connection = this.Connection;
		// trạng thái kết nối
		this.Connection.stateChanged(function (change) {
			if (change.newState === $.signalR.connectionState.connecting) {
				console.log('Đang kết nối...');
			} else if (change.newState === $.signalR.connectionState.reconnecting) {
				console.log('Đang kết nối lại...');
			} else if (change.newState === $.signalR.connectionState.connected) {
				// kết nối thành công
			} else if (change.newState === $.signalR.connectionState.disconnected) {
				console.log('Mất kết nối...');
			}
		});
		this.Connection.connectionSlow(function () {
			console.log('Connection Slow.');
		});

		this.Connection.error(function (error) {
			// Lỗi kết nối
			console.log("Connection Error");
		});
		this.Connection.reconnected(function () {
			console.log("Connection reconnected");
			GuiContents.BindEvents();
			if (Config.CurrentState == 1) {
			    Config.CurrentState = 0;
				GuiContents.AutoSpin();
			}
		});
		//Gọi gameHub
		scope.GameHub(App.gameHub);

		//this.StartHubs();

	};

	hubmanager.prototype.StartHubs = function () {
		try {
            connection.start({ waitForPageLoad: false, jsonp: true, transport: ['webSockets', 'longPolling']}).done(function () {
				// Đã kết nối
				console.log("Kết nối thành công");
				App.gameHub.server.PlayNow()
					.done(function (accId) {
						console.log('PlayNow:', accId);
						if (accId < 0) {
							App.CD2AccInfo = null;
							GuiContents.BindEvents();
						}
					}).fail(function (err) {
						console.log('PlayNow Error:', err);
					});
			});
		} catch (e) {
		}
	};

	scope.HubManager = hubmanager;
})(window);