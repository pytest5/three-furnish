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

function App() {
  return (
    <Canvas camera={{ fov: 60, near: 0.1, far: 1000, position: [5, 10, 15] }}>
      <ambientLight intensity={4.1} />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />

      <mesh
        position-y={-1.05}
        position-x={1}
        scale={6}
        rotation={[-Math.PI * 0.5, 0, 0]}
      >
        <circleGeometry args={[1, 160]} />
        {/* <meshStandardMaterial color="grey" side={DoubleSide} /> */}
        <MeshReflectorMaterial
          blur={[1000, 1000]}
          resolution={1024}
          side={DoubleSide}
          color="#669bbc"

          // mixBlur={1}
          // mirror={0.45}
        />
      </mesh>

      <OrbitControls makeDefault />
      <Bed position={[4, -0.7, 1]} rotation={[0, -Math.PI * 0.2, 0]} />
      <Bench
        position={[2.5, -1, 2.0]}
        rotation={[0, -Math.PI * 0.2, 0]}
        scale={[1.5, 1, 1]}
      />
      <Bookcase position={[0, -1, -1]} scale={1} rotation={[0, Math.PI, 0]} />
      {/* <BookcaseWide position={[-1, -1, -2]} /> */}
      <Chair position={[0, -1, 1]} rotation={[0, -Math.PI / 2, 0]} />
      <Desk position={[3, -31.9, 1]} />
    </Canvas>
  );
}
export default App;
