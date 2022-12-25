import { useLoaderData } from '@remix-run/react';
import { getBlog } from '~/models/entrada.server';
import ListadoBlog from '~/components/listado-blog';

export function meta() {
	return {
		title: 'GuitarLA - Nuestro Blog',
	};
}

export async function loader() {
	const blog = await getBlog();
	return blog.data;
}

const Blog = () => {
	const blog = useLoaderData();

	return <ListadoBlog blog={blog} />;
};

export default Blog;
