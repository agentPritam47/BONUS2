import { Canvas } from "@react-three/fiber";
import React from "react";
import Experience from "./Experience";
import {
  Environment,
  OrbitControls,
  Stage,
  Stars,
  useTexture,
} from "@react-three/drei";
import {
  Bloom,
  BrightnessContrast,
  EffectComposer,
} from "@react-three/postprocessing";

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 3, 7], fov: 30 }}>
      <color attach={"background"} args={["#0e0e0e"]} />
      <Experience />
      <OrbitControls />
      <Environment preset="warehouse" environmentIntensity={0.6} />
      <directionalLight position={[5, 2, 1]} intensity={10} color={"#055605"} />
      {/* <directionalLight position={[-5, -2, 1]} intensity={10} color={"#055605"} /> */}
      <directionalLight
        position={[5, -2, 1]}
        intensity={10}
        color={"#055605"}
      />
      <ambientLight intensity={0.5} />
      <EffectComposer disableNormalPass>
        <Bloom
          luminanceThreshold={0.1}
          mipmapBlur
          luminanceSmoothing={1}
          intensity={1.5}
        />
        <BrightnessContrast brightness={0} contrast={0.5} />
      </EffectComposer>

        <fog attach={"fog"} args={["#0e0e0e", 10, 50]} />
    </Canvas>
  );
};

export default Scene;
