import 'regenerator-runtime';
import '../styles/style.css';
import App from './app.js';

const app = new App();

window.addEventListener('load', () => {
  app.render();
});