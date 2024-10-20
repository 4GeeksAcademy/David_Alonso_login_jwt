import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const Navbar = () => {

	const navigate = useNavigate()

	const { store, actions } = useContext(Context);
	function handleLogout() {
		actions.logout()
		navigate('/')

	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">

				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Ir al contexto</button>
					</Link>
					<div>
						{store.auth === true ? <button className="btn btn-primary" onClick={() => handleLogout()}>Logout</button> : ''}
					</div>


				</div>
			</div>
		</nav>
	);
};
