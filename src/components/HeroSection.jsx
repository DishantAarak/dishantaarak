import React, { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere, OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import Scene from "./Scene";
import Scene2 from "./Scene2";

const AnimatedSphere = () => {
  const sphereRef = useRef();

  useFrame(({ mouse }) => {
    sphereRef.current.position.x = mouse.x * 2;
    sphereRef.current.position.y = mouse.y * -2;
  });

  return (
    <Sphere ref={sphereRef} args={[1, 64, 64]} scale={2}>
      <meshStandardMaterial color="#61dafb" />
    </Sphere>
  );
};



const HeroSection = () => {

    
  return (
    <div className="h-screen bg-black relative">
      <Scene />
     </div>
  );
};

export default HeroSection;
