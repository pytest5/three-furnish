import { useGLTF } from "@react-three/drei";
import React from "react";
import { FurnitureWrapper } from "../utils/furniture";

export const Bookcase = ({ ...props }) => {
  const gltf = useGLTF("./bookcase.gltf");
  return (
    <FurnitureWrapper>
      <primitive {...props} object={gltf.scene} />
    </FurnitureWrapper>
  );
};
