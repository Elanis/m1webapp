import { useLocation, useNavigate } from "react-router";
import View from './view.jsx';

export default function Footer() {
	const navigate = useNavigate();
	const location = useLocation()

	console.log(location);

	return (
		<View navigate={navigate} />
	);
}