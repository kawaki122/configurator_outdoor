import { OrbitControls } from "@react-three/drei";
import { useState } from "react";

function Controls() {
  const [autoRotate, setautoRotate] = useState(true);
  return (
    <OrbitControls
      autoRotate={autoRotate}
      onStart={() => setautoRotate(false)}
      enablePan={false}
      maxPolarAngle={Math.PI / 2 - 0.02}
      maxDistance={15}
      minDistance={7}
    />
  );
}

export default Controls;
