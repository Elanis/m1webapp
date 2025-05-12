export default async function postAPI() {
	const token = 'test';

	const res = await fetch(
		'https://example.tld', {
		method: 'POST',
		headers: {
			'Authorization': 'Bearer ' + token
		}
	});

	// res de type Response: https://developer.mozilla.org/en-US/docs/Web/API/Response
	if (!res.ok) {
		throw new Error('Y\'a un probleme!');
	}
}