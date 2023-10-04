import { API_KEY, API_WEATHER_URL } from "@/utils/settings"
import axios from 'axios'


export default async function getCurrentWeather({city}) {
	const apiURL = `${API_WEATHER_URL}/weather?q=${city}&units=metric&lang=en&appid=${API_KEY}`

	return axios.get(apiURL).then((response) => {
			return response.data
		})
		.catch((error) => {
			throw error
		})
}