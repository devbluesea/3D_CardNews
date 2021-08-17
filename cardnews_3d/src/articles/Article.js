import React, { useEffect, forwardRef } from 'react';
import '../scss/Article.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Article = forwardRef(({ caption, scroll }, ref) => {
	useEffect(() => {
		gsap.to(".one",
		{
			opacity: 1,
			top: 0,
			scrollTrigger: {
				trigger: ".one",
				//markers: true
				start: "top center",
				//scrub: true
			}
		});
		gsap.to(".two", {
			opacity: 1,
			top: 0,
			scrollTrigger: {
				trigger: ".two",
				//markers: true
				start: "top center",
				//scrub: true
			}
		});
		gsap.to(".three", {
			opacity: 1,
			top: 0,
			scrollTrigger: {
				trigger: ".three",
				//markers: true
				start: "top center",
				//scrub: true
			}
		});
	}, []);
	gsap.registerPlugin(ScrollTrigger);

	return (
		<div className="Article-template">
			<section>
				<div className="one">
					<div>COVID-19</div>
					<div>
						We are dancing. We are extra dancing. Try hard to achieve succeed. We will not try to go. Try hard succeed. Indeed so. Some women cry. This generator should succeed. This generator should be used and succeed. We will not go. Try hard to achieve everything you can succeed. We are extra cool everyday dancing. We are extra cool everyday dancing. Try hard to achieve everything you can succeed. This generator should be used and succeed. Try hard to achieve everything succeed. This generator should be used and succeed. We will not try to bow and go. We are dancing.
					</div>
				</div><br/>
				<div className="two">
					<div>head2</div>
					<div>
						We are extra cool everyday dancing. This generator should be used and succeed. We will not try to go. We will not try to bow and go. Indeed so. Indeed so. This generator should succeed. Try hard to achieve everything you can succeed. This generator should be used and succeed. Try hard to achieve everything succeed. We will not try to bow and go. We will not try to bow and go. Indeed so. We are dancing. Indeed so. Some women should never cry. Some women cry. We are extra dancing. We are extra cool everyday dancing. We will not try to go. Try hard succeed.
					</div><br/>
				</div>
				<div className="three">
					<div>head3</div>
					<div>
						We are dancing. We are extra dancing. Try hard to achieve succeed. We will not try to go. Try hard succeed. Indeed so. Some women cry. This generator should succeed. This generator should be used and succeed. We will not go. Try hard to achieve everything you can succeed. We are extra cool everyday dancing. We are extra cool everyday dancing. Try hard to achieve everything you can succeed. This generator should be used and succeed. Try hard to achieve everything succeed. This generator should be used and succeed. We will not try to bow and go. We are dancing.
					</div>
				</div><br/>
			</section>
		</div>
	);
});

export default Article;
