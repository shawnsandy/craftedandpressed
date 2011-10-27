(function(j,g,i){var l=g.audio&&g.video,n=!1;if(l){var m=document.createElement("video");g.videoBuffered="buffered"in m;n="loop"in m;g.videoBuffered||(i.addPolyfill("mediaelement-native-fix",{feature:"mediaelement",test:g.videoBuffered,dependencies:["dom-support"]}),i.cfg.waitReady&&j.readyWait++,i.loader.loadScript("mediaelement-native-fix",function(){i.cfg.waitReady&&j.ready(!0)}))}j.webshims.ready("dom-support",function(e,d,g,i,j){var m=d.cfg.mediaelement,f=d.mediaelement,o=!g.swfobject||swfobject.hasFlashPlayerVersion("9.0.115"),
p=function(){d.ready("mediaelement-swf",function(){if(!f.createSWF)d.modules["mediaelement-swf"].test=!1,delete e.event.special["mediaelement-swfReady"],d.loader.loadList(["mediaelement-swf"])})},q=function(b,a){var b=e(b),c={src:b.attr("src")||"",elem:b,srcProp:b.prop("src")};if(!c.src)return c;var h=b.attr("type");if(h)c.type=h,c.container=e.trim(h.split(";")[0]);else if(a||(a=b[0].nodeName.toLowerCase(),a=="source"&&(a=(b.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),
h=f.getTypeForSrc(c.src,a))c.type=h,c.container=h,e.nodeName(b[0],"source")&&(d.warn("you should always provide a proper mime-type. "+c.src+" detected as: "+h),b.attr("type",h));if(h=b.attr("media"))c.media=h;return c};d.ready("WINDOWLOAD",function(){d.loader.loadList(["swfobject"])});d.ready("swfobject",function(){(o=swfobject.hasFlashPlayerVersion("9.0.115"))&&d.ready("WINDOWLOAD",p)});l&&d.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay",
"volumechange"]);f.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r"],"audio/wav":["wav"],"audio/x-m4a":["m4a"],"audio/x-m4p":["m4p"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],
"video/webm":["webm"]}};f.mimeTypes.source=e.extend({},f.mimeTypes.audio,f.mimeTypes.video);f.getTypeForSrc=function(b,a){if(b.indexOf("youtube.com/watch?")!=-1)return"video/youtube";var b=b.split("?")[0].split("."),b=b[b.length-1],c;e.each(f.mimeTypes[a],function(a,d){if(d.indexOf(b)!==-1)return c=a,!1});return c};f.srces=function(b,a){b=e(b);if(a)b.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(a)||(a=[a]),a.forEach(function(a){var c=i.createElement("source");typeof a=="string"&&
(a={src:a});c.setAttribute("src",a.src);a.type&&c.setAttribute("type",a.type);a.media&&c.setAttribute("media",a.media);b.append(c)});else{var a=[],c=b[0].nodeName.toLowerCase(),d=q(b,c);d.src?a.push(d):e("source",b).each(function(){d=q(this,c);d.src&&a.push(d)});return a}};e.fn.loadMediaSrc=function(b,a){return this.each(function(){a!==j&&(e(this).removeAttr("poster"),a&&e.attr(this,"poster",a));f.srces(this,b);e(this).mediaLoad()})};f.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime",
"video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","jwplayer/jwplayer","video/youtube"];f.canSwfPlaySrces=function(b,a){var c="";o&&(b=e(b),a=a||f.srces(b),e.each(a,function(a,b){if(b.container&&b.src&&f.swfMimeTypes.indexOf(b.container)!=-1)return c=b,!1}));return c};f.canNativePlaySrces=function(b,a){var c="";l&&(b=e(b),a=a||f.srces(b),e.each(a,function(a,d){if(d.type&&
b.canPlayType(d.type))return c=d,!1}));return c};f.setError=function(b,a,c){a||(a="can't play sources");c&&(c=d.data(this,"mediaelementBase",{}));c.error=a;d.warn("mediaelementError: "+a);setTimeout(function(){c.error&&e(b).trigger("mediaerror")},1)};var r=function(){var b;return function(a,c,e){d.ready("mediaelement-swf",function(){f.createSWF?f.createSWF(a,c,e):b||(b=!0,p(),r(a,c,e))})}}(),k=function(b,a,c,d,e,g){e=e||f.srces(a);b.error=!1;e.length&&(d||d!==!1&&c&&c.isActive=="flash"?(d=f.canSwfPlaySrces(a,
e))?r(a,d,c):g?f.setError(a,!1,b):k(b,a,c,!1,e,!0):(d=f.canNativePlaySrces(a))?c&&c.isActive=="flash"&&f.setActive(a,"html5",c):g?f.setError(a,!1,b):k(b,a,c,!0,e,!0))};e(i).bind("ended",function(b){var a=d.data(b.target,"mediaelement");(!n||a&&a.isActive!="html5"||e.prop(b.target,"loop"))&&setTimeout(function(){!e.prop(b.target,"paused")&&e.prop(b.target,"loop")&&e(b.target).prop("currentTime",0).play()},1)});n||d.defineNodeNamesBooleanProperty(["audio","video"],"loop");var s=/^(?:embed|object)$/i;
d.addReady(function(b,a){e("video, audio",b).add(a.filter("video, audio")).each(function(){var a=this.parentNode;if(!a||!s.test(a.nodeName||""))a=d.data(this,"mediaelementBase")||d.data(this,"mediaelementBase",{}),k(a,this,!1,m.preferFlash||j)})});["audio","video"].forEach(function(b){var a=d.defineNodeNameProperty(b,"load",{prop:{value:function(){var b=d.data(this,"mediaelement"),e=d.data(this,"mediaelementBase")||d.data(this,"mediaelementBase",{});clearTimeout(e.loadTimer);k(e,this,b);l&&(!b||b.isActive==
"html5")&&a.prop._supvalue&&a.prop._supvalue.apply(this,arguments)}}})});d.onNodeNamesPropertyModify(["audio","video"],"src",{set:function(){var b=d.data(this,"mediaelement"),a=this,c=d.data(this,"mediaelementBase")||d.data(this,"mediaelementBase",{});clearTimeout(c.loadTimer);c.loadTimer=setTimeout(function(){k(c,a,b)},9)}});d.isReady("mediaelement-core",!0)})})(jQuery,Modernizr,jQuery.webshims);
