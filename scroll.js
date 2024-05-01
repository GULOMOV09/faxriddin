class Scroll {
    constructor({ nav, unit, top }) {
        this.nav = document.querySelector(nav);
        this.top = top ?? 100
        this.unit = unit || "%"

        this.nav.style = `position:fixed;
                            top:${this.scrollUnit()}px`
        window.addEventListener('scroll', () => {
            if (this.scrollUnit() > scrollY) {
                this.nav.style.top = `${this.scrollUnit() - scrollY}px`
            } else {
                this.nav.style.top = '0'
            }
        })
    }
    scrollUnit() {
        if (this.unit == 'px') {
            return this.top
        } else {
            return (window.innerHeight / 100) * this.top - this.nav.clientHeight
        }
    }
}
new Scroll({
    nav: '.header__nav',
    top: 100,
    unit: "%"
})

