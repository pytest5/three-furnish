import { PivotControls } from "@react-three/drei";
import { useControls } from "leva";
import React from "react";

export const FurnitureWrapper = ({
  anchor = [0, 0, 0],
  scale = 0.8,
  lineWidth = 3,
  children,
}: {
  anchor?: [number, number, number];
  scale?: number;
  lineWidth?: number;
  children: React.ReactNode;
}) => {
  const { pivotControls } = useControls({
    pivotControls: { options: ["False", "True"] },
  });

  const enabled = pivotControls === "True";

  return (
    <PivotControls
      anchor={anchor}
      scale={scale}
      lineWidth={lineWidth}
      depthTest={false}
      axisColors={["#9381ff", "#ff4d6d", "#7ae582"]}
      enabled={enabled}
    >
      {children}
    </PivotControls>
  );
};
