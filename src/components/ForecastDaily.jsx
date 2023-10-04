import ForecastItem from "./ForecastItem"
import { indexes } from "@/utils/functions"


function ForecastDaily({weather}) {

	return (
		<div className="flex flex-col h-full p-2 rounded-md backdrop-blur-2xl bg-white/5 text-white">
			<div className="flex items-center justify-start">
				<p className="font-medium text-white uppercase">weekly forecast - every 24 h</p>
			</div>
			<hr className="my-2" />

				<div className="overflow-x-auto md:overflow-hidden flex flex-row items-center justify-between space-x-4 sm:space-x-0 md:px-4">
					{indexes.map((index) => (
						<ForecastItem 
							key={index}
							hour={weather[index].dt}
							icon={weather[index].weather[0].icon}
							temp={Math.floor(weather[index].main.temp)}
						/>
					))}
				</div>

		</div>
	)
}

export default ForecastDaily