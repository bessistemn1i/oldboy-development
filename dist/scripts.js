!function(t){var e={};function s(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=15)}([function(t,e,s){"use strict";e.a=class{constructor(t){this.btn=t.trigger,this.target=t.target,this.addEvents()}ease(t){return t}scrollToTop(t,e,s,n,o){const i=e-t;let l=i/s;const r=this.ease(l);l=Math.min(l,1),window.scroll(0,o+n*r),i<s&&requestAnimationFrame(()=>{const e=(new Date).getTime();this.scrollToTop(t,e,s,n,o)})}scrolling(t){let e;console.log(window.location.pathname),"/"!=window.location.pathname&&"/en"!=window.location.pathname||t.preventDefault(),this.btn.hasAttribute("href")&&void 0!==(e=this.btn.href)&&-1==e.indexOf("#services")&&t.preventDefault();const s=this.target;requestAnimationFrame(()=>{const t=(new Date).getTime(),e=t,n=window.pageYOffset,o=s.getBoundingClientRect().top;this.scrollToTop(e,t,500,o,n)})}addEvents(){this.btn.addEventListener("click",()=>this.scrolling(event))}}},function(t,e,s){"use strict";e.a=class{constructor(){this.menuButton=document.querySelector(".menu-button"),this.menu=document.querySelector(".hero__nav"),this.menuLinks=document.querySelectorAll(".main-nav__link"),this.reset(),this.events()}events(){this.menuButton.addEventListener("click",()=>{this.toggleMenu(),this.removeHandlerClass()});for(let t=0;t<this.menuLinks.length;t++)this.menuLinks[t].addEventListener("click",()=>{this.toggleMenu()});window.addEventListener("keydown",()=>this.closeHandlerByEsc(event)),this.menuButton.addEventListener("click",()=>this.closeHandlerByClickOnPage(event))}reset(){if(this.menuButton.classList.remove("menu-button--close"),this.menu.classList.add("hero__nav--hidden"),document.querySelector(".hero__nav-wrapper")){document.querySelector(".hero__nav-wrapper").remove()}}closeHandlerByEsc(t){27!=t.keyCode||this.menu.classList.contains("hero__nav--hidden")||(this.menuButton.classList.remove("menu-button--close"),this.menu.classList.add("hero__nav--hidden"),this.removeHandlerClass())}closeMobileMenuByClick(){this.menuButton.classList.remove("menu-button--close"),this.menu.classList.add("hero__nav--hidden"),this.removeHandlerClass()}closeHandlerByClickOnPage(t){if(t.target.classList.contains("menu-button--close")){const t=document.createElement("div");t.classList.add("hero__nav-wrapper"),document.body.appendChild(t),t.addEventListener("click",()=>this.closeMobileMenuByClick())}}toggleMenu(){this.menuButton.classList.toggle("menu-button--close"),this.menu.classList.toggle("hero__nav--hidden"),this.menuButton.classList.contains("menu-button--close")||this.removeHandlerClass()}removeHandlerClass(){if(document.querySelector(".hero__nav-wrapper")){document.querySelector(".hero__nav-wrapper").remove()}}}},function(t,e,s){"use strict";var n=s(0);e.a=class{constructor(){this.btn=document.querySelector(".up-button"),this.target=document.body,this.btn&&(this.btn.style.opacity="0",this.btn.style.pointerEvents="none",this.addEvents())}addEvents(){new n.a({trigger:this.btn,target:this.target});document.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?(this.btn.style.opacity="1",this.btn.style.pointerEvents="auto"):(this.btn.style.opacity="0",this.btn.style.pointerEvents="none")})}}},function(t,e,s){"use strict";var n=s(0);e.a=class{constructor(){this.anchors=[...document.querySelectorAll(".smooth-trigger")],this.anchors&&this.addEvents()}addEvents(){this.anchors.map(t=>{const e=t.href.split("#")[1];new n.a({trigger:t,target:document.querySelector(`#${e}`)})})}}},function(t,e,s){"use strict";e.a=class{constructor(){this.city=document.querySelector(".city-select"),this.citySelector=document.querySelector(".location-selector"),this.citySelectorClose=document.querySelector(".location-selector__close"),this.cityInput=document.querySelector(".city-form__input"),this.reset(),this.events()}events(){this.city.addEventListener("click",t=>{t.preventDefault(),this.toggleSelector(),setTimeout(()=>{this.cityInput.focus()},250)}),this.citySelectorClose.addEventListener("click",t=>{t.preventDefault(),this.toggleSelector()}),window.addEventListener("keydown",()=>this.closeHandlerByEsc(event))}reset(){this.citySelector.classList.add("location-selector--hidden"),this.citySelectorClose.classList.add("location-selector__close--hidden"),this.isHidden=!0}toggleSelector(){this.citySelector.classList.toggle("location-selector--hidden"),this.citySelectorClose.classList.toggle("location-selector__close--hidden"),this.isHidden=!this.isHidden,this.isHidden?document.documentElement.style.overflow="auto":document.documentElement.style.overflow="hidden"}closeHandlerByEsc(t){27!=t.keyCode||this.citySelector.classList.contains("location-selector--hidden")||(this.citySelectorClose.classList.add("location-selector__close--hidden"),this.citySelector.classList.add("location-selector--hidden"),document.documentElement.style.overflow="auto")}}},function(t,e,s){"use strict";e.a=class{constructor(){this.locationSelector=document.querySelector(".location-selector"),this.locationForm=this.locationSelector.querySelector(".city-form__form"),this.locationInput=this.locationSelector.querySelector(".city-form__input"),this.resultsSection=this.locationSelector.querySelector(".search-results"),this.resultsList=this.locationSelector.querySelector(".search-results__list"),this.notFoundLabel=this.locationSelector.querySelector(".search-results__not-found"),this.locationForm&&(this.branches=this.generateBranches(),this.addEvents(),this.hideResults())}addEvents(){this.locationForm.addEventListener("submit",t=>{t.preventDefault()}),this.locationForm.addEventListener("input",t=>{this.locationInput.value.length<=0&&this.hideResults()}),this.locationInput.addEventListener("keyup",t=>{let e=this.locationInput.value;if(e.length>0){let t=this.filterBranches(this.branches,e);this.showFound(t)}else this.hideResults()})}generateBranches(){let t=[],e=this.locationSelector.querySelectorAll(".location-list");for(let s=0;s<e.length;s++){let n=e[s].querySelector(".location-list__city").textContent,o=e[s].querySelectorAll(".location-list__item");for(let e=0;e<o.length;e++){let s=o[e].querySelector("a"),i=o[e].querySelectorAll(".location-list__metro span"),l={city:n,address:s.textContent,link:s.href,stations:[]};for(let t=0;t<i.length;t++)l.stations.push(i[t].textContent);t.push(l)}}return t}filterBranches(t,e){return e=e.toLocaleLowerCase(),t.filter(t=>{if(t.city.toLowerCase().includes(e))return!0;if(t.address.toLowerCase().includes(e))return!0;for(let s=0;s<t.stations.length;s++)if(t.stations[s].toLowerCase().includes(e))return!0;return!1})}showFound(t){for(this.resultsSection.style.display="block";this.resultsList.firstChild;)this.resultsList.removeChild(this.resultsList.firstChild);if(t.length>0){let e=document.createDocumentFragment();t.forEach(t=>{let s=document.createElement("li");s.classList.add("search-results__item");let n=document.createElement("a");if(n.classList.add("search-results__link"),n.textContent=t.city+", "+t.address,n.href=t.link,s.appendChild(n),t.stations.length>0){let e=document.createElement("div");e.classList.add("search-results__metro"),t.stations.forEach(t=>{let s=document.createElement("span");s.textContent=t,e.appendChild(s)}),s.appendChild(e)}e.appendChild(s)}),this.resultsList.appendChild(e),this.notFoundLabel.style.display="none"}else this.notFoundLabel.style.display="block"}hideResults(){this.resultsSection.style.display="none"}}},function(t,e,s){"use strict";e.a=class{constructor(){this.locationLogo=document.querySelector(".location-logo"),this.locationLogoEng=document.querySelector(".location-logo--out"),this.addEvents()}addEvents(){location.href.match(/oldboybarbershop.com/)&&(this.locationLogo.removeAttribute("href"),this.locationLogo.style.opacity="1"),location.href.match(/eu.oldboybarbershop.com/)&&this.locationLogo.removeAttribute("href")}}},,,,,,,,,function(t,e,s){"use strict";s.r(e);var n=s(1),o=s(4),i=s(5);var l=class{constructor(){this.langSelect=document.querySelector(".language-select"),this.langSelect&&(this.langButton=this.langSelect.querySelector(".language-select__current"),this.langPopup=this.langSelect.querySelector(".language-select__popup"),this.langPopup?this.reset():this.langButton.style.display="none",this.addEvents())}addEvents(){this.langButton.addEventListener("click",()=>{this.togglePopup()}),document.addEventListener("click",t=>{t.target!=this.langButton&&t.target!=this.langPopup&&this.reset()})}reset(){this.langPopup.classList.add("language-select__popup--hidden")}togglePopup(){this.langPopup.classList.toggle("language-select__popup--hidden")}},r=s(2),c=s(3),a=s(6);var u=class{constructor(){this.menuScale=document.querySelectorAll(".main-nav__link"),this.addEvents()}addEvents(){this.menuScale.length>5&&this.menuScale.forEach(t=>{t.classList.add("main-nav__link--scale")})}};var d=class{constructor(){this.inputValues=[...document.querySelectorAll(".vacancy-form__btn span")],this.flagElem=document.querySelector(".vacancy-form__label"),this.addEvents()}findParent(t,e){for(;(t=t.parentElement)&&!t.classList.contains(e););return t}addEvents(){(this.inputValues=[])&&(this.inputValues=[...document.querySelectorAll(".js-webform-radios .option")]),this.inputValues.map(t=>{let e,s=t.textContent.length;console.log(s),e=this.flagElem?"vacancy-form__label":"js-form-item";let n=this.findParent(t,e);n.style.width="30%",s>=15?n.style.width="55%":s>=8&&(n.style.width="43%")})}};new n.a,new o.a,new i.a,new l,new a.a,new u,new d;new r.a,new c.a}]);