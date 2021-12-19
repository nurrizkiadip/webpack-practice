import CONFIG from './config-unsplash.js';

async function randomImage () {
  const response = await fetch(`${CONFIG.baseUrl}/photos/random/?client_id=${CONFIG.accessKey}`);
  const data = await response.json();
  return data;
}

export {randomImage};