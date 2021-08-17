import React, { useState, useRef } from 'react';
import * as THREE from 'three'
import { Canvas, useFrame, extend, useThree } from 'react-three-fiber';
import { useSpring, a } from '@react-spring/three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import '../scss/First.scss';

extend({ OrbitControls });

const Controls = () => {
	const orbitRef = useRef();
	const { camera, gl} = useThree();

	useFrame(() => {
		orbitRef.current.update()
	})

	return (
		<orbitControls args={[camera, gl.domElement]}
									ref={orbitRef}
									//autoRotate //밑에 meshRef 효과
									//maxPolarAngle = {Math.PI / 2 }
									//minPolarAngle = {Math.PI / 3}
									/>
	);
}

const Plane = () => {
	return (
		<mesh rotation={[-Math.PI / 2, 0, 0]}
					position={[0, -0.5, 0]}
					receiveShadow>
			<planeBufferGeometry attach="geometry" args={[100, 100]}/>
			<meshPhysicalMaterial attach="material" color="coral"/>;
		</mesh>
	);
}

const Box = ({data}) => {
	//const meshRef = useRef();
	const vec = new THREE.Vector3()
	const [hovered, setHovered] = useState(false);
	const [active, setActive] = useState(false);
	const props = useSpring({
		//scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
		color: hovered ? "blue" : "gray"
	})

	//useFrame(() => {
	//	meshRef.current.rotation.y += 0.005
	//})
	useFrame((state) => {
    const step = 0.1
    state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, active ? 10 : 42, step)
    state.camera.position.lerp(vec.set(data ? 25 : 10, data ? 1 : 5, data ? 0 : 10), step)
    state.camera.lookAt(0, 0, 0)
    state.camera.updateProjectionMatrix()
    //light.current.position.lerp(vec.set(active ? 4 : 0, active ? 3 : 8, active ? 3 : 5), step)
  })

	return (
		<a.mesh
					onPointerOver={() => setHovered(true)}
					onPointerOut={() => setHovered(false)}
					onClick={() => setActive(!active)}
					scale={props.scale}
					//ref={meshRef}
					castShadow
					>
			<ambientLight/>
			<spotLight position={[0, 5, 10]} penumbra={1} castShadow/>
			<boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
			<a.meshPhysicalMaterial attach="material" color={props.color}/>;
		</a.mesh>
	);
};

const First = ({flag}) => {
	return (
		<div className="First-template">
			<div className="Canvas">
				<Canvas camera={{ position: [0, 0, 5] }} onCreated={({gl}) => {
					gl.shadowMap.enabled = true
					gl.shadowMap.type = THREE.PCFSoftShadowMap }}>
					{/*<fog attach="fog" args={["white", 5, 20]}/>*/}
					<Controls/>
					<Box data={flag}/>
					<Plane/>
				</Canvas>
			</div>
		</div>
	);
};

export default First;
