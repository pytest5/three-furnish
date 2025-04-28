import { useGLTF } from "@react-three/drei";
import { FurnitureWrapper } from "../utils/furniture";
import React from "react";

export const Bed = ({ ...props }) => {
  const gltf = useGLTF("./bed.gltf");
  const furnitureRef = React.useRef(null);
  return (
    <FurnitureWrapper ref={furnitureRef}>
      <primitive {...props} object={gltf.scene} />
    </FurnitureWrapper>
  );
};
