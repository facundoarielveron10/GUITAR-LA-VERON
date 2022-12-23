import { Link, useLocation } from '@remix-run/react';

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
				className={location.pathname === '/tienda' ? 'activo' : ''}
				to="/tienda"
			>
				Tienda
			</Link>
			<Link
				className={location.pathname === '/blog' ? 'activo' : ''}
				to="/blog"
			>
				Blog
			</Link>
		</nav>
	);
};

export default Navegacion;
