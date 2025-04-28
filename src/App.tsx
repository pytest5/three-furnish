import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { DoubleSide } from "three";
import { Bench } from "./components/Bench";

function App() {
  return (
    <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 5]} />
      <group>
        <mesh position-y={-1} scale={5} rotation={[-Math.PI * 0.5, 0, 0]}>
          <planeGeometry />
          <meshStandardMaterial color="yellow" side={DoubleSide} />
        </mesh>
      </group>
      <OrbitControls />
    </Canvas>
  );
}
export default App;
