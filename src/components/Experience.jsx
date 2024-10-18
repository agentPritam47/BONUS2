import React, { useEffect, useRef } from "react";
import { Model } from "./Model";
import {
  Billboard,
  MeshReflectorMaterial,
  MeshTransmissionMaterial,
  MeshWobbleMaterial,
  Point,
  Text,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import gsap, { Expo } from "gsap";
import { Tree } from "./Tree";

const Experience = () => {
  const japan = useTexture("/japan.png");
  const stone = useTexture("/stone.jpg");
  const j = useRef();
  const rot = [
    { x: -2, y: 0, z: 0 },
    { x: 0, y: 0, z: -1.57 },
    { x: 2, y: 0, z: 0 },
    { x: 0, y: 0, z: 1.57 },

    // {x: -2, y: 0, z:0},
    // {x: -2, y: 0, z:0},
  ];
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(j.current.rotation, {
      z: `+=${Math.PI / 2}`,
      duration: 3,
      ease: Expo.easeInOut,
    });
    tl.to(j.current.rotation, {
      x: `+=${Math.PI / 2}`,
      duration: 3,
    });
    tl.to(j.current.rotation, {
      z: `+=${-Math.PI / 2}`,
      duration: 3,
      ease: Expo.easeInOut,
    });
    tl.to(j.current.rotation, {
      y: `+=${-Math.PI / 2}`,
      duration: 3,
      ease: Expo.easeInOut,
    });
    tl.to(j.current.rotation, {
      x: `+=${-Math.PI / 2}`,
      duration: 3,
      ease: Expo.easeInOut,
    });
    tl.to(j.current.rotation, {
      y: `+=${Math.PI / 2}`,
      duration: 3,
      ease: Expo.easeInOut,
    });
  });

  //   useFrame(({ clock }) => {
  //     const seconds = parseInt(clock.getElapsedTime());
  //     const target = rot[seconds % rot.length];
  //     j.current.rotation.x = THREE.MathUtils.lerp(
  //       j.current.rotation.x,
  //       target.x,
  //       0.05
  //     );
  //     j.current.rotation.y = THREE.MathUtils.lerp(
  //       j.current.rotation.y,
  //       target.y,
  //       0.05
  //     );
  //     j.current.rotation.z = THREE.MathUtils.lerp(
  //       j.current.rotation.z,
  //       target.z,
  //       0.05
  //     );
  //   });
  //   useEffect(() => {
  //     j.current.material.color.multiplyScalar(0.5);
  //   });

  return (
    <>
      <Model position-y={-0.2} />
      <Billboard>
        <Text position={[0, 0.5, -1]} fontSize={2} color={"#c9ffda"}>
          平
        </Text>
        <Text position={[0, -0.7, -1]} fontSize={2} color={"#c9ffda"}>
          和
        </Text>

        <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-1.8}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={80}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#050505"
            metalness={0.5}
          />
        </mesh>

        <group position={[3, -1.3, -3]}>
          <mesh scale={1} position-y={-1}>
            <dodecahedronGeometry />
            <meshPhysicalMaterial map={stone}  roughness={0} metalness={.6} />
          </mesh>
          <mesh scale={1} position-x={1.5} position-y={-1.5}>
            <tetrahedronGeometry args={[1.5,2]} />
            <meshPhysicalMaterial map={stone} roughness={1} metalness={.6} />
          </mesh>
          <Tree scale={10} position={[1,-.5,-1]} />
          <directionalLight position={[1,3,3]} intensity={2} />
        </group>
      </Billboard>

      <group ref={j}>
        <mesh position={[-1.5, 0, 0]} rotation-y={1.57}>
          <planeGeometry args={[0.5, 1]} />
          <meshStandardMaterial
            color={"white"}
            side={THREE.DoubleSide}
            backside
            roughness={0}
            thickness={3}
            emissive={"white"}
            emissiveIntensity={1}
          />
        </mesh>
        <mesh position={[1.5, 0, 0]} rotation-y={1.57}>
          <planeGeometry args={[0.5, 1]} />
          <meshStandardMaterial
            color={"white"}
            side={THREE.DoubleSide}
            backside
            roughness={0}
            thickness={3}
            emissive={"white"}
            emissiveIntensity={1}
          />
        </mesh>
      </group>
    </>
  );
};

export default Experience;
