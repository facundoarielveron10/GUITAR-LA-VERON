import { useLoaderData } from '@remix-run/react';
import { getEntrada } from '~/models/entrada.server';
import styles from '~/styles/blog.css';
import { formatearFecha } from '~/utils/helpers';

export async function loader({ params }) {
	const { entradaUrl } = params;

	const entrada = await getEntrada(entradaUrl);

	if (entrada.data.length === 0) {
		throw new Response('', {
			status: 404,
			statusText: 'Entrada No Encontrada',
		});
	}

	return entrada;
}

export function meta({ data }) {
	if (!data) {
		return {
			title: 'GuitarLA - Entrada no encontrada',
		};
	}
	return {
		title: `GuitarLA - ${data.data[0].attributes.titulo}`,
	};
}

export function links() {
	return [
		{
			rel: 'stylesheet',
			href: styles,
		},
	];
}

const Entrada = () => {
	const entrada = useLoaderData();

	const { titulo, contenido, imagen, publishedAt } =
		entrada?.data[0]?.attributes;

	return (
		<article className="contenedor entrada mt-3">
			<img
				className="imagen"
				src={imagen?.data?.attributes?.url}
				alt={titulo}
			/>
			<div className="contenido">
				<h3>{titulo}</h3>
				<p className="fecha">{formatearFecha(publishedAt)}</p>
				<p className="texto">{contenido}</p>
			</div>
		</article>
	);
};

export default Entrada;
