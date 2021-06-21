export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.model.getApi(this.setPhoto);
    this.i = 0;
  }
  setPhoto = (data) => {
    this.url(data);
  };
  url(array) {
    this.view.imgSrc(array[this.i].download_url, array[this.i].author);
    const elemRight = this.view.getElement("#arrowRight");
    const elemLeft = this.view.getElement("#arrowLeft");
    elemRight.addEventListener("click", () => {
      if (this.i >= 0 && this.i < array.length - 1) {
        this.view.imgSrc(array[this.i + 1].download_url, array[this.i + 1].author);
        this.i++;
      }
      if (this.i >= array.length - 1) {
        this.i = 0;
        this.view.imgSrc(array[this.i].download_url, array[this.i].author);
      }
    });
    elemLeft.addEventListener("click", () => {
      if (this.i > 0 && this.i <= array.length - 1) {
        this.view.imgSrc(array[this.i - 1].download_url, array[this.i - 1].author);
        this.i--;
      }
      if (this.i <= 0) {
        this.i = array.length - 1;
        this.view.imgSrc(array[this.i].download_url, array[this.i].author);
      }
    });
  }
}
