import React, {useEffect, useState} from 'react';
import { throttle } from 'lodash';
import CardNews from './CardNews';
//import First from './First';
import Covid3D from './Covid3D';
import RNA3D from './RNA3D';

const Contents = () => {
	const [ycoor, setYcoor] = useState({
		Covid3D_camera_flag: false,
		Covid3D_visible: true,
		Antibody_visible: false,
		Article_one: true,
		Article_two: false,
		Article_three: false,
		Sync: true
	});

	useEffect(() => {
		window.addEventListener('scroll', throttle(handleScroll, 300));
		return () => {
			window.removeEventListener('scroll', throttle(handleScroll, 300)); //clean up
		};
	}, []);

	const handleScroll = () => {
		console.log(window.pageYOffset);
		if (window.pageYOffset > 500) {
			setYcoor({
				...ycoor,
				Covid3D_camera_flag: true,
				Article_one: false,
				Article_two: true
			});
			if (window.pageYOffset > 900) {
				setYcoor({
					...ycoor,
					Covid3D_visible: false,
					Antibody_visible: true,
					Article_two: false,
					Article_three: true
				});
			}
		}
		else {
			setYcoor({
				...ycoor,
				Covid3D_camera_flag: false,
				Covid3D_visible: true,
				Antibody_visible: false
			});
		}
		//if (window.pageYOffset > 500) {
		//	setYcoor({
		//		...ycoor,
		//		Covid3D_visible: false
		//	});
		//}
		//else {
		//	setYcoor({
		//		...ycoor,
		//		Covid3D_visible: true
		//	});
		//}
	};

	const handleSync = (data) => {
		setYcoor({
			...ycoor,
			Sync: data
		})
	}

	return (
		<div>
			{/*<button onClick={() => {handleSync(!ycoor.Sync)}}>Sync</button>*/}
			<Covid3D data={ycoor} />
			<RNA3D data={ycoor}/>
			{/*<First flag={ycoor} />*/}
			<CardNews data={ycoor}/>
			{/*{console.log(ycoor.Sync)}*/}
		</div>
	);
};

export default Contents;
