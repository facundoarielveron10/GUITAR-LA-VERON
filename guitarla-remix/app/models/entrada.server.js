export async function getBlog() {
	const respuesta = await fetch(
		`${process.env.API_URL}/blog?populate=imagen`,
	);
	return await respuesta.json();
}

export async function getEntrada(url) {
	const respuesta = await fetch(
		`${process.env.API_URL}/blog?filters[url]=${url}&populate=imagen`,
	);
	return await respuesta.json();
}
