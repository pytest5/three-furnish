import React from "react";
import { FallbackMesh } from "./FallbackMesh";

export const SuspenseWrapper = ({
  children,
  ...props
}: {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number] | number;
  children: React.ReactNode;
}) => {
  return (
    <React.Suspense fallback={<FallbackMesh {...props} />}>
      {children}
    </React.Suspense>
  );
};
