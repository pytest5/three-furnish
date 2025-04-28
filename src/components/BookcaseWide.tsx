import { useGLTF } from "@react-three/drei";
import { FurnitureWrapper } from "../utils/furniture";

export const BookcaseWide = ({ ...props }) => {
  const gltf = useGLTF("./bookcase-wide.gltf");
  return (
    <FurnitureWrapper>
      <primitive {...props} object={gltf.scene} />
    </FurnitureWrapper>
  );
};
