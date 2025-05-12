import { Link } from "react-router";
import View from './view.jsx';

export default function Header(props) {
	return (
		<View {...props} />
		// === <View name={props.name} />
	);
}
