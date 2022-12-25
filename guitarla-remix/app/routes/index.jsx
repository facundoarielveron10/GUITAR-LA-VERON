import { useLoaderData } from '@remix-run/react';
import { getGuitarras } from '~/models/guitarras.server';
import { getBlog } from '~/models/entrada.server';
import { getCurso } from '~/models/curso.server';
import stylesGuitarras from '~/styles/guitarras.css';
import stylesBlog from '~/styles/blog.css';
import stylesCurso from '~/styles/curso.css';
import ListadoGuitarras from '~/components/listado-guitarras';
import Curso from '~/components/curso';
import ListadoBlog from '~/components/listado-blog';

export function meta() {}

export function links() {
	return [
		{
			rel: 'stylesheet',
			href: stylesGuitarras,
		},
		{
			rel: 'stylesheet',
			href: stylesBlog,
		},
		{
			rel: 'stylesheet',
			href: stylesCurso,
		},
	];
}

export async function loader() {
	const [guitarras, blog, curso] = await Promise.all([
		getGuitarras(),
		getBlog(),
		getCurso(),
	]);

	return {
		guitarras: guitarras.data,
		blog: blog.data,
		curso: curso.data,
	};
}

const Index = () => {
	const { guitarras, blog, curso } = useLoaderData();

	return (
		<>
			<main className="contenedor">
				<ListadoGuitarras guitarras={guitarras} />
			</main>

			<Curso curso={curso.attributes} />

			<section className="contenedor">
				<ListadoBlog blog={blog} />
			</section>
		</>
	);
};

export default Index;
