import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Filler, ScriptableContext } from 'chart.js'
import { formatToLocalTime } from '@/utils/functions'


ChartJS.register(
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	Filler
)


function Forecast({weather}) {

	function createGradientBg(context) {
		const ctx = context.chart.ctx
		const gradient = ctx.createLinearGradient(0, 0, 0, 250)
		
		gradient.addColorStop(0, 'rgba(255, 165, 0, 0.5)')
		gradient.addColorStop(1, 'rgba(173, 216, 230, 0.5)')
		
		return gradient
	}

	const chartLabels = weather.map((item) => formatToLocalTime(item.dt))
	const chartData = weather.map((item) => item.main.temp)

	const data = {
		labels: chartLabels,
		datasets: [{
			data: chartData,
			backgroundColor: ((context) => createGradientBg(context)),
			borderColor: 'orange',
			pointBorderColor: 'orange',
			fill: true,
			tension: 0.4
		}]
	}

	const options = {
		responsive: true,
		scales: {
			x: {
				ticks: {
					color: 'white'
				},
				grid: {
					drawOnChartArea: true
				}
			},
			y: {
				min: Math.floor(weather[0].main.temp_min - 10),
				max: Math.floor(weather[0].main.temp_max + 10),
				ticks: {
					callback: function(value) {
						return value + '°';
					},
					color: 'white'
				},
				grid: {
					drawOnChartArea: true
				}
			}
		}
	}

	return (
		<div className="flex flex-col h-full p-4 rounded-md backdrop-blur-md bg-white/5">
			<div className="flex items-center justify-start">
				<p className="font-medium text-white uppercase">24 hourly forecast</p>
			</div>
			<hr className="my-2" />


			<div className="flex items-center justify-center w-full max-h-72">
				<Line data={data} options={options} />
			</div>

		</div>
	)
}

export default Forecast