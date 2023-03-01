import axios from 'axios';


let page = 1;
export const perPage = 40;

export async function fetchImages(searchValue) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '34020609-8fd5e6226221618c5d9372e77';
  try {
    const response = await axios
      .get(
        `${BASE_URL}?key=${API_KEY}&q=${searchValue}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
      )
      .then((page += 1));
    return response.data;
  } catch (error) {
    console.log(error);
  }
}