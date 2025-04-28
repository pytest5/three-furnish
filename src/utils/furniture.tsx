import { PivotControls } from "@react-three/drei";

export const FurnitureWrapper = ({
  anchor = [0, 0, 0],
  scale = 0.7,
  lineWidth = 3,
  ...props
}: {
  anchor: [number, number, number];
  scale: number;
  lineWidth: number;
}) => {
  return (
    <PivotControls
      {...props}
      anchor={anchor}
      scale={scale}
      lineWidth={lineWidth}
      // depthTest={true}
    />
  );
};
