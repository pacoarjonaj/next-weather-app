import { useState } from 'react'


const MAX_LIMIT = 5

function useLimit() {
	const [searchCount, setSearchCount] = useState(0)
	const [showModal, setShowModal] = useState(false)

	const incrementSearchCount = () => {
		if (searchCount < MAX_LIMIT) {
			setSearchCount(searchCount + 1)
		} else {
			setShowModal(true)
		}
	}

	const resetSearchCount = () => {
		window.location.reload()
	}

	return { searchCount, showModal, incrementSearchCount, resetSearchCount }
}

export default useLimit