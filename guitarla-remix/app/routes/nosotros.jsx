import imagen from '-/img/nosotros.jpg';
import styles from '~/styles/nosotros.css';

export function meta() {
	return {
		title: 'GuitarLA - Sobre Nosotros',
	};
}

export function links() {
	return [
		{
			rel: 'stylesheet',
			href: styles,
		},
		{
			rel: 'preload',
			href: imagen,
			as: 'image',
		},
	];
}

const Nosotros = () => {
	return (
		<main className="nosotros contenedor">
			<h2 className="heading">Nosotros</h2>

			<div className="contenido">
				<img src={imagen} alt="Nosotros" />

				<div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Rerum quasi ratione asperiores eligendi voluptates
						dolores assumenda, et amet vitae porro maiores sequi
						dignissimos perferendis voluptas autem! Quo enim
						perferendis cumque.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Rerum quasi ratione asperiores eligendi voluptates
						dolores assumenda, et amet vitae porro maiores sequi
						dignissimos perferendis voluptas autem! Quo enim
						perferendis cumque.
					</p>
				</div>
			</div>
		</main>
	);
};

export default Nosotros;
