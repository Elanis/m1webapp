export default function Blague({ blague, nouvelleBlague }) {
	if (!blague) {
		return null;
	}

	return (
		<div>
			<p>{blague.setup}</p>
			...
			...
			<p>{blague.punchline}</p>
			<input type="button" value="Une nouvelle!" onClick={nouvelleBlague} />
		</div>
	);
}