function formatDate(dateStr) {
	const date = new Date(dateStr);

	return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}

export default function Meteo({ meteo }) {
	if (!meteo) {
		return <p>Loading...</p>;
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
					{meteo.hourly.time.map((time, index) => (
						<tr key={time}>
							<td>{formatDate(time)}</td>
							<td>{meteo.hourly.temperature_2m[index]}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}