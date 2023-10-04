import Icon from "./Icon"
import { formatToLocalTime } from "@/utils/functions"


function ForecastItem({
	hour,
	icon,
	temp
}) {

	return (
		<div className="flex flex-col items-center justify-center font-light text-sm">
			<p className="">{formatToLocalTime(hour)}h</p>
			<Icon className="w-16" code={icon} />
			<p className="font-medium">{temp}º</p>
		</div>
	)
}

export default ForecastItem