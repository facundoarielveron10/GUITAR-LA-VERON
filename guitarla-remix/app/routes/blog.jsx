import { useLoaderData } from '@remix-run/react';
import Entrada from '~/components/entrada';
import { getBlog } from '~/models/entrada.server';
import styles from '~/styles/blog.css';

export function meta() {
	return {
		title: 'GuitarLA - Nuestro Blog',
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

export async function loader() {
	const blog = await getBlog();
	return blog.data;
}

const Blog = () => {
	const blog = useLoaderData();

	return (
		<main className="contenedor">
			<h2 className="heading">Blog</h2>
			{blog?.length && (
				<div className="blog">
					{blog?.map(entrada => (
						<Entrada
							key={entrada?.id}
							entrada={entrada.attributes}
						/>
					))}
				</div>
			)}
		</main>
	);
};

export default Blog;
