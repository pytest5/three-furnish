import { Center, Float, Text3D } from "@react-three/drei";

export const BigText = () => {
  return (
    <Float speed={1.5}>
      <Center position={[3, 4.5, 1]} rotation={[-0.3, -0.35, 0]}>
        <Text3D
          lineHeight={0.6}
          letterSpacing={-0.06}
          font={"./Bangers_Regular.json"}
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          size={0.9}
        >
          {`3D room\nviewer`} <meshNormalMaterial />
        </Text3D>
      </Center>
    </Float>
  );
};
