import { useState } from "react"
import useWeather from "@/hooks/useWeather"
import useLimit from "@/hooks/useLimit"
import { UilBrightnessLow, UilLocationPoint, UilMoon, UilSearch } from "@iconscout/react-unicons"
import Icon from "../components/Icon"
import Forecast from "@/components/Forecast"
import TemperatureDetails from "@/components/TemperatureDetails"
import ForecastDaily from "@/components/ForecastDaily"
import Modal from "@/components/Modal"
import Spinner from "@/components/Spinner"


export default function Home() {
	const [screenMode, setScreenMode] = useState('light')
	const { currentWeather, dailyWeather, loading, city, handleCityChange, handleSearch, handleLocation } = useWeather()
	const { showModal, incrementSearchCount, resetSearchCount } = useLimit()

	const handleSubmit = (evt) => {
		evt.preventDefault()
		incrementSearchCount()
		handleSearch()
	}

	const toggleScreenMode = () => {
		const newMode = screenMode === 'light' ? 'dark' : 'light'
		setScreenMode(newMode)
	}

	return (
		<div
			className="w-full min-h-screen flex flex-col items-center justify-center bg-no-repeat bg-cover overflow-hidden"
			style={{
				backgroundImage: `url("/bg_images/${screenMode}/${(dailyWeather && dailyWeather.city)
					? dailyWeather.list[0].weather[0].main
					: 'Clear'
					}.jpg")`,
			}}
		>
			{loading ? (
				<Spinner />
			) : (
				<>
					<div className="flex flex-col px-2">
						<form
							id="search-form"
							className="w-auto max-w-screen-xl pt-4 bg-no-repeat bg-cover z-10 flex flex-row items-center justify-center space-x-4"
							onSubmit={handleSubmit}
						>
							<input
								className="w-full p-2 rounded-md text-xl font-light first-letter:capitalize shadow-lg focus:outline-none"
								type="text"
								placeholder="Search a city"
								value={city}
								onChange={(e) => handleCityChange(e.target.value)}
							/>
							<UilSearch
								className="text-white cursor-pointer transition ease-out hover:scale-150"
								size={28}
								onClick={handleSubmit}
							/>
							<UilLocationPoint
								className="text-white cursor-pointer transition ease-out hover:scale-150"
								size={28}
								onClick={handleLocation}
							/>
							{screenMode === 'light' ? (
								<UilBrightnessLow
									className="text-white cursor-pointer transition ease-out hover:scale-150"
									size={28}
									onClick={toggleScreenMode}
								/>
							) : (
								<UilMoon
									className="text-white cursor-pointer transition ease-out hover:scale-150"
									size={28}
									onClick={toggleScreenMode}
								/>
							)}
						</form>

						{currentWeather.error && (
							<span className="text-white">{currentWeather.error}</span>
						)}
					</div>

					<div className="w-full max-w-screen-xl p-4 bg-no-repeat bg-cover z-10">
						{currentWeather && dailyWeather && dailyWeather.city && (
							<div className="flex flex-col">
								<div className="w-full flex flex-row items-center justify-between">
									<div className="flex flex-col items-start">
										<p className="text-white text-5xl sm:text-8xl font-semibold">{Math.floor(currentWeather.main.temp)}º</p>
										<p className="md:hidden text-white text-lg sm:text-2xl font-normal">{currentWeather.name}</p>
										<p className="md:hidden text-white text-xs font-normal capitalize">{currentWeather.weather[0].description}</p>
									</div>
									<div className="flex flex-row items-center justify-center">
										<div className="hidden md:flex md:flex-col items-start">
											<p className="text-white text-lg sm:text-2xl font-normal">
												{currentWeather.name}
											</p>
											<p className=" text-white text-sm font-normal capitalize">{currentWeather.weather[0].description}</p>
										</div>
										<Icon className="w-20" code={currentWeather.weather[0].icon} />
									</div>
								</div>


								<div className="flex flex-col space-y-4 md:grid md:grid-rows-3 md:grid-flow-col md:gap-4">
									<div className="md:col-span-8 md:row-span-2">
										<Forecast weather={dailyWeather.list.slice(0, 8)} />
									</div>
									<div className="md:col-span-8 md:row-span-1">
										<ForecastDaily weather={dailyWeather.list} />
									</div>
									<div className="md:row-span-2">
										<TemperatureDetails
											sunrise={dailyWeather.city.sunrise}
											sunset={dailyWeather.city.sunset}
											feels_like={currentWeather.main.feels_like}
											humidity={currentWeather.main.humidity}
											wind={currentWeather.wind.speed}
										/>
									</div>
								</div>

							</div>
						)}
					</div>
				</>
			)}

			{showModal && (
				<Modal resetSearchCount={resetSearchCount}/>
			)}
		</div>
	)
}

