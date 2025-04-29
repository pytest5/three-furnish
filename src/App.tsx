import { MeshReflectorMaterial, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { DoubleSide } from "three";
import { Bench } from "./components/Bench";
import { Bed } from "./components/Bed";
import { Bookcase } from "./components/Bookcase";
import { BookcaseWide } from "./components/BookcaseWide";
import { Chair } from "./components/Chair";
import { Desk } from "./components/Desk";
import { Table } from "./components/Table";
import { BigText } from "./components/BigText";

function App() {
  return (
    <Canvas camera={{ fov: 70, near: 0.1, far: 1000, position: [2, 5, 10] }}>
      <ambientLight intensity={3.1} />
      <directionalLight position={[1, 2, 3]} intensity={3.5} />
      <group position={[-1.3, 0, 0]}>
        <mesh
          position={[1, -1.05, 0]}
          scale={6}
          rotation={[-Math.PI * 0.5, 0, 0]}
        >
          <circleGeometry args={[1, 160]} />
          {/* <meshStandardMaterial color="grey" side={DoubleSide} /> */}
          <meshBasicMaterial
            blur={[300, 400]}
            resolution={1024}
            side={DoubleSide}
            color="lightskyblue"
            mixBlur={0.7}
            mirror={0.5}
            roughness={0.3}
          />
        </mesh>

        <OrbitControls makeDefault />
        <Bed position={[4, -0.7, 1]} rotation={[0, -Math.PI * 0.2, 0]} />
        <Bench
          position={[2.6, -1, 2.2]}
          rotation={[0, -Math.PI * 0.2, 0]}
          scale={[1.5, 1, 1]}
        />
        <Bookcase position={[0, -1, -1]} scale={1} rotation={[0, Math.PI, 0]} />
        <Chair position={[0, -1, 1]} rotation={[0, -Math.PI / 2, 0]} />
        <Desk position={[3, -31.9, 1]} />
        <BigText />
      </group>
    </Canvas>
  );
}
export default App;
