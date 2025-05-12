import useBlague from '../../hooks/useBlague.js';
import View from './view.jsx';

export default function Blague() {
	const {
		blague,
		nouvelleBlague
	} = useBlague();

	return (
		<View blague={blague} nouvelleBlague={nouvelleBlague} />
	);
}