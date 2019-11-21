'use strict';

class PopUp {
    constructor () {
      this.investmentPopup = document.querySelector('.investment-popup');
      this.protectionLink = document.querySelector('.protection__link');
      this.investmentPopupClose = document.querySelector('.investment-popup__close');

      this.events();
    }

<<<<<<< HEAD
events () {
    this.protectionLink.addEventListener('click', () => {
        if (this.investmentPopup.classList.contains('investment-popup__hidden')) {
            this.investmentPopup.classList.remove('investment-popup__hidden');
            setTimeout(() => {
                this.investmentPopup.remove('investment-popup__visually');
            }, 20);
        } else {
            // this.investmentPopup.classList.add('investment-popup__visually');
            this.investmentPopup.addEventListener('transitioned', (e) => {
                // this.investmentPopup.classList.add('.investment-popup__hidden');
            }, {
                capture: false,
                once: true,
                passive: false
            });
        }
    }, false);
=======

    events () {
        this.protectionLink.addEventListener('click', () => {
            if (this.investmentPopup.classList.contains('investment-popup--hidden')) {
                this.investmentPopup.classList.remove('investment-popup--hidden');
                setTimeout(() => {
                    this.investmentPopup.classList.remove('investment-popup__visually');
                }, 20);
            }
        })
>>>>>>> 481096152bd138dfc9103badcf6b73ead5356893

        this.investmentPopupClose.addEventListener('click', () => {
            this.investmentPopup.classList.add('investment-popup__visually');
            setTimeout(() => {
                this.investmentPopup.classList.add('investment-popup--hidden');
            }, 500);
            
        })
    }
}


export default PopUp;
