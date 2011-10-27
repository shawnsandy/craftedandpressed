jQuery.webshims.gcEval=function(b,e){with(e&&e.form||window)with(e||window)return function(b){eval(b)}.call(e||window,b)};
jQuery.webshims.register("form-core",function(b,e,q,h,v,k){(function(){var a=q.Modernizr;if(a.formvalidation){var c=a.input||{},g=b('<form action="#"><select /><input type="date" required name="a" /></form>'),f=b("input",g);g.appendTo("head");a.validationmessage=!!f.prop("validationMessage");a.requiredSelect=!!("required"in b("select",g)[0]);a.bugfreeformvalidation=a.formvalidation&&a.requiredSelect&&a.validationmessage&&(!b.browser.webkit||navigator.userAgent.indexOf("hrome")!=-1&&e.browserVersion>
534.19)&&!q.testGoodWithFix;c.valueAsNumber=!1;c.valueAsNumberSet=!1;c.valueAsDate=!1;c.valueAsNumber="valueAsNumber"in f[0];if(c.valueAsNumber)f[0].valueAsNumber=0,c.valueAsNumberSet=f[0].value=="1970-01-01";c.valueAsDate="valueAsDate"in f[0];if(c.valueAsNumber&&!c.valueAsNumberSet)a.bugfreeformvalidation=!1;g.remove();g=f=null;if(!a.bugfreeformvalidation)c=["form-native-fix"],e.addPolyfill("form-native-fix",{feature:"forms",test:a.bugfreeformvalidation,dependencies:["form-extend"]}),e.modules["form-extend"].test=
!1,b.event.special["form-extendReady"]&&delete b.event.special["form-extendReady"],e.modules["forms-ext"].test=!1,b.event.special["forms-extReady"]&&(delete b.event.special["forms-extReady"],c.push("forms-ext")),e.loader.loadList(c),e.cfg.waitReady&&(b.readyWait++,e.ready(c,function(){b.ready(!0)}))}})();var w={radio:1},r={checkbox:1,radio:1},x=b([]),l=function(a){var a=b(a),c=a[0].name;return w[a[0].type]&&c?b(a[0].form&&a[0].form[c]||h.getElementsByName(c)).not(a[0]):x},m,s={number:1,range:1,date:1,
time:1,"datetime-local":1,datetime:1,month:1,week:1};b.extend(b.expr.filters,{"valid-element":function(a){return!(!b.prop(a,"willValidate")||!(b.prop(a,"validity")||{valid:1}).valid)},"invalid-element":function(a){return!(!b.prop(a,"willValidate")||n(a))},"required-element":function(a){return!(!b.prop(a,"willValidate")||!b.prop(a,"required"))},"optional-element":function(a){return!!(b.prop(a,"willValidate")&&b.prop(a,"required")===!1)},"in-range":function(a){if(!s[b.prop(a,"type")]||!b.prop(a,"willValidate"))return!1;
a=b.prop(a,"validity");return!(!a||a.rangeOverflow||a.rangeUnderflow)},"out-of-range":function(a){if(!s[b.prop(a,"type")]||!b.prop(a,"willValidate"))return!1;a=b.prop(a,"validity");return!(!a||!a.rangeOverflow&&!a.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(a){b.expr.filters[a]=b.expr.filters[a+"-element"]});var n=function(a){return(b.prop(a,"validity")||{valid:1}).valid},y=b.prop,z={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1},o;b.prop=function(a,c,g){var f=
y.apply(this,arguments);a&&"form"in a&&z[c]&&g!==v&&b(a).hasClass("form-ui-invalid")&&n(a)&&(b(a).getShadowElement().removeClass("form-ui-invalid"),c=="checked"&&g&&l(a).removeClass("form-ui-invalid").removeAttr("aria-invalid"));return f};b(h).bind("focusout change refreshvalidityui",function(a){if(!o&&a.target&&a.target.type!="submit"&&b.prop(a.target,"willValidate")){var c=b(a.target).getNativeElement()[0],g=b(c).getShadowElement(),f,e,d;n(c)?g.hasClass("form-ui-valid")||(f="form-ui-valid",e="form-ui-invalid",
d="changedvalid",r[c.type]&&c.checked&&l(c).removeClass(e).addClass(f).removeAttr("aria-invalid")):g.hasClass("form-ui-invalid")||(f="form-ui-invalid",e="form-ui-valid",r[c.type]&&!c.checked&&l(c).removeClass(e).addClass(f),d="changedinvalid");f&&(g.addClass(f).removeClass(e),setTimeout(function(){b(c).trigger(d)},0));o=!0;setTimeout(function(){o=!1;c=g=null},9)}});e.triggerInlineForm=function(a,c){a.jquery&&(a=a[0]);var g="on"+c,f=a[g]||a.getAttribute(g)||"",i,d,c=b.Event({type:c,target:a,currentTarget:a});
f&&typeof f=="string"&&(d=e.gcEval(f,a),a[g]&&(i=!0,a[g]=!1));d===!1&&(c.stopPropagation(),c.preventDefault());b(a).trigger(c);i&&(a[g]=f);return d};var t=function(){e.scrollRoot=b.browser.webkit||h.compatMode=="BackCompat"?b(h.body):b(h.documentElement)};t();e.ready("DOM",t);e.validityAlert=function(){var a=!b.browser.msie||parseInt(b.browser.version,10)>7?"span":"label",c={top:0,left:0},g={hideDelay:5E3,getBodyOffset:function(){c=f.offset()},showFor:function(a,d,c,e){var a=b(a),h=b(a).getShadowElement(),
j=g.getOffsetFromBody(h);e?this.hide():(g.clear(),this.getMessage(a,d),this.position(h,j),f.css({fontSize:a.css("fontSize"),fontFamily:a.css("fontFamily")}),this.show(),this.hideDelay&&(i=setTimeout(u,this.hideDelay)));c||this.setFocus(h,j)},getOffsetFromBody:function(a){a=b(a).offset();b.swap(f[0],{visibility:"hidden",display:"inline-block",left:0,top:0},g.getBodyOffset);a.top-=c.top;a.left-=c.left;return a},setFocus:function(d,c){var g=b(d).getShadowFocusElement(),i=e.scrollRoot.scrollTop(),p=(c||
g.offset()).top-30,j;e.getID&&a=="label"&&f.attr("for",e.getID(g));i>p&&(e.scrollRoot.animate({scrollTop:p-5},{queue:!1,duration:Math.max(Math.min(600,(i-p)*1.5),80)}),j=!0);try{g[0].focus()}catch(k){}j&&(e.scrollRoot.scrollTop(i),setTimeout(function(){e.scrollRoot.scrollTop(i)},0));setTimeout(function(){b(h).bind("focusout.validityalert",u)},10)},getMessage:function(a,d){b("> span.va-box",f).text(d||m(a[0])||a.prop("validationMessage"))},position:function(a,d){d=d?b.extend({},d):g.getOffsetFromBody(a);
d.top+=a.outerHeight();f.css(d)},show:function(){f.css("display")==="none"&&f.css({opacity:0}).show();f.fadeTo(400,1)},hide:function(){g.clear();f.fadeOut()},clear:function(){clearTimeout(d);clearTimeout(i);b(h).unbind("focusout.validityalert");f.stop().removeAttr("for")},errorBubble:b("<"+a+' class="validity-alert" role="alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></'+a+">").css({position:"absolute",display:"none"})},f=g.errorBubble,i=!1,d=!1,
u=b.proxy(g,"hide");e.ready("DOM",function(){f.appendTo("body");b.fn.bgIframe&&b.browser.msie&&parseInt(b.browser.version,10)<7&&f.bgIframe()});return g}();(function(){var a,c=[],e;b(h).bind("invalid",function(f){if(!f.wrongWebkitInvalid){var i=b(f.target),d=i.getShadowElement();d.hasClass("form-ui-invalid")||(d.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){b(f.target).trigger("changedinvalid")},0));if(!a)a=b.Event("firstinvalid"),a.isInvalidUIPrevented=f.isDefaultPrevented,
d=b.Event("firstinvalidsystem"),b(h).triggerHandler(d,{element:f.target,form:f.target.form,isInvalidUIPrevented:f.isDefaultPrevented}),i.trigger(a);a&&a.isDefaultPrevented()&&f.preventDefault();c.push(f.target);f.extraData="fix";clearTimeout(e);e=setTimeout(function(){var d={type:"lastinvalid",cancelable:!1,invalidlist:b(c)};a=!1;c=[];b(f.target).trigger(d,d)},9);d=i=null}})})();k.replaceValidationUI&&e.ready("DOM",function(){b(h).bind("firstinvalid",function(a){a.isInvalidUIPrevented()||(a.preventDefault(),
b.webshims.validityAlert.showFor(a.target,b(a.target).prop("customValidationMessage")))})});(function(){var a=e.validityMessages,c=k.overrideMessages||k.customMessages?["customValidationMessage"]:[];a.en=a.en||a["en-US"]||{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL."},tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}};
["select","radio"].forEach(function(b){a.en.valueMissing[b]="Please select an option."});a["en-US"]=a["en-US"]||a.en;a[""]=a[""]||a["en-US"];a.de=a.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse"},tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Buchstaben eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}};["select","radio"].forEach(function(b){a.de.valueMissing[b]="Bitte w\u00e4hlen Sie eine Option aus"});var g=a[""];e.activeLang({langObj:a,module:"form-core",callback:function(a){g=a}});e.createValidationMessage=function(a,c){var d=g[c];d&&typeof d!=="string"&&(d=d[b.prop(a,"type")]||d[(a.nodeName||"").toLowerCase()]||d.defaultMessage);d&&["value","min","max","title","maxlength","label"].forEach(function(c){if(d.indexOf("{%"+c)!==-1){var e=(c=="label"?
b.trim(b('label[for="'+a.id+'"]',a.form).text()).replace(/\*$|:$/,""):b.attr(a,c))||"";d=d.replace("{%"+c+"}",e);"value"==c&&(d=d.replace("{%valueLen}",e.length))}});return d||""};(!Modernizr.validationmessage||!Modernizr.formvalidation)&&c.push("validationMessage");e.getContentValidationMessage=function(a,c){var d=a.getAttribute("x-moz-errormessage")||a.getAttribute("data-errormessage")||"";if(d&&d.indexOf("{")!=-1){try{d=jQuery.parseJSON(d)}catch(g){return d}typeof d=="object"&&(c=c||b.prop(a,"validity")||
{valid:1},c.valid||b.each(c,function(a,b){if(b&&a!="valid"&&d[a])return d=d[a],!1}));e.data(a,"contentErrorMessage",d);if(typeof d=="object")d=d.defaultMessage}return d||""};m=e.getContentValidationMessage;e.ready("dom-support",function(a,b){Modernizr.datalist&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&b.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var c=a("select",this);if(c[0]&&
c[0].options&&c[0].options.length)b=c[0].options}return b}}});c.forEach(function(c){b.defineNodeNamesProperty(["fieldset","output","button"],c,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(e){var g=b.defineNodeNameProperty(e,c,{prop:{get:function(){var c=this,d="";if(!a.prop(c,"willValidate"))return d;var e=a.prop(c,"validity")||{valid:1};if(e.valid)return d;if(d=m(c,e))return d;if(e.customError&&c.nodeName&&(d=Modernizr.validationmessage&&g.prop._supget?g.prop._supget.call(c):
b.data(c,"customvalidationMessage")))return d;a.each(e,function(a,e){if(a!="valid"&&e&&(d=b.createValidationMessage(c,a)))return!1});return d||""},writeable:!1}})})});b.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return b.inputTypes[a]?a:this.type}}})})})()});