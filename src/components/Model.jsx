import {
  useAnimations,
  useGLTF,
  useScroll,
  useTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Model() {
  const group = useRef(null); // Reference to the group containing the model
  const tl = useRef(null); // GSAP timeline reference
  const { nodes, materials, animations, scene } = useGLTF(
    "./robot_playground.glb"
  );
  const { actions } = useAnimations(animations, scene); // Animations from the GLTF file
  const scroll = useScroll(); // Scroll offset from @react-three/drei

  const backgroundTexture = useTexture("./back3.jpeg");

  // Set up state for window dimensions
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Update window size on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Play the main animation when the model is loaded
  useEffect(() => {
    if (actions && actions["Experiment"]) {
      actions["Experiment"].play(); // Start the animation
    }
  }, [actions]);

  // Set up GSAP timeline for scroll animations
  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // Add rotation animation based on scroll
    // tl.current.to(
    //   group.current.rotation,
    //   { duration: 1, y: -Math.PI / 4 }, // Rotate -45 degrees along Y-axis
    //   0
    // );
    // tl.current.to(
    //   group.current.rotation,
    //   { duration: 1, y: Math.PI / 4 }, // Rotate 45 degrees along Y-axis
    //   1
    // );

    // Add lateral movement (X-axis) based on scroll
    tl.current.to(
      group.current.position,
      { duration: 1, x: -2 }, // Move 2 units along X-axis
      0
    );
    tl.current.to(
      group.current.position,
      { duration: 1, x: 2 }, // Move -2 units along X-axis
      1
    );

    // Add scaling effect
    tl.current.to(
      group.current.scale,
      { duration: 1, x: 1.5, y: 1.5, z: 1.5 }, // Increase scale
      0
    );
    tl.current.to(
      group.current.scale,
      { duration: 1, x: 1, y: 1, z: 1 }, // Reset scale
      1
    );
  }, []);

  // Synchronize GSAP timeline with scroll progress
  useFrame(() => {
    if (tl.current) {
      tl.current.seek(scroll.offset * tl.current.duration());
    }

    // Sync the "Experiment" animation with scroll
    if (actions["Experiment"]) {
      actions["Experiment"].time =
        (actions["Experiment"].getClip().duration * scroll.offset) / 1.5;
    }
  });

  return (
    <>
      <mesh position={[-20, 1, -60]} scale={[0.2, 0.3, 0.2]} rotation={[0, 0.4, 0]}>
        <planeGeometry args={[windowSize.width, windowSize.height]} />
        <meshBasicMaterial map={backgroundTexture} />
      </mesh>

      <group ref={group} position={[2, -1, 0]}>
        <primitive object={scene} />
      </group>
    </>
  );
}
