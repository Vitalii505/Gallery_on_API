export class Model {
  arrayPhoto = [];
  constructor() {}
  async getApi(callback) {
    const response = await fetch("https://picsum.photos/v2/list")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          this.arrayPhoto.push(data[i]);
        }
        callback(this.arrayPhoto);
      });
  }
}
