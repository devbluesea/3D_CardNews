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
		RNA3D_visible: false,
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
		if (window.pageYOffset > 300) {
			setYcoor({
				...ycoor,
				Covid3D_camera_flag: true
			});
			if (window.pageYOffset > 660) {
				setYcoor({
					...ycoor,
					Covid3D_visible: false,
					RNA3D_visible: true
				});
			}
		}
		else {
			setYcoor({
				...ycoor,
				Covid3D_camera_flag: false,
				Covid3D_visible: true,
				RNA3D_visible: false
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
			<CardNews />
			{console.log(ycoor.Sync)}
		</div>
	);
};

export default Contents;
