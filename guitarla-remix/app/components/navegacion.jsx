import { Link, useLocation } from '@remix-run/react';
import imagen from '-/img/carrito.png';

const Navegacion = () => {
	const location = useLocation();

	return (
		<nav className="navegacion">
			<Link className={location.pathname === '/' ? 'activo' : ''} to="/">
				Inicio
			</Link>
			<Link
				className={location.pathname === '/nosotros' ? 'activo' : ''}
				to="/nosotros"
			>
				Nosotros
			</Link>
			<Link
				className={location.pathname === '/guitarras' ? 'activo' : ''}
				to="/guitarras"
			>
				Tienda
			</Link>
			<Link
				className={location.pathname === '/blog' ? 'activo' : ''}
				to="/blog"
			>
				Blog
			</Link>
			<Link to="/carrito">
				<img src={imagen} alt="Carrito de Compras" />
			</Link>
		</nav>
	);
};

export default Navegacion;
