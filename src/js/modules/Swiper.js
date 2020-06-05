class Swiper {
    constructor(obj) {
        this.swipeTarget = document.querySelector(obj.target);
        this.arrow = this.swipeTarget.querySelector('.branch-helper__arrow');
        this.leftArrow = this.swipeTarget.querySelector('.branch-helper__arrow-movleft');
        this.rightArrow = this.swipeTarget.querySelector('.branch-helper__arrow-movright');
        this.headline = this.swipeTarget.querySelector('.branch-helper__headline');
        this.classToSwitch = obj.classToSwitch;
        this.touchobj;
        this.startX;
        this.startY;
        this.startTime;
        this.dist;
        this.threshold = 50;
        this.allowedTime = 250;
        this.ellapsedTime;
        this.addEvents();
    }

    removeListeners() {
        window.removeEventListener('touchstart', this.touchStart, false);
        window.removeEventListener('touchmove', this.touchMove, false);
        window.removeEventListener('touchend', this.touchedMove, false);
    }

    touchStart(evt) {
        this.touchobj = evt.changedTouches[0]
        this.startX = this.touchobj.pageX
        this.startY = this.touchobj.pageY
        this.startTime = new Date().getTime() // время контакта с поверхностью сенсора
    }

    touchMove(evt) {
        this.touchobj = evt.changedTouches[0];
        this.ellapsedTime = new Date().getTime() - this.startTime
        this.dist = this.touchobj.pageX - this.startX;
        
        if(this.dist >= 0) {
            this.swipeTarget.style.right = `-${this.dist}px`;
        }
        else {
            let toLeft = -(this.dist - -320);
            this.swipeTarget.style.right = `${toLeft}px`;
        }
        evt.preventDefault();
    }

    touchedMove(evt) {
        this.touchobj = evt.changedTouches[0]
            if(this.dist >= 160 || this.dist >= -160) {
                this.swipeTarget.style.right = `-320px`;
                this.dist = 0;
                this.arrow.style.backgroundImage = "url('/sites/all/themes/oldboy8/dist/img/arrow-left.svg')";
                //this.arrow.style.backgroundImage = "url('./img/arrow-left.svg')";
                this.rightArrow.style.display = 'none';
                this.leftArrow.style.display = 'block';
                this.headline.style.opacity = "0.5";
                this.removeListeners()
            }
            else if (this.dist < 160 && this.dist > 0 || this.dist < -50) {
                this.swipeTarget.style.right = `0px`;
                this.dist = 320;
                this.arrow.style.backgroundImage = "url('/sites/all/themes/oldboy8/dist/img/arrow-right.svg')";
                //this.arrow.style.backgroundImage = "url('./img/arrow-right.svg')";
                this.leftArrow.style.display = 'none';
                this.rightArrow.style.display = 'block';
                this.headline.style.opacity = "1";
                this.removeListeners()
            }
    }

    addEvents() {
        this.swipeTarget.addEventListener('touchstart', (event) => this.touchStart(event))
    
        this.swipeTarget.addEventListener('touchmove', (event) => this.touchMove(event))
        
        this.swipeTarget.addEventListener('touchend', (event) => this.touchedMove(event))
    }
}

export default Swiper;