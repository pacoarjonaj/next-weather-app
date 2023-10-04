import ClipLoader from "react-spinners/ClipLoader"


function Spinner() {
	return (
		<ClipLoader 
			color="white" 
			loading={true}
			size={72}
        	aria-label="Loading Spinner"
		/>
	)
}

export default Spinner