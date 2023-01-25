!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("VueShortkey",[],t):"object"==typeof exports?exports.VueShortkey=t():e.VueShortkey=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="../dist/",t(t.s=0)}([function(e,t,n){"use strict";(function(r){function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var u;n(2),n(3);var c={},i={},a=[],l=[],s=!1,f=function(e){return e="string"==typeof e?JSON.parse(e.replace(/\'/gi,'"')):e,e instanceof Array?{"":e}:e},p=function(e,t,n,r){var o=!0===n.modifiers.push,u=!0===n.modifiers.avoid,c=!0==!n.modifiers.focus,i=!0===n.modifiers.once,l=!0===n.modifiers.propagte;u?(a=a.filter(function(e){return!e===t}),a.push(t)):v({b:e,push:o,once:i,focus:c,propagte:l,el:r.el})},d=function(e,t){for(var n in e){var r=c.encodeKey(e[n]),o=i[r].el.indexOf(t);i[r].el.length>1&&o>-1?i[r].el.splice(o,1):delete i[r]}};c.install=function(e,t){l=[].concat(o(t&&t.prevent?t.prevent:[])),e.directive("shortkey",{beforeMount:function(e,t,n){var r=f(t.value);p(r,e,t,n)},updated:function(e,t,n){var r=f(t.oldValue);d(r,e);var o=f(t.value);p(o,e,t,n)},unmounted:function(e,t){var n=f(t.value);d(n,e)}})},c.decodeKey=function(e){return y(e)},c.encodeKey=function(e){var t={};t.shiftKey=e.includes("shift"),t.ctrlKey=e.includes("ctrl"),t.metaKey=e.includes("meta"),t.altKey=e.includes("alt");var n=y(t);return n+=e.filter(function(e){return!["shift","ctrl","meta","alt"].includes(e)}).join("")};var y=function(e){var t="";return("Shift"===e.key||e.shiftKey)&&(t+="shift"),("Control"===e.key||e.ctrlKey)&&(t+="ctrl"),("Meta"===e.key||e.metaKey)&&(t+="meta"),("Alt"===e.key||e.altKey)&&(t+="alt"),"ArrowUp"===e.key&&(t+="arrowup"),"ArrowLeft"===e.key&&(t+="arrowleft"),"ArrowRight"===e.key&&(t+="arrowright"),"ArrowDown"===e.key&&(t+="arrowdown"),"AltGraph"===e.key&&(t+="altgraph"),"Escape"===e.key&&(t+="esc"),"Enter"===e.key&&(t+="enter"),"Tab"===e.key&&(t+="tab")," "===e.key&&(t+="space"),"PageUp"===e.key&&(t+="pageup"),"PageDown"===e.key&&(t+="pagedown"),"Home"===e.key&&(t+="home"),"End"===e.key&&(t+="end"),"Delete"===e.key&&(t+="del"),"Backspace"===e.key&&(t+="backspace"),"Insert"===e.key&&(t+="insert"),"NumLock"===e.key&&(t+="numlock"),"CapsLock"===e.key&&(t+="capslock"),"Pause"===e.key&&(t+="pause"),"ContextMenu"===e.key&&(t+="contextmenu"),"ScrollLock"===e.key&&(t+="scrolllock"),"BrowserHome"===e.key&&(t+="browserhome"),"MediaSelect"===e.key&&(t+="mediaselect"),(e.key&&" "!==e.key&&1===e.key.length||/F\d{1,2}|\//g.test(e.key))&&(t+=e.key.toLowerCase()),t},h=function(e){var t=new CustomEvent("shortkey",{bubbles:!1});i[e].key&&(t.srcKey=i[e].key);var n=i[e].el;i[e].propagte?n.forEach(function(e){return e.dispatchEvent(t)}):n[n.length-1].dispatchEvent(t)};c.keyDown=function(e){(!i[e].once&&!i[e].push||i[e].push&&!s)&&h(e)},r&&Object({NODE_ENV:"production"})&&function(){document.addEventListener("keydown",function(e){var t=c.decodeKey(e);if(m(t))if(i[t].propagte||(e.preventDefault(),e.stopPropagation()),i[t].focus)c.keyDown(t),s=!0;else if(!s){var n=i[t].el;n[n.length-1].focus(),s=!0}},!0),document.addEventListener("keyup",function(e){var t=c.decodeKey(e);m(t)&&(i[t].propagte||(e.preventDefault(),e.stopPropagation()),(i[t].once||i[t].push)&&h(t)),s=!1},!0)}();var v=function(e){var t=e.b,n=e.push,r=e.once,o=e.focus,u=e.propagte,a=e.el;for(var l in t){var s=c.encodeKey(t[l]),f=i[s]&&i[s].el?i[s].el:[],p=i[s]&&i[s].propagte;f.push(a),i[s]={push:n,once:r,focus:o,key:l,propagte:p||u,el:f}}},m=function(e){var t=!!a.find(function(e){return e===document.activeElement}),n=!!l.find(function(e){return document.activeElement&&document.activeElement.matches(e)});return!!i[e]&&!(t||n)};void 0!==e&&e.exports?e.exports=c:void 0!==(u=function(){return c}.call(t,n,t,e))&&(e.exports=u)}).call(t,n(1))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function u(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function c(){h&&d&&(h=!1,d.length?y=d.concat(y):v=-1,y.length&&i())}function i(){if(!h){var e=o(c);h=!0;for(var t=y.length;t;){for(d=y,y=[];++v<t;)d&&d[v].run();v=-1,t=y.length}d=null,h=!1,u(e)}}function a(e,t){this.fun=e,this.array=t}function l(){}var s,f,p=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(e){s=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var d,y=[],h=!1,v=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];y.push(new a(e,t)),1!==y.length||h||o(i)},a.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=l,p.addListener=l,p.once=l,p.off=l,p.removeListener=l,p.removeAllListeners=l,p.emit=l,p.prependListener=l,p.prependOnceListener=l,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector)},function(e,t){!function(){if("undefined"!=typeof window)try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default")}catch(e){var t=function(e,t){var n,r;return t=t||{},t.bubbles=!!t.bubbles,t.cancelable=!!t.cancelable,n=document.createEvent("CustomEvent"),n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),r=n.preventDefault,n.preventDefault=function(){r.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},n};t.prototype=window.Event.prototype,window.CustomEvent=t}}()}])});
//# sourceMappingURL=index.js.map