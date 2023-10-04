import {
	UilArrowUp,
	UilArrowDown,
	UilTear,
	UilWind,
	UilSun,
	UilSunset
} from "@iconscout/react-unicons"
import { formatToLocalTime } from "@/utils/functions"

function TemperatureDetails({
	sunrise,
	sunset,
	feels_like,
	humidity,
	wind
}) {

	return (
		<div className="flex flex-col h-full space-y-4 md:space-y-12 justify-center p-2 items-center rounded-md backdrop-blur-2xl bg-white/5 text-white text-basem font-light">
			<div className="flex items-center justify-center">
				<UilSun size={20} className="mr-1" />
				Rise:
				<span className="font-medium ml-1">{formatToLocalTime(sunrise)} h</span>
			</div>
			<div className="flex items-center justify-center">
				<UilSunset size={20} className="mr-1" />
				Set:
				<span className="font-medium ml-1">{formatToLocalTime(sunset)} h</span>
			</div>
			<div className="flex items-center justify-center">
				<UilArrowUp size={20} className="mr-1" />
				Feels like:
				<span className="font-medium ml-1">{Math.floor(feels_like)}º</span>
			</div>
			<div className="flex items-center justify-center">
				<UilTear size={20} className="mr-1" />
				Humidity:
				<span className="font-medium ml-1">{humidity} %</span>
			</div>
			<div className="flex items-center justify-center">
				<UilWind size={20} className="mr-1" />
				Wind:
				<span className="font-medium ml-1">{wind} km/h</span>
			</div>
		</div>
	)
}

export default TemperatureDetails