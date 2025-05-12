import { Link } from "react-router";

export default function Header({ changeLanguage, name, t }) {
	return (
		<div>
			<p>Header - Coucou {name}</p>
			<ul>
				<li><Link to="/">{t('menu.home')}</Link></li>
				<li><Link to="/contact">{t('menu.contact')}</Link></li>
				<li><Link to="/meteo">{t('menu.meteo')}</Link></li>
				<li>
					<input
						type="button"
						onClick={changeLanguage}
						value={t('change-language')}
					/>
				</li>
			</ul>
		</div>
	);
}