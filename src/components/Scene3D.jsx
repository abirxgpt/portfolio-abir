import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Icosahedron, Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const RotatingCore = (props) => {
    const ref = useRef();
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });
    return (
        <group rotation={[0, 0, Math.PI / 4]} {...props}>
            <Icosahedron args={[1, 0]} ref={ref} position={[0, 0, 0]} scale={2.5}>
                <meshBasicMaterial color="#64ffda" wireframe />
            </Icosahedron>
        </group>
    );
};

const Stars = (props) => {
    const ref = useRef();
    const [sphere] = React.useState(() => random.inSphere(new Float32Array(5000), { radius: 10 })); // Reduced count for performance
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });
    return (
        <group rotation={[0, 0, Math.PI / 4]} {...props}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#8b5cf6"
                    size={0.02}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const Scene3D = () => {
    return (
        <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', zIndex: -1, opacity: 0.6 }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <RotatingCore />
                <Stars />
            </Canvas>
        </div>
    );
};

export default Scene3D;
