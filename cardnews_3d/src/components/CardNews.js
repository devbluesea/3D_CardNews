import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Article from '../articles/Article';
import '../scss/CardNews.scss';

const CardNews = ({ data, sync }) => {

	useEffect(() => {
		gsap.to(".comment", {
			opacity: 1,
			//top: 0,
			padding: "130px 0 0 0",
			scrollTrigger: {
				trigger: ".comment",
				//markers: true,
				start: "0 60%",
				toggleActions: "restart none none reset",
				//scrub: true
			}
		});
	}, []);
	gsap.registerPlugin(ScrollTrigger);

	return (
		<div className="CardNews-template">
			<div>
				<div className="comment">COVID&nbsp;&#45;19</div>
				<div>
					<Article data={data} sync={sync}/>
				</div>
			</div>
		</div>
	);
};

export default CardNews;
