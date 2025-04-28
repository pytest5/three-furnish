import { PivotControls } from "@react-three/drei";

export const FurnitureWrapper = ({ scale = 1, lineWidth = 3, ...props }) => {
  return (
    <PivotControls
      {...props}
      anchor={[1, 1, 0]}
      scale={scale}
      lineWidth={lineWidth}
    />
  );
};
