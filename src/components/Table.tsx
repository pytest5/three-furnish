import { useGLTF } from "@react-three/drei";
import { FurnitureWrapper } from "../utils/furniture";

export const Table = ({ ...props }) => {
  const gltf = useGLTF("./table.gltf");
  return (
    <FurnitureWrapper>
      <primitive {...props} object={gltf.scene} />
    </FurnitureWrapper>
  );
};
