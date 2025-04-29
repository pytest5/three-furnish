import { PivotControls } from "@react-three/drei";

export const FurnitureWrapper = ({
  anchor = [0, 0, 0],
  scale = 0.8,
  lineWidth = 3,
  ...props
}: {
  anchor?: [number, number, number];
  scale?: number;
  lineWidth?: number;
  children: React.ReactNode;
}) => {
  return (
    <PivotControls
      {...props}
      anchor={anchor}
      scale={scale}
      lineWidth={lineWidth}
      depthTest={false}
      axisColors={["#9381ff", "#ff4d6d", "#7ae582"]}
      // fixed={true}
    />
  );
};
