import { UilLocationPoint, UilSearch } from "@iconscout/react-unicons"
import Icon from "./Icon"

function SearchInput() {

	return (
		<div className="flex flex-col my-4">
			<div className="w-full flex flex-row justify-between">
				<div className="flex flex-row w-auto items-center justify-center space-x-4">
					<input
						className="w-full p-2 rounded-md text-xl font-light capitalize shadow-lg focus:outline-none"
						type="text"
						placeholder="Buscar una ciudad"
					/>
					<UilSearch
						className="text-white cursor-pointer transition ease-out hover:scale-150"
						size={28}
					/>
					<UilLocationPoint
						className="text-white cursor-pointer transition ease-out hover:scale-150"
						size={28}
					/>
				</div>

				<div className="hidden md:flex flex-row items-center">
					<div className="flex flex-col">
						<p className="text-white text-2xl font-normal">Madrid, ES</p>
						<p className="text-white text-base font-normal">07/09/2023</p>
					</div>
					<Icon className="w-24" code='11d' />
				</div>
			</div>

			<div className="flex flex-row items-center justify-between py-8">
				<p className="text-white text-8xl font-semibold"> 34º</p>

				<div className="md:hidden flex flex-col items-center justify-center">
					<p className="text-white text-lg sm:text-xl font-normal">Madrid, ES</p>
					<Icon className="w-16" code='11d' />
				</div>
			</div>

		</div>
	)
}

export default SearchInput