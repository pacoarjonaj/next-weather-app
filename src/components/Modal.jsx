

function Modal({resetSearchCount}) {

	return (
		<div className="fixed inset-0 flex items-center justify-center z-50">
			<div className="fixed inset-0 bg-black opacity-50"></div>
			<div className="flex flex-col items-center bg-white rounded-lg p-4 m-4 z-50">
				<p className="text-gray-800 text-lg mb-4">You have reached the limit of free use, to continue request the Premium Plan</p>
				<button
					onClick={resetSearchCount}
					className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
				>
					Get Premium
				</button>
			</div>
		</div>
	)
}

export default Modal