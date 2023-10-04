import { API_KEY, API_WEATHER_URL } from "@/utils/settings"
import axios from 'axios'


export default function getDailyWeather({city}) {
	const apiURL = `${API_WEATHER_URL}/forecast?q=${city}&units=metric&lang=en&appid=${API_KEY}`

	return axios.get(apiURL).then((response) => {
			return response.data
		})
		.catch((error) => {
			console.log(error)
			throw new Error(error)
		})
}