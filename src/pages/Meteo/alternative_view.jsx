function formatDate(dateStr) {
	const date = new Date(dateStr);

	return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}

export default function Meteo({ meteo }) {
	if (!meteo) {
		return <p>Loading...</p>;
	}

	const values = [];
	for (let i = 0; i < meteo.hourly.time.length; i++) {
		values.push({
			key: meteo.hourly.time[i],
			date: formatDate(meteo.hourly.time[i]),
			value: meteo.hourly.temperature_2m[i]
		});
	}

	return (
		<div>
			<h1>Météo</h1>
			<table border="1">
				<thead>
					<tr>
						<th>Heure</th>
						<th>Température (°C)</th>
					</tr>
				</thead>
				<tbody>
					{values.map((val) => (
						<tr key={val.key}>
							<td>{val.date}</td>
							<td>{val.value}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}