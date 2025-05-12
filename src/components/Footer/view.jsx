export default function Footer({ navigate }) {
	return (
		<div>
			<p>Footer</p>
			<input
				type="button"
				onClick={() => navigate('test')}
				value="Go!"
			/>
		</div>
	);
}