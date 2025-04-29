import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { DoubleSide } from "three";
import { Bench } from "./components/Bench";
import { Bed } from "./components/Bed";
import { Bookcase } from "./components/Bookcase";
import { Chair } from "./components/Chair";
import { TableModern } from "./components/TableModern";
import { BigText } from "./components/BigText";
import { SuspenseWrapper } from "./components/SuspenseWrapper";
import { Plant } from "./components/Plant";

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
        <SuspenseWrapper
          position={[4, -0.5, 1]}
          rotation={[0, -Math.PI * 0.2, 0]}
          scale={[2.5, 1, 2.5]}
        >
          <Bed position={[4, -0.7, 1]} rotation={[0, -Math.PI * 0.2, 0]} />
        </SuspenseWrapper>
        <SuspenseWrapper
          position={[2.8, -0.5, 2.6]}
          rotation={[0, -Math.PI * 0.2, 0]}
          scale={[2, 1, 1]}
        >
          <Bench
            position={[2.6, -1, 2.2]}
            rotation={[0, -Math.PI * 0.2, 0]}
            scale={[1.5, 1, 1]}
          />
        </SuspenseWrapper>

        <SuspenseWrapper
          position={[0, -0.5, -1]}
          scale={[1, 3, 1]}
          rotation={[0, Math.PI, 0]}
        >
          <Bookcase
            position={[0, -1, -1]}
            scale={1}
            rotation={[0, Math.PI, 0]}
          />
        </SuspenseWrapper>
        <SuspenseWrapper
          position={[0, -0.5, 1]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <Chair position={[0, -1, 1]} rotation={[0, -Math.PI / 2, 0]} />
        </SuspenseWrapper>
        <SuspenseWrapper position={[-1, -0.5, 1]} scale={[1, 1, 2]}>
          <TableModern
            position={[-1, -1.2, 1]}
            rotation={[0, Math.PI / 2, 0]}
            scale={0.65}
          />
        </SuspenseWrapper>
        <SuspenseWrapper
          position={[3, 4.5, 1]}
          scale={[4, 2, 1]}
          rotation={[-0.3, -0.35, 0]}
        >
          <BigText />
        </SuspenseWrapper>
        <SuspenseWrapper position={[0.8, -0.85, 4.5]} scale={0.5}>
          <Plant position={[0.8, -0.85, 4.5]} scale={0.5} />
        </SuspenseWrapper>
      </group>
    </Canvas>
  );
}
export default App;
