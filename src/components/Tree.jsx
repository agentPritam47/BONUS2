import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Tree(props) {
  const { nodes, materials } = useGLTF('/skeletal_tree_free.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skeletal_Tree_FREE_s1_0.geometry}
        material={materials.material}
        scale={0.01}
      >
        <meshStandardMaterial emissive={"lightblue"} emissiveIntensity={.2} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/skeletal_tree_free.glb')