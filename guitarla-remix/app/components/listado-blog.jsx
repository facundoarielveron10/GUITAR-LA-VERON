import Entrada from './entrada';
const ListadoBlog = ({ blog }) => {
	return (
		<>
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
		</>
	);
};

export default ListadoBlog;
