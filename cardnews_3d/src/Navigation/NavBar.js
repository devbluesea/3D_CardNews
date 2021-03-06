import React from 'react';
import '../scss/NavBar.scss';
import logo from '../CardNews3D_logo.svg';
import hamberger from '../Menus.svg';

const NavBar = () => {

	const handleClick = () => {
		window.location.replace("/");
	}

	return (
		<div className = "NavBar-Template">
			<div className = "Wrapper">
				<img className = "Logo" onClick={handleClick} src={logo} alt = "logo"></img>
				<img className = "Menus-pictogram" src={hamberger} alt="hamberger"></img>
				<div className="Menu">
					<div>Headline</div>
					<div>Science</div>
					<div>Engineering</div>
					<div>History</div>
					<div>Find</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
