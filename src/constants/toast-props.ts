import { type ToastContainerProps } from 'react-toastify'

export const toastProps: ToastContainerProps = {
	position: 'top-center',
	autoClose: 3000,
	hideProgressBar: true,
	newestOnTop: false,
	closeOnClick: true,
	rtl: false,
	pauseOnFocusLoss: false,
	draggable: true,
	pauseOnHover: false,
	limit: 15,
	closeButton: false,
	icon: true,
	style: {
		borderRadius: '16px'
	}
}
