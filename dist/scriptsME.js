!function(e){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(s,o,function(t){return e[t]}.bind(null,o));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=21)}({0:function(e,t,n){"use strict";t.a=class{constructor(e){this.btn=e.trigger,this.target=e.target,this.addEvents()}ease(e){return e}scrollToTop(e,t,n,s,o){const r=t-e;let i=r/n;const a=this.ease(i);i=Math.min(i,1),window.scroll(0,o+s*a),r<n&&requestAnimationFrame(()=>{const t=(new Date).getTime();this.scrollToTop(e,t,n,s,o)})}scrolling(e){let t;"/"!=window.location.pathname&&"/en"!=window.location.pathname||e.preventDefault(),this.btn.hasAttribute("href")&&(t=this.btn.href,void 0!==t&&-1==t.indexOf("#services")&&e.preventDefault());const n=this.target;requestAnimationFrame(()=>{const e=(new Date).getTime(),t=e,s=window.pageYOffset,o=n.getBoundingClientRect().top;this.scrollToTop(t,e,500,o,s)})}addEvents(){this.btn.addEventListener("click",()=>this.scrolling(event))}}},1:function(e,t,n){"use strict";t.a=class{constructor(){this.menuButton=document.querySelector(".menu-button"),this.menu=document.querySelector(".hero__nav"),this.menuLinks=document.querySelectorAll(".main-nav__link"),this.reset(),this.events()}events(){this.menuButton.addEventListener("click",()=>{this.toggleMenu(),this.removeHandlerClass()});for(let e=0;e<this.menuLinks.length;e++)this.menuLinks[e].addEventListener("click",()=>{this.toggleMenu()});window.addEventListener("keydown",()=>this.closeHandlerByEsc(event)),this.menuButton.addEventListener("click",()=>this.closeHandlerByClickOnPage(event))}reset(){if(this.menuButton.classList.remove("menu-button--close"),this.menu.classList.add("hero__nav--hidden"),document.querySelector(".hero__nav-wrapper")){document.querySelector(".hero__nav-wrapper").remove()}}closeHandlerByEsc(e){27!=e.keyCode||this.menu.classList.contains("hero__nav--hidden")||(this.menuButton.classList.remove("menu-button--close"),this.menu.classList.add("hero__nav--hidden"),this.removeHandlerClass())}closeMobileMenuByClick(){this.menuButton.classList.remove("menu-button--close"),this.menu.classList.add("hero__nav--hidden"),this.removeHandlerClass()}closeHandlerByClickOnPage(e){if(e.target.classList.contains("menu-button--close")){const e=document.createElement("div");e.classList.add("hero__nav-wrapper"),document.body.appendChild(e),e.addEventListener("click",()=>this.closeMobileMenuByClick())}}toggleMenu(){this.menuButton.classList.toggle("menu-button--close"),this.menu.classList.toggle("hero__nav--hidden"),this.menuButton.classList.contains("menu-button--close")||this.removeHandlerClass()}removeHandlerClass(){if(document.querySelector(".hero__nav-wrapper")){document.querySelector(".hero__nav-wrapper").remove()}}}},2:function(e,t,n){"use strict";var s=n(0);t.a=class{constructor(){this.btn=document.querySelector(".up-button"),this.target=document.body,this.btn&&(this.btn.style.opacity="0",this.btn.style.pointerEvents="none",this.addEvents())}addEvents(){new s.a({trigger:this.btn,target:this.target});document.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?(this.btn.style.opacity="1",this.btn.style.pointerEvents="auto"):(this.btn.style.opacity="0",this.btn.style.pointerEvents="none")})}}},21:function(e,t,n){"use strict";n.r(t);var s=n(1),o=n(2),r=n(3);new s.a,new o.a,new r.a},3:function(e,t,n){"use strict";var s=n(0);t.a=class{constructor(){this.anchors=[...document.querySelectorAll(".smooth-trigger")],this.anchors&&this.addEvents()}addEvents(){this.anchors.map(e=>{const t=e.href.split("#")[1];new s.a({trigger:e,target:document.querySelector(`#${t}`)})})}}}});