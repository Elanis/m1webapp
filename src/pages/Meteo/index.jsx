import useMeteo from '../../hooks/useMeteo.js';
import View from './view.jsx';

export default function Meteo() {
	const meteo = useMeteo();

	return (
		<View meteo={meteo} />
	);
}