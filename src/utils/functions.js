export function formatToLocalTime(timestamp) {
	const date = new Date(timestamp * 1000)
  
	const options = {
	  hour: '2-digit',
	  minute: '2-digit',
	  hour12: false,
	}
  
	return date.toLocaleTimeString('es-ES', options)
}

export const indexes = [7, 15, 23, 31, 39]

export const MAX_LIMIT = 5