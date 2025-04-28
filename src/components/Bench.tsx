import { useGLTF } from "@react-three/drei";
import { FurnitureWrapper } from "../utils/furniture";

export const Bench = ({ ...props }) => {
  const gltf = useGLTF("./bench.gltf");
  return (
    <FurnitureWrapper>
      <primitive {...props} object={gltf.scene} />
    </FurnitureWrapper>
  );
};
