import React, { useEffect } from 'react';
import '../scss/Article.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Article = ({ data, sync }) => {
	useEffect(() => {
		gsap.to(".one", {
			opacity: 1,
			//top: 0,
			scrollTrigger: {
				trigger: ".one",
				//markers: true,
				start: "0 60%",
				toggleActions: "restart none none reset",
				//scrub: true
			}
		});
		gsap.to(".two", {
			opacity: 1,
			//top: 0,
			scrollTrigger: {
				trigger: ".two",
				//markers: true,
				start: "0 60%",
				toggleActions: "restart none none reset",
				//scrub: true
			}
		});
		gsap.to(".three", {
			opacity: 1,
			//top: 0,
			scrollTrigger: {
				trigger: ".three",
				//markers: true,
				start: "0 60%",
				toggleActions: "restart none none reset",
				//scrub: true
			}
		});
	}, []);
	gsap.registerPlugin(ScrollTrigger);

	return (
		<div className="Article-template">
			{/*<section className="card-section-one">*/}
				<div className="one" data-onevisible={data.Article_one}>
					<div className="wrapper">
						<div className="haeder">카드뉴스 </div>
						<div><button className="sync-btns" onClick={() => sync(!data.Sync)}>Sync</button></div>
					</div>
					<div className="body">
						generator should succeed. This generator should be used and succeed. We will not go. Try hard to achieve everything you can succeed. We are extra cool everyday dancing. We are extra cool everyday dancing. This generator should be used and succeed. Try hard to achieve everything We will not try to bow and go. We are dancing.
					</div>
				</div>
				<div className="two" data-twovisible={data.Article_two}>
					<div className="wrapper">
						<div className="haeder">바이러스 구조</div>
						<div><button className="sync-btns" onClick={() => sync(!data.Sync)}>Sync</button></div>
					</div>
					<div className="body">
						This generator should be used and succeed. Try hard to achieve everything succeed. We will not try to bow and go. We will not try to bow and go. Indeed so. We are dancing. Indeed so. Some women should never cry. Some women cry. We are extra dancing. We are extra cool everyday dancing. We will not try to go. Try hard succeed.
					</div>
				</div>
				<div className="three" data-threevisible={data.Article_three}>
					<div className="wrapper">
						<div className="haeder">항체의 역할</div>
						<div><button className="sync-btns" onClick={() => sync(!data.Sync)}>Sync</button></div>
					</div>
					<div className="body">
						Try hard to achieve everything succeed. We will not try to bow and go. We will not try to bow and go. Indeed so. We are dancing. Indeed so. Some women should never cry. Some women cry. We are extra dancing. We are extra cool everyday dancing. We will not try to go. Try hard succeed.
					</div>
				</div>
			{/*</section>*/}
		</div>
	);
};

export default Article;
