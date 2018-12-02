!function webpackUniversalModuleDefinition(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Typed=e():t.Typed=e()}(this,function(){return function(n){function o(t){if(i[t])return i[t].exports;var e=i[t]={exports:{},id:t,loaded:!1};return n[t].call(e.exports,e,e.exports,o),e.loaded=!0,e.exports}var i={};return o.m=n,o.c=i,o.p="",o(0)}([function(t,e,n){"use strict";function S(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var k=function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}(),C=n(1),w=n(3),o=function(){function n(t,e){S(this,n),C.initializer.load(this,e,t),this.begin()}return k(n,[{key:"toggle",value:function t(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function e(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function o(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function i(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function r(t){var e=arguments.length<=0||t===undefined||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,e&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function s(){var t=this;this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)}},{key:"typewrite",value:function u(i,r){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var t=this.humanizer(this.typeSpeed),a=1;!0!==this.pause.status?this.timeout=setTimeout(function(){r=w.htmlParser.typeHtmlChars(i,r,s);var t=0,e=i.substr(r);if("^"===e.charAt(0)&&/^\^\d+/.test(e)){var n=1;n+=(e=/\d+/.exec(e)[0]).length,t=parseInt(e),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),i=i.substring(0,r)+i.substring(r+n),s.toggleBlinking(!0)}if("`"===e.charAt(0)){for(;"`"!==i.substr(r+a).charAt(0)&&!(r+ ++a>i.length););var o=i.substring(0,r);i=o+i.substring(o.length+1,r+a)+i.substring(r+a+1),a--}s.timeout=setTimeout(function(){s.toggleBlinking(!1),r===i.length?s.doneTyping(i,r):s.keepTyping(i,r,a),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))},t)},t):this.setPauseStatus(i,r,!0)}},{key:"keepTyping",value:function a(t,e,n){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=n;var o=t.substr(0,e);this.replaceText(o),this.typewrite(t,e)}},{key:"doneTyping",value:function c(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){n.backspace(t,e)},this.backDelay))}},{key:"backspace",value:function l(n,o){var i=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var t=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){o=w.htmlParser.backSpaceHtmlChars(n,o,i);var t=n.substr(0,o);if(i.replaceText(t),i.smartBackspace){var e=i.strings[i.arrayPos+1];e&&t===e.substr(0,o)?i.stopNum=o:i.stopNum=0}o>i.stopNum?(o--,i.backspace(n,o)):o<=i.stopNum&&(i.arrayPos++,i.arrayPos===i.strings.length?(i.arrayPos=0,i.options.onLastStringBackspaced(),i.shuffleStringsIfNeeded(),i.begin()):i.typewrite(i.strings[i.sequence[i.arrayPos]],o))},t)}else this.setPauseStatus(n,o,!0)}},{key:"complete",value:function p(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function h(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function d(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&((this.cursorBlinking=t)?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function f(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function m(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"initFadeOut",value:function b(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function y(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function g(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(){t.stop()}),this.el.addEventListener("blur",function(){t.el.value&&0!==t.el.value.length||t.start()}))}},{key:"insertCursor",value:function v(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),n}();e["default"]=o,t.exports=e["default"]},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},s=function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}(),c=o(n(2)),i=function(){function t(){r(this,t)}return s(t,[{key:"load",value:function a(t,e,n){if(t.el="string"==typeof n?document.querySelector(n):n,t.options=u({},c["default"],e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(t){return t.trim()}),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var o=Array.prototype.slice.apply(t.stringsElement.children),i=o.length;if(i)for(var r=0;r<i;r+=1){var s=o[r];t.strings.push(s.innerHTML.trim())}}for(var r in t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.strings)t.sequence[r]=r;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function e(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function i(t){var e="data-typed-js-css";if(t.autoInsertCss&&(t.showCursor||t.fadeOut)&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.type="text/css",n.setAttribute(e,!0);var o="";t.showCursor&&(o+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(o+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==n.length&&(n.innerHTML=o,document.body.appendChild(n))}}}]),t}(),a=new(e["default"]=i);e.initializer=a},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:Infinity,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onComplete:function o(){},preStringTyped:function i(){},onStringTyped:function r(){},onLastStringBackspaced:function s(){},onTypingPaused:function a(){},onTypingResumed:function u(){},onReset:function c(){},onStop:function l(){},onStart:function p(){},onDestroy:function h(){}};e["default"]=n,t.exports=e["default"]},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}(),i=function(){function t(){n(this,t)}return o(t,[{key:"typeHtmlChars",value:function r(t,e,n){if("html"!==n.contentType)return e;var o=t.substr(e).charAt(0);if("<"===o||"&"===o){var i="";for(i="<"===o?">":";";t.substr(e+1).charAt(0)!==i&&!(++e+1>t.length););e++}return e}},{key:"backSpaceHtmlChars",value:function s(t,e,n){if("html"!==n.contentType)return e;var o=t.substr(e).charAt(0);if(">"===o||";"===o){var i="";for(i=">"===o?"<":"&";t.substr(e-1).charAt(0)!==i&&!(--e<0););e--}return e}}]),t}(),r=new(e["default"]=i);e.htmlParser=r}])}),function(){var t=this;(function(){(function(){this.Rails={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",buttonClickSelector:{selector:"button[data-remote]:not([form]), button[data-confirm]:not([form])",exclude:"form button"},inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",formDisableSelector:"input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",formEnableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",fileInputSelector:"input[name][type=file]:not([disabled])",linkDisableSelector:"a[data-disable-with], a[data-disable]",buttonDisableSelector:"button[data-remote][data-disable-with], button[data-remote][data-disable]"}}).call(this)}).call(t);var g=t.Rails;(function(){(function(){g.cspNonce=function(){var t;return(t=document.querySelector("meta[name=csp-nonce]"))&&t.content}}).call(this),function(){var o,n;n=Element.prototype.matches||Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector,g.matches=function(t,e){return null!=e.exclude?n.call(t,e.selector)&&!n.call(t,e.exclude):n.call(t,e)},o="_ujsData",g.getData=function(t,e){var n;return null!=(n=t[o])?n[e]:void 0},g.setData=function(t,e,n){return null==t[o]&&(t[o]={}),t[o][e]=n},g.$=function(t){return Array.prototype.slice.call(document.querySelectorAll(t))}}.call(this),function(){var n,o,i;n=g.$,i=g.csrfToken=function(){var t;return(t=document.querySelector("meta[name=csrf-token]"))&&t.content},o=g.csrfParam=function(){var t;return(t=document.querySelector("meta[name=csrf-param]"))&&t.content},g.CSRFProtection=function(t){var e;if(null!=(e=i()))return t.setRequestHeader("X-CSRF-Token",e)},g.refreshCSRFTokens=function(){var t,e;if(e=i(),t=o(),null!=e&&null!=t)return n('form input[name="'+t+'"]').forEach(function(t){return t.value=e})}}.call(this),function(){var i,e,r,n;r=g.matches,"function"!=typeof(i=window.CustomEvent)&&((i=function(t,e){var n;return(n=document.createEvent("CustomEvent")).initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}).prototype=window.Event.prototype,n=i.prototype.preventDefault,i.prototype.preventDefault=function(){var t;return t=n.call(this),this.cancelable&&!this.defaultPrevented&&Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}),t}),e=g.fire=function(t,e,n){var o;return o=new i(e,{bubbles:!0,cancelable:!0,detail:n}),t.dispatchEvent(o),!o.defaultPrevented},g.stopEverything=function(t){return e(t.target,"ujs:everythingStopped"),t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation()},g.delegate=function(t,n,e,o){return t.addEventListener(e,function(t){var e;for(e=t.target;e instanceof Element&&!r(e,n);)e=e.parentNode;if(e instanceof Element&&!1===o.call(e,t))return t.preventDefault(),t.stopPropagation()})}}.call(this),function(){var e,o,t,r,i,s;r=g.cspNonce,o=g.CSRFProtection,g.fire,e={"*":"*/*",text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript",script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},g.ajax=function(n){var o;return n=i(n),o=t(n,function(){var t,e;return e=s(null!=(t=o.response)?t:o.responseText,o.getResponseHeader("Content-Type")),2===Math.floor(o.status/100)?"function"==typeof n.success&&n.success(e,o.statusText,o):"function"==typeof n.error&&n.error(e,o.statusText,o),"function"==typeof n.complete?n.complete(o,o.statusText):void 0}),!(null!=n.beforeSend&&!n.beforeSend(o,n))&&(o.readyState===XMLHttpRequest.OPENED?o.send(n.data):void 0)},i=function(t){return t.url=t.url||location.href,t.type=t.type.toUpperCase(),"GET"===t.type&&t.data&&(t.url.indexOf("?")<0?t.url+="?"+t.data:t.url+="&"+t.data),null==e[t.dataType]&&(t.dataType="*"),t.accept=e[t.dataType],"*"!==t.dataType&&(t.accept+=", */*; q=0.01"),t},t=function(t,e){var n;return(n=new XMLHttpRequest).open(t.type,t.url,!0),n.setRequestHeader("Accept",t.accept),"string"==typeof t.data&&n.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),t.crossDomain||n.setRequestHeader("X-Requested-With","XMLHttpRequest"),o(n),n.withCredentials=!!t.withCredentials,n.onreadystatechange=function(){if(n.readyState===XMLHttpRequest.DONE)return e(n)},n},s=function(t,e){var n,o;if("string"==typeof t&&"string"==typeof e)if(e.match(/\bjson\b/))try{t=JSON.parse(t)}catch(i){}else if(e.match(/\b(?:java|ecma)script\b/))(o=document.createElement("script")).setAttribute("nonce",r()),o.text=t,document.head.appendChild(o).parentNode.removeChild(o);else if(e.match(/\b(xml|html|svg)\b/)){n=new DOMParser,e=e.replace(/;.+/,"");try{t=n.parseFromString(t,e)}catch(i){}}return t},g.href=function(t){return t.href},g.isCrossDomain=function(t){var e,n;(e=document.createElement("a")).href=location.href,n=document.createElement("a");try{return n.href=t,!((!n.protocol||":"===n.protocol)&&!n.host||e.protocol+"//"+e.host==n.protocol+"//"+n.host)}catch(o){return o,!0}}}.call(this),function(){var i,r;i=g.matches,r=function(t){return Array.prototype.slice.call(t)},g.serializeElement=function(t,e){var n,o;return n=[t],i(t,"form")&&(n=r(t.elements)),o=[],n.forEach(function(e){if(e.name&&!e.disabled)return i(e,"select")?r(e.options).forEach(function(t){if(t.selected)return o.push({name:e.name,value:t.value})}):e.checked||-1===["radio","checkbox","submit"].indexOf(e.type)?o.push({name:e.name,value:e.value}):void 0}),e&&o.push(e),o.map(function(t){return null!=t.name?encodeURIComponent(t.name)+"="+encodeURIComponent(t.value):t}).join("&")},g.formElements=function(t,e){return i(t,"form")?r(t.elements).filter(function(t){return i(t,e)}):r(t.querySelectorAll(e))}}.call(this),function(){var e,r,n;r=g.fire,n=g.stopEverything,g.handleConfirm=function(t){if(!e(this))return n(t)},e=function(t){var e,n,o;if(!(o=t.getAttribute("data-confirm")))return!0;if(e=!1,r(t,"confirm")){try{e=confirm(o)}catch(i){}n=r(t,"confirm:complete",[e])}return e&&n}}.call(this),function(){var n,o,i,r,s,a,e,u,c,l,p;c=g.matches,u=g.getData,l=g.setData,p=g.stopEverything,e=g.formElements,g.handleDisabledElement=function(t){if(this.disabled)return p(t)},g.enableElement=function(t){var e;return e=t instanceof Event?t.target:t,c(e,g.linkDisableSelector)?a(e):c(e,g.buttonDisableSelector)||c(e,g.formEnableSelector)?r(e):c(e,g.formSubmitSelector)?s(e):void 0},g.disableElement=function(t){var e;return e=t instanceof Event?t.target:t,c(e,g.linkDisableSelector)?i(e):c(e,g.buttonDisableSelector)||c(e,g.formDisableSelector)?n(e):c(e,g.formSubmitSelector)?o(e):void 0},i=function(t){var e;return null!=(e=t.getAttribute("data-disable-with"))&&(l(t,"ujs:enable-with",t.innerHTML),t.innerHTML=e),t.addEventListener("click",p),l(t,"ujs:disabled",!0)},a=function(t){var e;return null!=(e=u(t,"ujs:enable-with"))&&(t.innerHTML=e,l(t,"ujs:enable-with",null)),t.removeEventListener("click",p),l(t,"ujs:disabled",null)},o=function(t){return e(t,g.formDisableSelector).forEach(n)},n=function(t){var e;return null!=(e=t.getAttribute("data-disable-with"))&&(c(t,"button")?(l(t,"ujs:enable-with",t.innerHTML),t.innerHTML=e):(l(t,"ujs:enable-with",t.value),t.value=e)),t.disabled=!0,l(t,"ujs:disabled",!0)},s=function(t){return e(t,g.formEnableSelector).forEach(r)},r=function(t){var e;return null!=(e=u(t,"ujs:enable-with"))&&(c(t,"button")?t.innerHTML=e:t.value=e,l(t,"ujs:enable-with",null)),t.disabled=!1,l(t,"ujs:disabled",null)}}.call(this),function(){var u;u=g.stopEverything,g.handleMethod=function(t){var e,n,o,i,r,s,a;if(a=(s=this).getAttribute("data-method"))return r=g.href(s),n=g.csrfToken(),e=g.csrfParam(),o=document.createElement("form"),i="<input name='_method' value='"+a+"' type='hidden' />",null==e||null==n||g.isCrossDomain(r)||(i+="<input name='"+e+"' value='"+n+"' type='hidden' />"),i+='<input type="submit" />',o.method="post",o.action=r,o.target=s.target,o.innerHTML=i,o.style.display="none",document.body.appendChild(o),o.querySelector('[type="submit"]').click(),u(t)}}.call(this),function(){var u,c,l,p,h,d,f,m,b,y=[].slice;d=g.matches,l=g.getData,m=g.setData,c=g.fire,b=g.stopEverything,u=g.ajax,p=g.isCrossDomain,f=g.serializeElement,h=function(t){var e;return null!=(e=t.getAttribute("data-remote"))&&"false"!==e},g.handleRemote=function(t){var e,n,o,i,r,s,a;return!h(i=this)||(c(i,"ajax:before")?(a=i.getAttribute("data-with-credentials"),o=i.getAttribute("data-type")||"script",d(i,g.formSubmitSelector)?(e=l(i,"ujs:submit-button"),r=l(i,"ujs:submit-button-formmethod")||i.method,s=l(i,"ujs:submit-button-formaction")||i.getAttribute("action")||location.href,"GET"===r.toUpperCase()&&(s=s.replace(/\?.*$/,"")),"multipart/form-data"===i.enctype?(n=new FormData(i),null!=e&&n.append(e.name,e.value)):n=f(i,e),m(i,"ujs:submit-button",null),m(i,"ujs:submit-button-formmethod",null),m(i,"ujs:submit-button-formaction",null)):d(i,g.buttonClickSelector)||d(i,g.inputChangeSelector)?(r=i.getAttribute("data-method"),s=i.getAttribute("data-url"),n=f(i,i.getAttribute("data-params"))):(r=i.getAttribute("data-method"),s=g.href(i),n=i.getAttribute("data-params")),u({type:r||"GET",url:s,data:n,dataType:o,beforeSend:function(t,e){return c(i,"ajax:beforeSend",[t,e])?c(i,"ajax:send",[t]):(c(i,"ajax:stopped"),!1)},success:function(){var t;return t=1<=arguments.length?y.call(arguments,0):[],c(i,"ajax:success",t)},error:function(){var t;return t=1<=arguments.length?y.call(arguments,0):[],c(i,"ajax:error",t)},complete:function(){var t;return t=1<=arguments.length?y.call(arguments,0):[],c(i,"ajax:complete",t)},crossDomain:p(s),withCredentials:null!=a&&"false"!==a}),b(t)):(c(i,"ajax:stopped"),!1))},g.formSubmitButtonClick=function(){var t,e;if(e=(t=this).form)return t.name&&m(e,"ujs:submit-button",{name:t.name,value:t.value}),m(e,"ujs:formnovalidate-button",t.formNoValidate),m(e,"ujs:submit-button-formaction",t.getAttribute("formaction")),m(e,"ujs:submit-button-formmethod",t.getAttribute("formmethod"))},g.handleMetaClick=function(t){var e,n,o;if(o=((n=this).getAttribute("data-method")||"GET").toUpperCase(),e=n.getAttribute("data-params"),(t.metaKey||t.ctrlKey)&&"GET"===o&&!e)return t.stopImmediatePropagation()}}.call(this),function(){var t,o,e,n,i,r,s,a,u,c,l,p,h,d;r=g.fire,e=g.delegate,a=g.getData,t=g.$,d=g.refreshCSRFTokens,o=g.CSRFProtection,i=g.enableElement,n=g.disableElement,c=g.handleDisabledElement,u=g.handleConfirm,h=g.handleRemote,s=g.formSubmitButtonClick,l=g.handleMetaClick,p=g.handleMethod,"undefined"==typeof jQuery||null===jQuery||null==jQuery.ajax||jQuery.rails||(jQuery.rails=g,jQuery.ajaxPrefilter(function(t,e,n){if(!t.crossDomain)return o(n)})),g.start=function(){if(window._rails_loaded)throw new Error("rails-ujs has already been loaded!");return window.addEventListener("pageshow",function(){return t(g.formEnableSelector).forEach(function(t){if(a(t,"ujs:disabled"))return i(t)}),t(g.linkDisableSelector).forEach(function(t){if(a(t,"ujs:disabled"))return i(t)})}),e(document,g.linkDisableSelector,"ajax:complete",i),e(document,g.linkDisableSelector,"ajax:stopped",i),e(document,g.buttonDisableSelector,"ajax:complete",i),e(document,g.buttonDisableSelector,"ajax:stopped",i),e(document,g.linkClickSelector,"click",c),e(document,g.linkClickSelector,"click",u),e(document,g.linkClickSelector,"click",l),e(document,g.linkClickSelector,"click",n),e(document,g.linkClickSelector,"click",h),e(document,g.linkClickSelector,"click",p),e(document,g.buttonClickSelector,"click",c),e(document,g.buttonClickSelector,"click",u),e(document,g.buttonClickSelector,"click",n),e(document,g.buttonClickSelector,"click",h),e(document,g.inputChangeSelector,"change",c),e(document,g.inputChangeSelector,"change",u),e(document,g.inputChangeSelector,"change",h),e(document,g.formSubmitSelector,"submit",c),e(document,g.formSubmitSelector,"submit",u),e(document,g.formSubmitSelector,"submit",h),e(document,g.formSubmitSelector,"submit",function(t){return setTimeout(function(){return n(t)},13)}),e(document,g.formSubmitSelector,"ajax:send",n),e(document,g.formSubmitSelector,"ajax:complete",i),e(document,g.formInputClickSelector,"click",c),e(document,g.formInputClickSelector,"click",u),e(document,g.formInputClickSelector,"click",s),document.addEventListener("DOMContentLoaded",d),window._rails_loaded=!0},window.Rails===g&&r(document,"rails:attachBindings")&&g.start()}.call(this)}).call(this),"object"==typeof module&&module.exports?module.exports=g:"function"==typeof define&&define.amd&&define(g)}.call(this),function(){var t=this;(function(){(function(){var n=[].slice;this.ActionCable={INTERNAL:{message_types:{welcome:"welcome",ping:"ping",confirmation:"confirm_subscription",rejection:"reject_subscription"},default_mount_path:"/cable",protocols:["actioncable-v1-json","actioncable-unsupported"]},WebSocket:window.WebSocket,logger:window.console,createConsumer:function(t){var e;return null==t&&(t=null!=(e=this.getConfig("url"))?e:this.INTERNAL.default_mount_path),new u.Consumer(this.createWebSocketURL(t))},getConfig:function(t){var e;return null!=(e=document.head.querySelector("meta[name='action-cable-"+t+"']"))?e.getAttribute("content"):void 0},createWebSocketURL:function(t){var e;return t&&!/^wss?:/i.test(t)?((e=document.createElement("a")).href=t,e.href=e.href,e.protocol=e.protocol.replace("http","ws"),e.href):t},startDebugging:function(){return this.debugging=!0},stopDebugging:function(){return this.debugging=null},log:function(){var t,e;if(t=1<=arguments.length?n.call(arguments,0):[],this.debugging)return t.push(Date.now()),(e=this.logger).log.apply(e,["[ActionCable]"].concat(n.call(t)))}}}).call(this)}).call(t);var u=t.ActionCable;(function(){(function(){var o=function(t,e){return function(){return t.apply(e,arguments)}};u.ConnectionMonitor=function(){function t(t){this.connection=t,this.visibilityDidChange=o(this.visibilityDidChange,this),this.reconnectAttempts=0}var i,e,n;return t.pollInterval={min:3,max:30},t.staleThreshold=6,t.prototype.start=function(){if(!this.isRunning())return this.startedAt=e(),delete this.stoppedAt,this.startPolling(),document.addEventListener("visibilitychange",this.visibilityDidChange),u.log("ConnectionMonitor started. pollInterval = "+this.getPollInterval()+" ms")},t.prototype.stop=function(){if(this.isRunning())return this.stoppedAt=e(),this.stopPolling(),document.removeEventListener("visibilitychange",this.visibilityDidChange),u.log("ConnectionMonitor stopped")},t.prototype.isRunning=function(){return null!=this.startedAt&&null==this.stoppedAt},t.prototype.recordPing=function(){return this.pingedAt=e()},t.prototype.recordConnect=function(){return this.reconnectAttempts=0,this.recordPing(),delete this.disconnectedAt,u.log("ConnectionMonitor recorded connect")},t.prototype.recordDisconnect=function(){return this.disconnectedAt=e(),u.log("ConnectionMonitor recorded disconnect")},t.prototype.startPolling=function(){return this.stopPolling(),this.poll()},t.prototype.stopPolling=function(){return clearTimeout(this.pollTimeout)},t.prototype.poll=function(){return this.pollTimeout=setTimeout((t=this,function(){return t.reconnectIfStale(),t.poll()}),this.getPollInterval());var t},t.prototype.getPollInterval=function(){var t,e,n,o;return n=(o=this.constructor.pollInterval).min,e=o.max,t=5*Math.log(this.reconnectAttempts+1),Math.round(1e3*i(t,n,e))},t.prototype.reconnectIfStale=function(){if(this.connectionIsStale())return u.log("ConnectionMonitor detected stale connection. reconnectAttempts = "+this.reconnectAttempts+", pollInterval = "+this.getPollInterval()+" ms, time disconnected = "+n(this.disconnectedAt)+" s, stale threshold = "+this.constructor.staleThreshold+" s"),this.reconnectAttempts++,this.disconnectedRecently()?u.log("ConnectionMonitor skipping reopening recent disconnect"):(u.log("ConnectionMonitor reopening"),this.connection.reopen())},t.prototype.connectionIsStale=function(){var t;return n(null!=(t=this.pingedAt)?t:this.startedAt)>this.constructor.staleThreshold},t.prototype.disconnectedRecently=function(){return this.disconnectedAt&&n(this.disconnectedAt)<this.constructor.staleThreshold},t.prototype.visibilityDidChange=function(){if("visible"===document.visibilityState)return setTimeout((t=this,function(){if(t.connectionIsStale()||!t.connection.isOpen())return u.log("ConnectionMonitor reopening stale connection on visibilitychange. visbilityState = "+document.visibilityState),t.connection.reopen()}),200);var t},e=function(){return(new Date).getTime()},n=function(t){return(e()-t)/1e3},i=function(t,e,n){return Math.max(e,Math.min(n,t))},t}()}).call(this),function(){var t,i,e,n,o,r=[].slice,s=function(t,e){return function(){return t.apply(e,arguments)}},a=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};n=u.INTERNAL,i=n.message_types,e=n.protocols,o=2<=e.length?r.call(e,0,t=e.length-1):(t=0,[]),e[t++],u.Connection=function(){function t(t){this.consumer=t,this.open=s(this.open,this),this.subscriptions=this.consumer.subscriptions,this.monitor=new u.ConnectionMonitor(this),this.disconnected=!0}return t.reopenDelay=500,t.prototype.send=function(t){return!!this.isOpen()&&(this.webSocket.send(JSON.stringify(t)),!0)},t.prototype.open=function(){return this.isActive()?(u.log("Attempted to open WebSocket, but existing socket is "+this.getState()),!1):(u.log("Opening WebSocket, current state is "+this.getState()+", subprotocols: "+e),null!=this.webSocket&&this.uninstallEventHandlers(),this.webSocket=new u.WebSocket(this.consumer.url,e),this.installEventHandlers(),this.monitor.start(),!0)},t.prototype.close=function(t){var e;if((null!=t?t:{allowReconnect:!0}).allowReconnect||this.monitor.stop(),this.isActive())return null!=(e=this.webSocket)?e.close():void 0},t.prototype.reopen=function(){var t;if(u.log("Reopening WebSocket, current state is "+this.getState()),!this.isActive())return this.open();try{return this.close()}catch(e){return t=e,u.log("Failed to reopen WebSocket",t)}finally{u.log("Reopening WebSocket in "+this.constructor.reopenDelay+"ms"),setTimeout(this.open,this.constructor.reopenDelay)}},t.prototype.getProtocol=function(){var t;return null!=(t=this.webSocket)?t.protocol:void 0},t.prototype.isOpen=function(){return this.isState("open")},t.prototype.isActive=function(){return this.isState("open","connecting")},t.prototype.isProtocolSupported=function(){var t;return t=this.getProtocol(),0<=a.call(o,t)},t.prototype.isState=function(){var t,e;return e=1<=arguments.length?r.call(arguments,0):[],t=this.getState(),0<=a.call(e,t)},t.prototype.getState=function(){var t,e;for(e in WebSocket)if(WebSocket[e]===(null!=(t=this.webSocket)?t.readyState:void 0))return e.toLowerCase();return null},t.prototype.installEventHandlers=function(){var t,e;for(t in this.events)e=this.events[t].bind(this),this.webSocket["on"+t]=e},t.prototype.uninstallEventHandlers=function(){var t;for(t in this.events)this.webSocket["on"+t]=function(){}},t.prototype.events={message:function(t){var e,n,o;if(this.isProtocolSupported())switch(e=(o=JSON.parse(t.data)).identifier,n=o.message,o.type){case i.welcome:return this.monitor.recordConnect(),this.subscriptions.reload();case i.ping:return this.monitor.recordPing();case i.confirmation:return this.subscriptions.notify(e,"connected");case i.rejection:return this.subscriptions.reject(e);default:return this.subscriptions.notify(e,"received",n)}},open:function(){if(u.log("WebSocket onopen event, using '"+this.getProtocol()+"' subprotocol"),this.disconnected=!1,!this.isProtocolSupported())return u.log("Protocol is unsupported. Stopping monitor and disconnecting."),this.close({allowReconnect:!1})},close:function(){if(u.log("WebSocket onclose event"),!this.disconnected)return this.disconnected=!0,this.monitor.recordDisconnect(),this.subscriptions.notifyAll("disconnected",{willAttemptReconnect:this.monitor.isRunning()})},error:function(){return u.log("WebSocket onerror event")}},t}()}.call(this),function(){var c=[].slice;u.Subscriptions=function(){function t(t){this.consumer=t,this.subscriptions=[]}return t.prototype.create=function(t,e){var n,o,i;return o="object"==typeof(n=t)?n:{channel:n},i=new u.Subscription(this.consumer,o,e),this.add(i)},t.prototype.add=function(t){return this.subscriptions.push(t),this.consumer.ensureActiveConnection(),this.notify(t,"initialized"),this.sendCommand(t,"subscribe"),t},t.prototype.remove=function(t){return this.forget(t),this.findAll(t.identifier).length||this.sendCommand(t,"unsubscribe"),t},t.prototype.reject=function(t){var e,n,o,i,r;for(i=[],e=0,n=(o=this.findAll(t)).length;e<n;e++)r=o[e],this.forget(r),this.notify(r,"rejected"),i.push(r);return i},t.prototype.forget=function(i){var r;return this.subscriptions=function(){var t,e,n,o;for(o=[],t=0,e=(
n=this.subscriptions).length;t<e;t++)(r=n[t])!==i&&o.push(r);return o}.call(this),i},t.prototype.findAll=function(t){var e,n,o,i,r;for(i=[],e=0,n=(o=this.subscriptions).length;e<n;e++)(r=o[e]).identifier===t&&i.push(r);return i},t.prototype.reload=function(){var t,e,n,o,i;for(o=[],t=0,e=(n=this.subscriptions).length;t<e;t++)i=n[t],o.push(this.sendCommand(i,"subscribe"));return o},t.prototype.notifyAll=function(t){var e,n,o,i,r,s,a;for(n=t,e=2<=arguments.length?c.call(arguments,1):[],s=[],o=0,i=(r=this.subscriptions).length;o<i;o++)a=r[o],s.push(this.notify.apply(this,[a,n].concat(c.call(e))));return s},t.prototype.notify=function(t,e){var n,o,i,r,s,a,u;for(a=t,o=e,n=3<=arguments.length?c.call(arguments,2):[],s=[],i=0,r=(u="string"==typeof a?this.findAll(a):[a]).length;i<r;i++)a=u[i],s.push("function"==typeof a[o]?a[o].apply(a,n):void 0);return s},t.prototype.sendCommand=function(t,e){var n;return n=t.identifier,this.consumer.send({command:e,identifier:n})},t}()}.call(this),function(){u.Subscription=function(){function t(t,e,n){this.consumer=t,null==e&&(e={}),this.identifier=JSON.stringify(e),o(this,n)}var o;return t.prototype.perform=function(t,e){return null==e&&(e={}),e.action=t,this.send(e)},t.prototype.send=function(t){return this.consumer.send({command:"message",identifier:this.identifier,data:JSON.stringify(t)})},t.prototype.unsubscribe=function(){return this.consumer.subscriptions.remove(this)},o=function(t,e){var n,o;if(null!=e)for(n in e)o=e[n],t[n]=o;return t},t}()}.call(this),function(){u.Consumer=function(){function t(t){this.url=t,this.subscriptions=new u.Subscriptions(this),this.connection=new u.Connection(this)}return t.prototype.send=function(t){return this.connection.send(t)},t.prototype.connect=function(){return this.connection.open()},t.prototype.disconnect=function(){return this.connection.close({allowReconnect:!1})},t.prototype.ensureActiveConnection=function(){if(!this.connection.isActive())return this.connection.open()},t}()}.call(this)}).call(this),"object"==typeof module&&module.exports?module.exports=u:"function"==typeof define&&define.amd&&define(u)}.call(this),function(){this.App||(this.App={}),App.cable=ActionCable.createConsumer()}.call(this);