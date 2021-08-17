import React, { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import Article from '../articles/Article';
import '../scss/CardNews.scss';

const CardNews = ({ data }) => {

	//const [ScrollY, setScrollY] = useState(0);  // 스크롤값을 저장하기 위한 상태

	//const handleFollow = () => {
  //  setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
  //}

	//useEffect(() => {
  //  console.log("ScrollY is ", ScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
  //}, [ScrollY])

	//useEffect(() => {
  //  const watch = () => {
  //    window.addEventListener('scroll', handleFollow);
  //  }
  //  watch(); // addEventListener 함수를 실행
	//	console.log("ScrollY is ", ScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
  //  return () => {
  //    window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
  //  }
  //}, [ScrollY])

	//useEffect(() => {
	//	window.addEventListener('scroll', throttle(handleScroll, 30));
	//	return () => {
	//		window.removeEventListener('scroll', throttle(handleScroll, 30)); //clean up
	//	};
	//}, []);

	//const handleScroll = () => {
	//	console.log(window.pageYOffset);
	//};

	return (
		<div className="CardNews-template">
			<div className="wrapper" >
				<Article data={data}/>
			</div>
		</div>
	);
};

export default CardNews;
