class BranchHelper {
    constructor () {
        this.btn = document.querySelector('.branch-helper__header');
        this.helper = document.querySelector('.branch-helper');
        this.arrow = document.querySelector('.branch-helper__arrow');
        this.headline = document.querySelector('.branch-helper__headline');

        this.addEvent();
    }

    addEvent() {
        this.btn.addEventListener('click', () => {
            this.helper.classList.toggle('branch-helper--visible');

            if (this.helper.classList.contains('branch-helper--visible')) {
                this.arrow.style.backgroundImage = "url('./img/arrow-right.png')";
                this.headline.style.opacity = "1";
            } else {
                this.arrow.style.backgroundImage = "url('./img/arrow-left.png')";
                this.headline.style.opacity = "0.5";
            }
        });
    }
}

export default BranchHelper;