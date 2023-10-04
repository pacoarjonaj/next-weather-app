

function Icon({ code }) {

	return (
		<img
			src={`http://openweathermap.org/img/wn/${code}@2x.png`}
			alt="/weather-icon"
		/>
	)
}

export default Icon