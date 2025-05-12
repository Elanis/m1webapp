import { useEffect, useState } from "react";
import getMeteo from "../services/getMeteo";

async function getData(setData) {
	setData(await getMeteo());
}

export default function useMeteo() {
	const [meteo, setMeteo] = useState(null);

	useEffect(() => {
		getData(setMeteo);
	}, []);

	return meteo;
}