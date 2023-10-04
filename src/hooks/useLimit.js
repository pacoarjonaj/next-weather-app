import { useState } from 'react'


const MAX_LIMIT = 5

function useSearchLimit() {
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
		setSearchCount(0)
		setShowModal(false)
	}

	return { searchCount, showModal, incrementSearchCount, resetSearchCount }
}

export default useSearchLimit