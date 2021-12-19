import {randomImage} from './data.js';

class App {
  async render() {
    let photos = '';
    for (let i = 0; i < 5; i++) {
      const data = await randomImage();

      photos += `
        <div class="photo-item">
          <div class="image">
            <img src="${data.urls.small}">
          </div>
        </div>
      `;
    }

    document.getElementById('photo-container').innerHTML = photos;
  }
}

export default App;