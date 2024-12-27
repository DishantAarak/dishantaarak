import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame, extend, Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import "tailwindcss/tailwind.css";

useGLTF.preload("/robot_playground.glb");
extend({ TextGeometry });

export default function Model() {
  const group = useRef(null);
  const { nodes, materials, animations, scene } = useGLTF("/robot_playground.glb");
  const { actions } = useAnimations(animations, scene);
  const scroll = useScroll();
  const [showAboutUs, setShowAboutUs] = useState(false);

  useEffect(() => {
    if (actions && actions["Experiment"]) {
      actions["Experiment"].play();
    }
  }, [actions]);

  useFrame(() => {
    if (!group.current) return;

    // Map scroll offset to a larger range (e.g., 0 to 20)
    const scrollPosition = scroll.offset * 20;
    group.current.position.y = scrollPosition;

    // Trigger About Us at a higher position
    if (scrollPosition > 15) {
      setShowAboutUs(true);
    } else {
      setShowAboutUs(false);
    }
  });

  return (
    <>
      <Canvas style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}> {/* Added zIndex */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <group ref={group}>
          <primitive object={scene} />
        </group>
        <Camera position={[0, 5, 15]} fov={45} /> {/* Adjusted camera position */}
      </Canvas>
      {showAboutUs && (
        <div
          className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-6 max-w-lg z-20" // Higher zIndex
        >
          <h1 className="text-2xl font-bold text-gray-800">About Us</h1>
          <p className="text-gray-600 mt-2">
            Welcome to our platform! We specialize in interactive 3D
            experiences that engage and inspire users.
          </p>
        </div>
      )}
    </>
  );
}

const Camera = ({ position, fov }) => {
    useFrame((state) => {
        state.camera.position.lerp(position, 0.1)
    })
    return <perspectiveCamera makeDefault fov={fov} position={position} />
}