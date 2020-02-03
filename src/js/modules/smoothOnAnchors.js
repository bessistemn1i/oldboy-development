import SmoothScroll from './SmoothScroll';

class SmoothOnAnchors {
    constructor() {
        this.anchors = [...document.querySelectorAll('.alphabet__trigger')];
        if(this.anchors) {
            this.addEvents();
        }
    }

    addEvents() {
        this.anchors.map((el) => {
            const reg = /.*(#)/g;
            const href = el.href.match(reg)[0];
            const correct = el.href.replace(href, '');
            
            if(document.querySelector(`#${correct}`) === null) {
                el.style.color = '#cccccc';
                el.style.pointerEvents = 'none';
            }
        })
    }
}

export default SmoothOnAnchors;