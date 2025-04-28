import { useGLTF } from "@react-three/drei";
import { FurnitureWrapper } from "../utils/furniture";

export const Chair = ({ ...props }) => {
  const gltf = useGLTF("./chair.gltf");
  return (
    <FurnitureWrapper>
      <primitive {...props} object={gltf.scene} />
    </FurnitureWrapper>
  );
};
