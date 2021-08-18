import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three'
import { Canvas, useFrame, extend, useThree } from 'react-three-fiber';
import { useSpring } from '@react-spring/three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import '../scss/Covid3D.scss';

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

const Model = ({data}) => {
	const vec = new THREE.Vector3()
	const [hovered, setHovered] = useState(false);
	const [active, setActive] = useState(false);
	const props = useSpring({
		color: hovered ? "blue" : "gray"
	})

	useFrame((state) => {
    const step = 0.1
    state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, active ? 10 : 50, step)
		if (data.Sync === true) {
			state.camera.position.lerp(vec.set(data.Covid3D_camera_flag ? 150 : 20, data.Covid3D_camera_flag ? 150 : 10, data.Covid3D_camera_flag ? 150 : 8), step)
		}
		state.camera.lookAt(data.Covid3D_camera_flag ? 0 : 0, data.Covid3D_camera_flag ? 100 : -0.2, data.Covid3D_camera_flag ? 50 : 0)
    state.camera.updateProjectionMatrix()
    //light.current.position.lerp(vec.set(active ? 4 : 0, active ? 3 : 8, active ? 3 : 5), step)
  })

	const [model, setModel] = useState();
	useEffect(() => {
		new GLTFLoader().load('/3d_file/antibody/scene.gltf', setModel); //50, (10,5,10), (0, -10, 0)
		//new GLTFLoader().load('/3d_file/antibodies_ige/scene.gltf', setModel); //12, (10, 5, 10), (0, -0.2, 0)
		//new GLTFLoader().load('/3d_file/influenza_virus/scene.gltf', setModel); //70, (50, -50, 150), (0, -300, 0)
		//new GLTFLoader().load('/3d_file/lowpoly_coronavir/scene.gltf', setModel); //42, (300, 300, 300), (0, -120, 0)
	},[])

	return (
		<mesh onPointerOver={() => setHovered(true)}
					onPointerOut={() => setHovered(false)}
					onDoubleClick={() => setActive(!active)}
					scale={props.scale}
					castShadow>
			{model ? <primitive object={model.scene} >
			</primitive> : null}
		</mesh>
	);
}

const RNA3D = ({data}) => {
	return (
		<div className="Covid3D-template" data-visible={data.Antibody_visible}>
				<div className="canvas">
					<Canvas camera={{ position: [150, 150, 150] }} onCreated={({gl}) => {
						gl.shadowMap.enabled = true
						gl.shadowMap.type = THREE.PCFSoftShadowMap }}>
						{/*<fog attach="fog" args={["white", 5, 20]}/>*/}
						<ambientLight intensity={0.3}/>
						<spotLight position={[120, 120, 120]} penumbra={1} />
						<Controls/>
						<Model data={data}/>
					</Canvas>
				</div>
		</div>
	);
};

export default RNA3D;
