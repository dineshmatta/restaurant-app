import axios from 'axios';

const openTableApi = axios.create({
  baseURL: 'http://opentable.herokuapp.com/api',
  responseType: 'json'
});

export async function getRestaurants(city) {
  try {
    const response = await openTableApi.get(`/restaurants?city=${city}`);
    return response.data
  } catch (e) {
    console.log(e);
  }
}