!function(e){var t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(o,s,function(t){return e[t]}.bind(null,s));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=229)}({2:function(e,t,n){"use strict";t.a=class{constructor(e){this.btn=e.trigger,this.target=e.target,this.addEvents()}ease(e){return e}scrollToTop(e,t,n,o,s){const i=t-e;let r=i/n;const l=this.ease(r);r=Math.min(r,1),window.scroll(0,s+o*l),i<n&&requestAnimationFrame(()=>{const t=(new Date).getTime();this.scrollToTop(e,t,n,o,s)})}scrolling(e){let t;"/"!=window.location.pathname&&"/en"!=window.location.pathname||e.preventDefault(),this.btn.hasAttribute("href")&&(t=this.btn.href,void 0!==t&&-1==t.indexOf("#services")&&e.preventDefault());const n=this.target;requestAnimationFrame(()=>{const e=(new Date).getTime(),t=e,o=window.pageYOffset,s=n.getBoundingClientRect().top;this.scrollToTop(t,e,500,s,o)})}addEvents(){this.btn.addEventListener("click",()=>this.scrolling(event))}}},229:function(e,t,n){"use strict";n.r(t);var o=n(3),s=n(4),i=n(5),r=n(7);new o.a,new s.a,new i.a,new r.a},3:function(e,t,n){"use strict";t.a=class{constructor(){this.menuButton=document.querySelector(".menu-button"),this.menu=document.querySelector(".hero__nav"),this.menuLinks=document.querySelectorAll(".main-nav__link"),this.reset(),this.events(),this.disableScroll(),this.disableScrollIos()}events(){const e=this.debounceOnScroll(this.checkPositionPopup,400);window.addEventListener("scroll",e),this.menuButton.addEventListener("click",()=>{this.toggleMenu(),this.removeHandlerClass()});for(let e=0;e<this.menuLinks.length;e++)this.menuLinks[e].addEventListener("click",()=>{this.toggleMenu()});window.addEventListener("keydown",()=>this.closeHandlerByEsc(event)),this.menuButton.addEventListener("click",()=>this.closeHandlerByClickOnPage(event))}reset(){if(this.menuButton.classList.remove("menu-button--close"),this.menu.classList.add("hero__nav--hidden"),document.querySelector(".hero__nav-wrapper")){document.querySelector(".hero__nav-wrapper").remove()}}closeHandlerByEsc(e){27!=e.keyCode||this.menu.classList.contains("hero__nav--hidden")||(this.menuButton.classList.remove("menu-button--close"),this.menu.classList.add("hero__nav--hidden"),this.removeHandlerClass())}closeMobileMenuByClick(){this.menuButton.classList.remove("menu-button--close"),this.menu.classList.add("hero__nav--hidden"),this.removeHandlerClass()}closeHandlerByClickOnPage(e){if(e.target.classList.contains("menu-button--close")){const e=document.createElement("div");e.classList.add("hero__nav-wrapper"),document.body.appendChild(e),e.addEventListener("click",()=>this.closeMobileMenuByClick())}}toggleMenu(){this.menuButton.classList.toggle("menu-button--close"),this.menu.classList.toggle("hero__nav--hidden"),this.menuButton.classList.contains("menu-button--close")||this.removeHandlerClass()}removeHandlerClass(){if(document.querySelector(".hero__nav-wrapper")){document.querySelector(".hero__nav-wrapper").remove()}}debounceOnScroll(e,t){let n;return function(o){n&&clearTimeout(n),n=setTimeout(e,t,o)}}checkPositionPopup(){document.documentElement.style.setProperty("--scroll-y",window.scrollY+"px")}disableScroll(){this.menuButton.addEventListener("click",()=>{if(this.menu.classList.contains("hero__nav--hidden")){const e=document.body,t=e.style.top;e.style.position="",e.style.top="",window.scrollTo(0,-1*parseInt(t||"0"))}else{const e=document.documentElement.style.getPropertyValue("--scroll-y"),t=document.body;t.style.position="fixed",t.style.top="-"+e}})}disableScrollIos(){const e=-1!==navigator.userAgent.indexOf("Safari"),t=-1!==navigator.userAgent.indexOf("iPhone"),n=e&&t;this.menu.classList.contains("menu-button--close")&&n?document.ontouchmove=e=>e.preventDefault():document.ontouchmove=e=>!0}}},4:function(e,t,n){"use strict";var o=n(2);t.a=class{constructor(){this.btn=document.querySelector(".up-button"),this.target=document.body,this.btn&&(this.btn.style.opacity="0",this.btn.style.pointerEvents="none",this.addEvents())}addEvents(){new o.a({trigger:this.btn,target:this.target});document.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?(this.btn.style.opacity="1",this.btn.style.pointerEvents="auto"):(this.btn.style.opacity="0",this.btn.style.pointerEvents="none")})}}},5:function(e,t,n){"use strict";var o=function(e,t,n,o){return(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){var e=void 0,t=void 0,n=void 0,i=void 0,r=void 0,l=void 0,c=void 0,a=void 0,u=void 0,d=void 0,h=void 0,m=void 0;function p(){return window.scrollY||window.pageYOffset}function v(e){return e.getBoundingClientRect().top+t}function g(n){u||(u=n),h=r(d=n-u,t,c,a),window.scrollTo(0,h),d<a?window.requestAnimationFrame(g):function(){window.scrollTo(0,t+c),e&&l&&(e.setAttribute("tabindex","-1"),e.focus());"function"==typeof m&&m();u=!1}()}return function(u){var d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a=d.duration||1e3,i=d.offset||0,m=d.callback,r=d.easing||o,l=d.a11y||!1,t=p(),void 0===u?"undefined":s(u)){case"number":e=void 0,l=!1,n=t+u;break;case"object":n=v(e=u);break;case"string":e=document.querySelector(u),n=v(e)}switch(c=n-t+i,s(d.duration)){case"number":a=d.duration;break;case"function":a=d.duration(c)}window.requestAnimationFrame(g)}}();t.a=class{constructor(){this.anchors=[...document.querySelectorAll(".smooth-trigger")],this.anchors&&this.addEvents()}scrolling(e){const t=e.target.href.split("#")[1];i("#"+t)}addEvents(){this.anchors.map(e=>e.addEventListener("click",e=>this.scrolling(e)))}}},7:function(e,t,n){"use strict";t.a=class{constructor(){this.langSelect=document.querySelector(".language-select"),this.langSelect&&(this.langButton=this.langSelect.querySelector(".language-select__current"),this.langPopup=this.langSelect.querySelector(".language-select__popup"),this.langPopup?this.reset():this.langButton.style.display="none",this.addEvents())}addEvents(){this.langButton.addEventListener("click",()=>{this.togglePopup()}),document.addEventListener("click",e=>{e.target!=this.langButton&&e.target!=this.langPopup&&this.reset()})}reset(){this.langPopup.classList.add("language-select__popup--hidden")}togglePopup(){this.langPopup.classList.toggle("language-select__popup--hidden")}}}});