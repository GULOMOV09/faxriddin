class HeaderContent {
  constructor() {
    this.element = document.querySelector('.header__content');
    this.containerWidth = 1400; 
    this.containerHeight = 650;
    this.elementWidth = this.element.offsetWidth;
    this.elementHeight = this.element.offsetHeight;
    this.firstHover = true; 
    this.element.addEventListener('mouseover', this.moveHeaderContent.bind(this));
  }
  moveHeaderContent() {
    const maxX = this.containerWidth - this.elementWidth,
          maxY = this.containerHeight - this.elementHeight,
          randomX = Math.floor(Math.random() * maxX),
          randomY = Math.floor(Math.random() * maxY);

    this.element.style.position = 'absolute';
    const soat = 100,
          startLeft = parseInt(this.element.style.left || 130),
          startTop = parseInt(this.element.style.top || 140),
          changeX = randomX - startLeft,
          changeY = randomY - startTop,
          startTime = performance.now();
    const fini = (currentTime) => {
      const otgansoat = currentTime - startTime;
      if (otgansoat < soat) {
        const element = otgansoat / soat,
              newX = startLeft + (changeX * element),
              newY = startTop + (changeY * element);
              this.element.style.left = newX + 'px';
              this.element.style.top = newY + 'px';
        requestAnimationFrame(fini);
      } else {
        this.element.style.left = randomX + 'px';
        this.element.style.top = randomY + 'px';
      }
    };
    requestAnimationFrame(fini);
  }
}
const headerContent = new HeaderContent();
