(function (scope, $) {
	var Preloader = function() {

	};

	var tooltipHtml = [
		'Khi có đủ <b>5</b> biểu tượng <b>Bonus</b>, bạn sẽ bước vào màn săn <b>Jackpot</b>',
		'Với slot <b>243</b> ways, bạn không cần phải chọn dòng',
		'Tính năng <b>Stacked Wild</b> giúp bạn có những chiến thắng ấn tượng',
		'Bạn có thể gấp <b>8</b> lần giá trị thắng trong màn game <b>Nhân Đôi</b>',
		'Bạn vẫn có thể quay slot khi tắt thiết bị với tính năng <b>Thiết Lập Quay Tự Động</b>',
	];

    // load resource 
    Preloader.prototype.LoadResource = function (assetManifest, showLoading) {
        if (!assetManifest)
            return;
        preloader = new createjs.LoadQueue(true);
        preloader.on("complete", this.handleComplete);
        preloader.on("progress", this.handleProgress);
        preloader.on("error", function (evt) {
            console.log('Resources had been Error loadded!');
            console.log(evt);
        });

        if (assetManifest.length <= 0)
            return;
        for (var i = 0; i < assetManifest.length; i++) {
            assetManifest[i].src = Config.Url.ROOT + assetManifest[i].src;
        }
        preloader.loadManifest(assetManifest);
    };

    // trong quá trình upload
    Preloader.prototype.handleProgress = function (event) {
    	var percent = event.progress * 100;

    	percent = Math.floor(percent);
        $('#loadingAvenger').text(percent + ' %');
    };

    //Load complete
    Preloader.prototype.handleComplete = function (event) {
        $("#loadingDivAvenger").hide();
        $('#canvasAvenger').show();
    	$('#btnJackpotHunter').click(GuiContents.OpenJackpotHunter);
    	$('.cd2_hidechat_btn').click(GuiContents.HideChat);

        if (App.gameResources.callBack) {
            App.gameResources.callBack();
        }
    };

    // lấy ảnh truyền vào id
    Preloader.prototype.getItem = function (itemId) {
        return preloader.getItem(itemId);
    };

    Preloader.prototype.getResult = function (itemId) {
        var result = preloader.getResult(itemId);
        return result;
    };

    Preloader.prototype.getResourceItem = function (id) {
    	var result = this.getResult(id);
    	if (result) {
    		return result;
    	} else {
    		console.log('Resources not already!!!', id);
    	}
    	return null;
    };



    Preloader.prototype.LoadSound = function (manifest) {
        createjs.Sound.registerPlugins([createjs.HTMLAudioPlugin, createjs.FlashAudioPlugin, createjs.WebAudioPlugin]);
        var queue = new createjs.LoadQueue();

        createjs.Sound.alternateExtensions = ["mp3"];
        if (createjs.Sound)
            queue.installPlugin(createjs.Sound);
        queue.on("complete", function () {
	        console.log("Load sounds complete");
        });
        for (var i = 0; i < manifest.length; i++) {
        	manifest[i].src = Config.Url.ROOT + manifest[i].src;
        }
        queue.loadManifest(manifest);
    }
    
    scope.Preloader = Preloader;
}(window, jQuery));