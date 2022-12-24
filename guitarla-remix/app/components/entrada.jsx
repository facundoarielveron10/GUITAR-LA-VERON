import { Link } from '@remix-run/react';
import { formatearFecha } from '~/utils/helpers';

const Entrada = ({ entrada }) => {
	const { titulo, contenido, imagen, url, publishedAt } = entrada;

	return (
		<article className="entrada">
			<img
				className="imagen"
				src={imagen.data.attributes.formats.medium.url}
				alt={titulo}
			/>
			<div className="contenido">
				<h3>{titulo}</h3>
				<p className="fecha">{formatearFecha(publishedAt)}</p>
				<p className="resumen">{contenido}</p>
				<Link className="enlace" to={`/entradas/${url}`}>
					Leer Entrada
				</Link>
			</div>
		</article>
	);
};

export default Entrada;
