'use strict';

class LocationSelector {
  constructor () {
    this.city = document.querySelector('.city-select');
    this.citySelector = document.querySelector('.location-selector');
    this.citySelectorClose = document.querySelector('.location-selector__close');
    this.cityInput = document.querySelector('.city-form__input');

    this.reset();
    this.events();
  }
  
  
  /**
   * Adds click events to open and close city selector
   */
  events () {
    this.city.addEventListener('click', (evt) => {
      evt.preventDefault();
      
      this.toggleSelector();
      setTimeout(() => {
        this.cityInput.focus();
      }, 250);
    });
    
    this.citySelectorClose.addEventListener('click', (evt) => {
      evt.preventDefault();
      
      this.toggleSelector();
    });
  }
  
  
  /**
   * Reset city selector state
   */
  reset () {
    this.citySelector.classList.add('location-selector--hidden');
    this.citySelectorClose.classList.add('location-selector__close--hidden');
    this.isHidden = true;
  }
  
  
  /**
   * Toggle city selector stace (open/closed)
   */
  toggleSelector () {
    this.citySelector.classList.toggle('location-selector--hidden');
    this.citySelectorClose.classList.toggle('location-selector__close--hidden');
    this.isHidden = !this.isHidden;
    if (this.isHidden) {
      document.documentElement.style.overflow = 'auto';
    } else {
      document.documentElement.style.overflow = 'hidden';
    }
  }
}

export default LocationSelector;
