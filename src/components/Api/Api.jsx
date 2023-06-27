import axios from 'axios';

export async function fetchPics(page, query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '37647555-a40bd03f94323adfc18298a2e';
  const BASE_SEARCH_PARAMS = {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
  };

  return await axios.get(
    `${BASE_URL}?key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&q=${query}&page=${page}&safesearch=${BASE_SEARCH_PARAMS.safesearch}`
  );
}
