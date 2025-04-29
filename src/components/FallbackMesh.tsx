export const FallbackMesh = ({
  args = [1, 1, 1, 3, 3, 3],
  position,
  scale,
  rotation,
}: {
  args?: [number, number, number, number, number, number];
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
}) => {
  return (
    <mesh position={position} scale={scale} rotation={rotation}>
      <meshStandardMaterial color="neon" wireframe />
      <boxGeometry args={args} />
    </mesh>
  );
};
