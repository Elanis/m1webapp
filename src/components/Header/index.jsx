import { withTranslation } from 'react-i18next';
import i18n from "../../i18n";
import View from './view.jsx';

const TranslatedView = withTranslation()(View);

function changeLanguage() {
	if (i18n.language.startsWith('fr')) {
		i18n.changeLanguage('en');
	} else {
		i18n.changeLanguage('fr');
	}
}

export default function Header(props) {
	return (
		<TranslatedView {...props} changeLanguage={changeLanguage} />
		// === <View name={props.name} changeLanguage={changeLanguage} />
	);
}
