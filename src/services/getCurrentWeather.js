import { API_KEY, API_WEATHER_URL } from "@/utils/settings"
import axios from 'axios'


export default function getCurrentWeather({ city }) {
	const apiURL = `${API_WEATHER_URL}/weather?q=${city}&units=metric&lang=en&appid=${API_KEY}`

	return axios.get(apiURL).then((response) => {
		return response.data
		}).catch((error) => {
			if (error.response && error.response.status === 404) {
				return { error: 'City not found' }
			} else {
				throw error
			}
		})
}	