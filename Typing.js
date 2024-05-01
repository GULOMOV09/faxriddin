class Typing {
    constructor({ el, interval, delay }) {
        this.el = document.querySelector(el);
        this.interval = interval || 500
        this.text = this.el.innerHTML.trim()
        this.el.innerHTML = ''
        setTimeout(() => this.write(), delay)
    }
    write(i = 0) {
        this.el.innerHTML += this.text[i]
        i++
        if (i < this.text.length) {
            setTimeout(() => {
                this.write(i)
            }, this.interval);
        }
    }
}
new Typing({
    el: '.header__content h1',
    interval: 300,
    delay: 1000
})
new Typing({
    el: '.header__content p',
    interval: 400,
    delay: 0
})
new Typing({
    el: '.info__scroll-desc',
    interval: 100,
    delay: 0
})