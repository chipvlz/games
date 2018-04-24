Common=new function(){this.GetSpriteImage=function(jsonData,name){if(!jsonData)
return null;var spriteSheet=new createjs.SpriteSheet(jsonData);var bmpa=new createjs.Sprite(spriteSheet);bmpa.gotoAndStop(name);return bmpa;}
this.GetImageSpriteSheet=function(spriteSheet,name){var bmpa=new createjs.Sprite(spriteSheet);bmpa.gotoAndStop(name);return bmpa;}
this.GetSprite=function(spriteSheet,animationName){var bmpa=new createjs.Sprite(spriteSheet,animationName);return bmpa;}
this.RunImagesKeepButton=function(stage,spriteSheet,imageName,totalItems,x,y,rotation,skewX,skewY,scaleX,scaleY,timeLoadOneImage,hideFunction,callback){for(var i=0;i<totalItems;i++){var hieuUng=Common.GetImageSpriteSheet(spriteSheet,imageName+i.toString());hieuUng.set({alpha:0,x:x,y:y,rotation:rotation,skewX:skewX,skewY:skewY,scaleX:scaleX,scaleY:scaleY,regX:hieuUng.getBounds().width/2});if(i!=totalItems-1){if(i==0){createjs.Tween.get(hieuUng,{loop:false,override:true}).wait(timeLoadOneImage*i).set({alpha:1}).call(function(){if(hideFunction){hideFunction();}}).wait(timeLoadOneImage).set({alpha:0});}else{createjs.Tween.get(hieuUng,{loop:false,override:true}).wait(timeLoadOneImage*i).set({alpha:1}).wait(timeLoadOneImage).set({alpha:0});}}else{createjs.Tween.get(hieuUng,{loop:false,override:true}).wait(timeLoadOneImage*i).set({alpha:1}).wait(timeLoadOneImage).set({alpha:0}).call(function(){if(callback){callback();}});}
stage.addChildAt(hieuUng,stage.getNumChildren());}},this.ConverDateTime=function(dateString){var date=dateString.split("T");var day=date[0].split("-");var time=date[1].split(".")[0].split(":");var newDateString=day[2]+'/'+day[1];var excelDateString=newDateString+' '+time[0]+":"+time[1];return excelDateString;}
this.ConverSignalRDate=function(inputDate){var dateString=inputDate.split(".")[0];var date=dateString.split("T");var day=date[0].split("-");var time=date[1].split(".")[0].split(":");var newDateString=day[2]+'-'+day[1]+'-'+day[0];var excelDateString=time[0]+":"+time[1]+":"+time[2]+" "+newDateString;return excelDateString;}
this.GetStageObjectIndex=function(stage,key,name){for(var i=0;i<stage.length;i++){if(stage[i][key]==name)
return i;}
return-1;}
this.showCreditWin=function(value){if(value<=1)return;var html="",img="",valueArr=CommonUtility.formatMoney(value).split('');for(var i=0;i<valueArr.length;i++){img=(valueArr[i]=='.')?'cham':valueArr[i];html+="<img class='img_credit"+img+"'"+" src='resources/Themes/"+Config.defaultThemes+"/images/"+Config.currentLanguage+"/number/"+img+".png' />";}
$('#credit_div').show();$('#credit_div').html("<div>"+html+"</div>");};this.GetImageList=function(value){if(!value||!(typeof value=="number"))return undefined;if(value<1)return "0";return CommonUtility.formatMoney(value).split('');}
this.GetImageNumberHtml=function(value)
{if(value<=1)
return "";var html="",img="",valueArr=CommonUtility.formatMoney(value).split('');for(var i=0;i<valueArr.length;i++){img=(valueArr[i]=='.')?'cham':valueArr[i];html+="<img class='img_credit"+img+"'"+" src='resources/Themes/"+Config.defaultThemes+"/images/"+Config.currentLanguage+"/number/"+img+".png' />";}
return "<div>"+html+"</div>";}
this.Shuff=function(array){var currentIndex=array.length,temporaryValue,randomIndex;while(0!==currentIndex){randomIndex=Math.floor(Math.random()*currentIndex);currentIndex-=1;temporaryValue=array[currentIndex];array[currentIndex]=array[randomIndex];array[randomIndex]=temporaryValue;}
return array;}
this.showMessageChooseRoom=function(){Common.ShowMessage("Thông báo!","Bạn cần chọn ít nhất 1 phòng để chơi");}
this.showMessageLineDisable=function(){Common.ShowMessage("Thông báo!","Bạn không thể chọn dòng khi đang quay hoặc bonus");}
this.showMessageTry=function(){Common.ShowMessage("Thông báo!","Bạn không thể chọn dòng khi quay thử!");}
this.showMessageFreeSpin=function(){Common.ShowMessage("Thông báo!","Bạn không thể chọn dòng khi ở lượt quay miễn phí!");}
this.showMessageAutoPlay=function(){Common.ShowMessage("Thông báo!","Bạn không thể chọn dòng khi đang ở chế độ quay tự động");}
this.showMessageErrorBalance=function(callback){Common.ShowMessage("Thông báo!","Số dư của bạn không đủ để thực hiện hành động này!",callback);}
this.userLogin=function(){if(App.AccountID>0){return true;}
window.location.href=Config.AUTHEN_URL+'&ur='+encodeURIComponent(utils.rootUrl())+'&m=1&continue='+Config.PORTAL_URL+'Authen.aspx';return false;};this.confirmLogin=function(){Common.showPopupConfim("Thông báo!","Bạn cần đăng nhập để thực hiện hành động này",function(){window.location.href=Config.AUTHEN_URL+'&ur='+encodeURIComponent(utils.rootUrl())+
'&m=1&continue='+Config.PORTAL_URL+'Authen.aspx';});};this.showPopupConfim=function(title,message,callback){Common.closePopup();$("BODY").append('<div id="bgPopup">'+
' <div class="popupContent">'+
'<h1>'+title+'</h1>'+
'<div class="note">'+
message+
'</div>'+
'<center>'+
'<button style="cursor:pointer"  onclick="Common.excuteCallback('+callback+')">Đồng ý</button>'+
'<button style="cursor:pointer"  onclick="Common.closePopup()">Hủy bỏ</button>'+
'</center>'+
'<a href="javascript:;"  onclick="Common.closePopup()">'+
'<img src="'+Config.URL_ROOT+'images/ButtonAndIcon/cancel.png" class="close"/></a>'+
'<div class="clear"></div>'+
'</div>'+
'</div>');}
this.excuteCallback=function(callback)
{Common.closePopup();if(callback)
callback();}
this.ShowMessage=function(title,message,callback){Common.closePopup();$("BODY").append('<div id="bgPopup">'+
' <div class="popupContent">'+
'<h1>'+title+'</h1>'+
'<div class="note">'+
message+
'</div>'+
'<center>'+
'<button style="cursor:pointer"  onclick="Common.callBackPopupMessage('+callback+')">Đồng ý</button>'+
'</center>'+
'<a href="javascript:;"  onclick="Common.callBackPopupMessage('+callback+')">'+
'<img src="'+Config.URL_ROOT+'images/ButtonAndIcon/cancel.png" class="close"/></a>'+
'<div class="clear"></div>'+
'</div>'+
'</div>');};this.callBackPopupMessage=function(callback){Common.closePopup();if(callback){callback();}}
this.closePopup=function(){$("#bgPopup").remove();};this.getUserOnline=function(){function getRandomInt(min,max){return Math.floor(Math.random()*(max-min))+min;}
function showUserOnline(){var userOnline=getRandomInt(3500,4000);var userPlaying=Math.floor(parseInt(userOnline,10)*parseInt(getRandomInt(85,90),10)/100);$("#countUserPlay").html('Số người đang chơi:'+userPlaying);$("#countUserOnline").html('Số người online:'+userOnline);}
showUserOnline();setInterval(showUserOnline,30000);}
this.accountHistory=function(start){var url=Config.BASE_URL+"api/History/GetHistory";pageSize=20;start=start==null?1:start;$.ajax({type:"GET",url:url,data:{Start:start,Limit:pageSize},contentType:"application/json; charset=utf-8",dataType:"json",cache:false,success:function(data){if(data.Total>=0){$("#tableContentDetail").hide();$("#tableContent").show();$("#content-2").mCustomScrollbar({autoHideScrollbar:true,theme:"default"});if(data==null||data.Results==null){return;}
var html="";for(var i=0;i<data.Results.length;i++){var item=data.Results[i];html+="<tr>";html+="<td>"+item.SessionID+"</td>";html+="<td>"+Common.jSonDateToString(item.CreatedDate,0)+"</td>";html+="<td>"+item.TotalBetValue+"</td>";html+="<td>"+CommonUtility.formatMoney(item.TotalPrizeValue)+"</td>";html+="<td>"+item.Description+"</td>";html+="<td><a href='javascript:;' onclick='Common.accountHistoryDetail("+item.SessionID+")' style='text-decoration: none;color: rgb(134, 53, 36);font-weight: bold;'>Chi tiết</a></td>";html+="</tr>";}
$("#contentHistory").html(html);$("#pageHistory").html('');var pagecount=parseInt(parseInt(data.Total,10)/parseInt(pageSize,10),10);if(pagecount>0){$("#pageHistory").pager({pagenumber:start,pagecount:pagecount,buttonClickCallback:function(page){Common.accountHistory(page);}});}}}});};this.accountHistoryDetail=function(SpinID){var url=Config.BASE_URL+"api/History/GetSpinDetail";$.ajax({type:"GET",url:url,data:{InputType:1,SpinID:SpinID},contentType:"application/json; charset=utf-8",dataType:"json",cache:false,success:function(data){$("#tableContentDetail").show();$("#tableContent").hide();$("#contentDetailSpin").html('');$("#content-2").mCustomScrollbar({autoHideScrollbar:true,theme:"default"});var detailSpin=data.DetailSpin;if(detailSpin.length>0){for(var i=0;i<detailSpin.length;i++){var item=detailSpin[i];var html="<tr>";html+="<td>"+item.SpinID+"</td>";html+="<td>"+item.LineID+"</td>";html+="<td>"+item.Multiplier+"</td>";html+="<td>"+CommonUtility.formatMoney(item.PrizeValue)+"</td>";html+="</tr>";$("#contentDetailSpin").append(html);}}}});}
this.jackpotHistory=function(start){var url=Config.BASE_URL+"api/History/GetHistoryJackPort";var pageSize=20;start=start==null?1:start;$.ajax({type:"GET",url:url,data:{currentPage:start,inputType:1,pageSize:pageSize},contentType:"application/json; charset=utf-8",dataType:"json",cache:false,success:function(data){if(data.ToTal>=0){$("#content-3").mCustomScrollbar({autoHideScrollbar:true,theme:"default"});$("#contentJackPotDetail").hide();$("#tableContentJackPot").show();var html='';for(var i=0;i<data.ListJackPort.length;i++){var item=data.ListJackPort[i];var roomName='';switch(item.RoomID){case 1:roomName='Đông Ngô';break;case 2:roomName='Tào Ngụy';break;case 3:roomName='Thục Hán';break;}
html+="<tr>";html+="<td>"+Common.jSonDateToString(item.CreatedTime,1)+"</td>";html+="<td>"+roomName+"</td>";html+="<td>"+item.Username+"</td>";html+="<td>"+CommonUtility.formatMoney(item.PrizeValue)+"</td>";html+="<td><a href='javascript:;' onclick='Common.jackpotHistoryDetail("+item.SpinID+")' style='text-decoration: none;color: rgb(134, 53, 36);font-weight: bold;'>Chi tiết</a></td>";html+="</tr>";}
$("#listContentJackPot").html(html);$("#pageHistoryJackPot").html('');var pagecount=parseInt(parseInt(data.ToTal,10)/parseInt(pageSize,10),10);if(parseInt(data.ToTal,10)%parseInt(pageSize,10)>0){pagecount=parseInt(pagecount,10)+1;}
if(pagecount>0){$("#pageHistoryJackPot").pager({pagenumber:start,pagecount:pagecount,buttonClickCallback:function(page){Common.jackpotHistory(page);}});}}}});}
this.jackpotHistoryDetail=function(SpinID){var url=Config.BASE_URL+"api/History/GetSpinDetail";$.ajax({type:"GET",url:url,data:{InputType:1,SpinID:SpinID},contentType:"application/json; charset=utf-8",dataType:"json",cache:false,success:function(data){$("#contentJackPotDetail").show();$("#tableContentJackPot").hide();$("#listJackPotDetail").html('');$("#content-3").mCustomScrollbar({autoHideScrollbar:true,theme:"default"});var detailSpin=data.DetailSpin;if(detailSpin.length>0){for(var i=0;i<detailSpin.length;i++){var item=detailSpin[i];var html=parseInt(item.PrizeID,10)==4?"<tr class='jackpotActive'>":"<tr>";html+="<td>"+item.SpinID+"</td>";html+="<td>"+item.LineID+"</td>";html+="<td>"+item.Multiplier+"</td>";html+="<td>"+CommonUtility.formatMoney(item.PrizeValue)+"</td>";html+="</tr>";$("#listJackPotDetail").append(html);}}}});}
this.getSystemNotify=function(){var url=Config.BASE_URL+"api/History/GetSystemNotify";$.ajax({type:"GET",url:url,data:{},contentType:"application/json; charset=utf-8",dataType:"json",cache:false,success:function(data){if(data.length>0){var html='';for(var i=0;i<data.length;i++){var item=data[i];html+='<p>'+item.Message+'</p>';}
$("#content-1").mCustomScrollbar("destroy");$("#content-1").html(html);$("#content-1").mCustomScrollbar({autoHideScrollbar:true,theme:"default"});}}});}
this.jSonDateToString=function(value,option){if(typeof(option)=='undefined'){option=0;}
var date=value.split('T')[0].split('-');var time=value.split('T')[1].split(':');var _day=date[2];var _month=date[1];var _year=date[0];var _hour=time[0];var _minute=time[1];var _second=time[2].split('.')[0];switch(option){case 0:return _day+'/'+_month+'/'+_year+' '+_hour+':'+_minute;break;case 1:return _day+'/'+_month+' '+_hour+':'+_minute;break;case 2:return _hour+':'+_minute+':'+_second+' '+_day+'/'+_month+'/'+_year;break;case 3:return _year+'/'+_month+'/'+_day+' '+_hour+':'+_minute+':'+_second;break;case 4:return _year+'/'+_month+'/'+_day;break;case 5:return _day+'h'+_minute;break;default:return expDate.toString();break;};};this.jSonTimeToString=function(value,option){if(typeof(option)=='undefined'){option=0;}
var expDate=new Date(value);var isChrome=!!window.chrome&&!isOpera;if(isChrome){expDate.setTime(expDate.getTime()+expDate.getTimezoneOffset()*60*1000);}
var _day=expDate.getDate();var _month=expDate.getMonth()+1;var _year=expDate.getFullYear();var _hour=expDate.getHours();var _minute=expDate.getMinutes();var _second=expDate.getSeconds();if(_day<10)_day="0"+_day;if(_month<10)_month="0"+_month;if(_hour<10)_hour="0"+_hour;if(_minute<10)_minute="0"+_minute;if(_second<10)_second="0"+_second;if(_year<=1900||_year>=9000)return '';if(option==7){expDate=new Date(expDate.valueOf());var s=Math.floor(((new Date()).getTime()-expDate.getTime())/1000);if(s<0)
s=0;if(s<60){return s+' giây trước';}
var m=Math.floor(s/60);if(m<16)
return m+' phút trước';}
var now=new Date();switch(option){case 0:return _day+'/'+_month+'/'+_year+' '+_hour+':'+_minute+':'+_second;break;case 1:return _day+'/'+_month+'/'+_year;break;case 2:return _hour+':'+_minute+':'+_second+' '+_day+'/'+_month+'/'+_year;break;case 3:return _year+'/'+_month+'/'+_day+' '+_hour+':'+_minute+':'+_second;break;case 4:return _year+'/'+_month+'/'+_day;break;case 5:return _day+'h'+_minute;break;case 6:return _day+'/'+_month+'/'+_year+' '+_hour+':'+_minute;break;case 7:var sDate='lúc '+_hour+':'+_minute;if(_day!=now.getDate()&&_month!=now.getMonth())
sDate+=' '+_day+'/'+_month;if(_year!=now.getFullYear())
sDate+='/'+_year;return sDate;break;default:return expDate.toString();break;};};}