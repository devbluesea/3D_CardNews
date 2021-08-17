import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three'
import { Canvas, useFrame, extend, useThree, } from 'react-three-fiber';
import { useSpring, a } from '@react-spring/three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from 'react'

import '../scss/SpaceShip.scss';

const Controls = () => {
	const orbitRef = useRef();
	const { camera, gl} = useThree();

	useFrame(() => {
		orbitRef.current.update()
	})

	return (
		<orbitControls args={[camera, gl.domElement]}
									ref={orbitRef}
									autoRotate //밑에 meshRef 효과
									//maxPolarAngle = {Math.PI / 2 }
									//minPolarAngle = {Math.PI / 3}
									/>
	);
}

const Rocket = () => {
	const [model, setModel] = useState();
	useEffect(() => {
		new GLTFLoader().load('/3d_file/scene.gltf', setModel);
	},[])

	return (
		model ? <primitive object={model.scene} >
		</primitive> : null
	);
}


const SpaceShip = () => {

	//console.log(model);
	return (
		<div className="SpaceShip-template">
			<div>
				<div className="headline">Hello<br/>DongA</div>
				<div className="canvas">
					<Canvas camera={{ position: [0, 0, 5] }} onCreated={({gl}) => {
						gl.shadowMap.enabled = true
						gl.shadowMap.type = THREE.PCFSoftShadowMap }}>
						<Suspense fallback={null}>
						{/*<fog attach="fog" args={["white", 5, 20]}/>*/}
						<ambientLight intensity={0.2}/>
						<spotLight position={[15, 20, 5]} penumbra={1} />
						<Controls/>
						<Rocket/>
					</Suspense>
					</Canvas>
				</div>
			</div>
		</div>
	);
}

export default SpaceShip;
