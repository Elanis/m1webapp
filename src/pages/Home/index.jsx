import Counter from "../../components/Counter";

export default function Home() {
	const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	const words = text.split(' ');

	/// 1
	/*const items = [];
	for (const word of words) {
		items.push(<li>{word}</li>);
	}*/
	/// 2
	/*const items = words.map((word) => <li>{word}</li>);

	return (
		<ul>{items}</ul>
	);*/

	return (
		<>
			<Counter />
			<ul>{words.map((word, index) => <li key={index}>{word}</li>)}</ul>
		</>
	);
}