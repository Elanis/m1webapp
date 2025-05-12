import { useTranslation } from "react-i18next";

export default function Footer({ navigate }) {
	const { t } = useTranslation();

	return (
		<div>
			<p>{t("footer-title")}</p>
			<input
				type="button"
				onClick={() => navigate('test')}
				value="Go!"
			/>
		</div>
	);
}