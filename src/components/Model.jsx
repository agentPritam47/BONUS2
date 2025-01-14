/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: nip88nip (https://sketchfab.com/nip88nip)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/the-hornet-military-helmet-1ea96998b36b426b9ae3a3eb994c9e89
Title: The Hornet (Military Helmet)
*/

import React, { useEffect, useRef } from "react";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const { nodes, materials } = useGLTF("/the_hornet_military_helmet.glb");
  const groupRef = useRef();
  useFrame((state) => {
    // Get the current screen width
    const screenWidth = window.innerWidth;
    
    // Only apply the animation if the screen width is larger than 1024px
    if (screenWidth > 1024) {
      const { x, y } = state.mouse; // Normalized mouse position from -1 to 1
      if (groupRef.current) {
        groupRef.current.rotation.y = x * 0.5; // Rotate left and right
        groupRef.current.rotation.x = -y * 0.5; // Rotate up and down
      }
    }
  });
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials["03___Default"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials["03___Default"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials["03___Default"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_3.geometry}
            material={materials["03___Default"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_4.geometry}
            material={materials["03___Default"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_5.geometry}
            material={materials["03___Default"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_6.geometry}
            material={materials["03___Default"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_7.geometry}
            material={materials["03___Default"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_8.geometry}
            material={materials["03___Default"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_9.geometry}
            material={materials["03___Default"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_10.geometry}
            material={materials["03___Default"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_11.geometry}
            material={materials["03___Default"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_12.geometry}
            material={materials["03___Default"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_13.geometry}
            material={materials["03___Default"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_14.geometry}
            material={materials["03___Default"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_15.geometry}
            material={materials["03___Default"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_16.geometry}
            material={materials["03___Default"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_17.geometry}
            material={materials.crease}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_18.geometry}
            material={materials.crease}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_19.geometry}
            material={materials.crease}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_20.geometry}
            material={materials.crease}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_21.geometry}
            material={materials.crease}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_22.geometry}
            material={materials.crease}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_23.geometry}
            material={materials.crease}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_24.geometry}
            material={materials.crease}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_25.geometry}
            material={materials.crease}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_26.geometry}
            material={materials.crease}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_27.geometry}
            material={materials.crease}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_28.geometry}
            material={materials.crease}
          >
            <MeshTransmissionMaterial
              color={"darkgreen"}
              roughness={0.1}
              ior={0.5}
              thickness={2}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_29.geometry}
            material={materials.crease}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/the_hornet_military_helmet.glb");
