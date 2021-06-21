export class View {
  constructor() {
    this.app = this.getElement("#app-root");
    
    this.controlDIV = this.createElement("div");
    this.arrowLeft = this.createElement(
      "a",
      "arrows",
      '<i class="fas fa-arrow-left">'
    );
    this.arrowRight = this.createElement(
      "a",
      "arrows",
      '<i class="fas fa-arrow-right">'
    );
    this.arrowLeft.setAttribute("href", "#");
    this.arrowLeft.id = "arrowLeft";
    this.arrowRight.setAttribute("href", "#");
    this.arrowRight.id = "arrowRight";

    this.imgDIV = this.createElement("div", "img-container");
    this.img = this.createElement("img");
    this.title = this.createElement("h3", "title", "Author");
    
    this.controlDIV.append(this.arrowLeft, this.arrowRight);
    this.imgDIV.append(this.img);
    this.app.append(this.controlDIV, this.imgDIV, this.title);
  }
  createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    if (text) element.innerHTML = text;
    return element;
  }
  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }
  imgSrc(url, title) {
    this.img.setAttribute("src", url);
    this.title.textContent = title;
  }
}
