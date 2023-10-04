import { useState, useEffect } from 'react'
import getCurrentWeather from '@/services/getCurrentWeather'
import getDailyWeather from '@/services/getDailyWeather'
import getGeolocation from '@/services/getGeolocation'


export default function useWeather() {
	const [currentWeather, setCurrenWeather] = useState({})
	const [dailyWeather, setDailyWeather] = useState({})
	const [loading, setLoading] = useState(false)
	const [city, setCity] = useState('')
	const [searching, setSearching] = useState(false)
	const [latitude, setLatitude] = useState(null)
	const [longitude, setLongitude] = useState(null)


	const fetchWeather = async () => {
		setLoading(true)

		try {
			let cityToUse = city

			if (location && longitude && city === '') {
				const locationData = await getGeolocation({ lat: latitude, lon: longitude })
				cityToUse = locationData[0].name
			}

			const currentData = await getCurrentWeather({ city: cityToUse })
			const dailyData = await getDailyWeather({ city: cityToUse })

			setCurrenWeather(currentData)
			setDailyWeather(dailyData)
			setLoading(false)
		} catch (error) {
			console.log('Error fetching weather data:', error)
			setLoading(false)
		}
	}

	useEffect(() => {
		if (searching) {
			fetchWeather()
			setSearching(false)
		}
	}, [searching])

	const handleCityChange = (newCity) => {
		setCity(newCity)
	}

	const handleSearch = () => {
		setSearching(true)
	}

	const handleLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				const lat = position.coords.latitude
				const lon = position.coords.longitude

				setLatitude(lat)
				setLongitude(lon)
				setCity('') 
				setSearching(true)
			})
		}
	}

	return { currentWeather, dailyWeather, loading, city, handleCityChange, handleSearch, handleLocation }
}
