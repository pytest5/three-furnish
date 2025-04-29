import { useGLTF } from "@react-three/drei";
import { FurnitureWrapper } from "../utils/furniture";
import { SuspenseWrapper } from "./SuspenseWrapper";

export const Bed = ({ ...props }) => {
  const gltf = useGLTF("./bed.gltf");
  return (
    <FurnitureWrapper>
      <primitive {...props} object={gltf.scene} />
    </FurnitureWrapper>
  );
};
