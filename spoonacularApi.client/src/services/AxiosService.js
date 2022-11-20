import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const spoonacularApi = Axios.create({
  baseURL: "https://api.spoonacular.com",
  params: {
    apiKey: "d9cd937f1ac94394beab82c5cc8efd88",
  },
  timeout: 8000,
});
