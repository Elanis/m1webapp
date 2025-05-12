import { useEffect, useState } from "react";
import getBlague from "../services/getBlague";

async function getData(setData) {
	setData(await getBlague());
}

export default function useBlague() {
	const [blague, setBlague] = useState(null);

	useEffect(() => {
		getData(setBlague);
	}, []);

	return { blague, nouvelleBlague: () => getData(setBlague) };
}