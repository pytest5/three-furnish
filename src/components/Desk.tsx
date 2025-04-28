import { useGLTF } from "@react-three/drei";
import { FurnitureWrapper } from "../utils/furniture";

export const Desk = ({ ...props }) => {
  const gltf = useGLTF("./desk.gltf");
  return (
    <FurnitureWrapper>
      <primitive {...props} object={gltf.scene} />
    </FurnitureWrapper>
  );
};
