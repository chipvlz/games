var slotArray,itemContainer,gameStage,animationStage,bonusStage,doubleStage,isShowJackpotHunter,timeoutPopup,timeoutSpin,intervalPingPong,timeoutLineWin,timeoutRepeat,intervalLineWin,avengerChat,timeoutDouble;var options={useEasing:true,useGrouping:true,separator:'.',decimal:','}
var roomValue={1:1000,2:10000,3:100000};(function(){window.App={};var app={};app.gameResources=new window.Preloader();app.InitEventBtn=function(){$('.btn_chat').click(function(e){e.preventDefault();$('.btn_chat').fadeOut(200);$('.chat_detail').fadeIn(500);});$('.chat_detail .main_chat .close').click(function(e){e.preventDefault();$('.btn_chat').fadeIn(500);$('.chat_detail').fadeOut(200);});$('.vinhdanh_box .btn_vinhdanh').click(function(e){e.preventDefault();$('.btn_vinhdanh').fadeOut(200);$('.vinhdanh_detail').fadeIn(500);});$('.vinhdanh_detail .close').click(function(e){e.preventDefault();$('.btn_vinhdanh').fadeIn(500);$('.vinhdanh_detail').fadeOut(200);});$('.btn_history').click(function(){$('.avg_popup_LSGD').fadeIn(500);});$('.btn_setting').click(function(){$('.setting_detail').fadeIn(500);$('.main_setting .set_sound').click(function(){GuiContents.ClickSoundSetting();if($(this).hasClass('non_active')){$(this).removeClass('non_active');}else{$(this).addClass('non_active');}});$('.main_setting .set_soundbg').click(function(){GuiContents.ClickMusicSetting();if($(this).hasClass('non_active')){$(this).removeClass('non_active');}else{$(this).addClass('non_active');}});});$('.setting_detail .close').click(function(){$('.setting_detail').fadeOut(200);});$('.btn_bangthuong').click(function(){$('.avg_popup_bangthuong').fadeIn(500);});$('.btn_docs').click(function(){$('.avg_popup_docs').fadeIn(500);});$('.btn_top').click(function(){$('.avg_popup_thongke').fadeIn(500);});$('.avg_popup .close_pop').click(function(){$('.avg_popup').fadeOut(200);});$('.avg_popup_large .content_pop .nav_docs a').click(function(){$('.avg_popup_large .content_pop .nav_docs a, .paging_docs a').removeClass('active');$(this).addClass('active');var nameH=$('.avg_popup_large .content_pop .nav_docs a.active').attr('name');$('.paging_docs a.'+nameH).addClass('active');$('.cont_docs .cont_doc_item').hide();$('.cont_docs .cont_doc_item.'+nameH).show();});$('.paging_docs a.prev_docs').click(function(){if($('.content_pop .nav_docs a').first().hasClass('active')){$('.content_pop .nav_docs a.active, .paging_docs a.active').removeClass('active');$('.content_pop .nav_docs a').last().addClass('active');var nameH=$('.content_pop .nav_docs a.active').attr('name');$('.paging_docs a.'+nameH).addClass('active');$('.cont_docs .cont_doc_item').hide();$('.cont_docs .cont_doc_item.'+nameH).show();}else{$('.content_pop .nav_docs a.active').removeClass('active').prev().addClass('active');var nameH=$('.content_pop .nav_docs a.active').attr('name');$('.paging_docs a.active').removeClass('active');$('.paging_docs a.'+nameH).addClass('active');$('.cont_docs .cont_doc_item').hide();$('.cont_docs .cont_doc_item.'+nameH).show();}});$('.paging_docs a.next_docs').click(function(){if($('.content_pop .nav_docs a').last().hasClass('active')){$('.content_pop .nav_docs a.active, .paging_docs a.active').removeClass('active');$('.content_pop .nav_docs a').first().addClass('active');var nameH=$('.content_pop .nav_docs a.active').attr('name');$('.paging_docs a.'+nameH).addClass('active');$('.cont_docs .cont_doc_item').hide();$('.cont_docs .cont_doc_item.'+nameH).show();}else{$('.content_pop .nav_docs a.active').removeClass('active').next().addClass('active');var nameH=$('.content_pop .nav_docs a.active').attr('name');$('.paging_docs a.active').removeClass('active');$('.paging_docs a.'+nameH).addClass('active');$('.cont_docs .cont_doc_item').hide();$('.cont_docs .cont_doc_item.'+nameH).show();}});$('.nav_thongke a').click(function(){$('.nav_thongke a').removeClass('active');$(this).addClass('active');var nameD=$('.nav_thongke a.active').attr('name');$('.cont_thongkes .cont_thongke_item').hide();$('.cont_thongkes .cont_thongke_item.'+nameD).show();});}
app.gameResources.callBack=function(){delete App.gameResources.callBack;console.log("Resource load complete");if(!App.GameAPI){App.GameAPI=new window.GameAPI();}
if(!App.Game){App.Game=new window.GameLogic();}
new window.HubManager().StartHubs();App.InitEventBtn();};app.StartLogic=function(){if(sessionStorage.getItem('cd2_setting_sound')!==null&&sessionStorage.getItem('cd2_setting_sound')==='false'){Config.IsPlaySound=false;$('#setting-sound').addClass('non_active');GameAudio.SetMuteSound(Config.IsPlaySound);}
if(sessionStorage.getItem('cd2_setting_music')!==null&&sessionStorage.getItem('cd2_setting_music')==='false'){Config.IsPlayMusic=false;$('#setting-music').addClass('non_active');GameAudio.SetMuteMusic(Config.IsPlayMusic);}
App.gameResources.LoadResource(ResouceImageAvenger,true);App.gameResources.LoadSound(ResouceSoundAvenger);}
window.App=app;})();