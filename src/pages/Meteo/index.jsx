import { useEffect, useState } from 'react';
import View from './view.jsx';

async function getData(setMeteo) {
	const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=50.9&longitude=1.86&hourly=temperature_2m');
	const data = await res.json();
	
	setMeteo(data);
}

function useMeteo() {
	const [meteo, setMeteo] = useState(null);

	useEffect(() => {
		getData(setMeteo);
	}, []);

	return meteo;
}

export default function Meteo() {
	const meteo = useMeteo();

	return (
		<View meteo={meteo} />
	);
}