var audioInstance={};var AudioLib={};var GameAudio=new function(){this.Play=function(audioFileId,volume,loop,saveInstance){if(!volume)volume=1;if(!loop)loop=0;if(audioFileId.indexOf("Music")>-1){if(!AudioLib.hasOwnProperty(audioFileId)){instanceAudio(audioFileId,volume,loop);AudioLib[audioFileId]=audioInstance;if(!Config.IsPlayMusic){AudioLib[audioFileId].muted=true;}}else{if(!Config.IsPlayMusic){AudioLib[audioFileId].muted=true;}else{AudioLib[audioFileId].muted=false;AudioLib[audioFileId].play();}}}else if(audioFileId.indexOf("Sound")>-1&&Config.IsPlaySound){instanceAudio(audioFileId,volume,loop);if(saveInstance){AudioLib[audioFileId]=audioInstance;}}}
this.Stop=function(audioFileId){if(audioFileId){if(AudioLib.hasOwnProperty(audioFileId)){AudioLib[audioFileId].stop();}}else{createjs.Sound.stop();}}
this.SetMuteSound=function(state){Config.IsPlaySound=state;SetMute('Sound',state);}
this.SetMuteMusic=function(state){Config.IsPlayMusic=state;SetMute('Music',state);}
var instanceAudio=function(audioFileId,volume,loop){createjs.Sound.volume=volume;audioInstance=createjs.Sound.play(audioFileId,{interrupt:createjs.Sound.INTERRUPT_ANY,loop:loop});if(audioInstance.playState=="playFailed"){setTimeout(function(){GameAudio.Play(audioFileId,volume,loop);},1000);}
if(typeof navigator.vibrate=='function')
navigator.vibrate(300);else if(typeof navigator.mozVibrate=='function')
navigator.mozVibrate(300);else if(typeof navigator.webkitVibrate=='function')
navigator.webkitVibrate(300);return audioInstance;}
var SetMute=function(type,state){for(var prop in AudioLib){if(AudioLib.hasOwnProperty(prop)&&prop.indexOf(type)>-1){AudioLib[prop].muted=!state;}}}}