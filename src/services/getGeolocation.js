import { API_KEY, API_GEOLOCATION_URL } from "@/utils/settings"
import axios from 'axios'


export default function getGeolocation({lat, lon}) {
	const apiURL = `${API_GEOLOCATION_URL}/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`

	return axios.get(apiURL).then((response) => {
			return response.data
		})
		.catch((error) => {
			throw error
		})
}