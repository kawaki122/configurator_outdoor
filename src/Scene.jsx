import { Canvas } from "@react-three/fiber";
import Piller from "./models/Piller";
import { PerspectiveCamera } from "@react-three/drei";
import { Suspense, useMemo } from "react";
import Box from "./models/Box";
import Floor from "./models/Floor";
import Support from "./models/Support";
import Roof from "./models/Roof";
import Controls from "./components/Controls";


function Scene({ slider1, slider2, slider3, slider4 }) {
  const slider1Side = slider1 / 2 - 0.2;
  const slider2Side = slider2 / 2 - 0.2;

  const roofs = useMemo(() => {
    return new Array(Math.floor(slider1 * 2.39)).fill(1);
  }, [slider1]);

  return (
    <Canvas className="scene-on">
      <Suspense fallback={null}>
      <PerspectiveCamera makeDefault position={[7, 5, 7]} />

        <ambientLight position={[0, 10, 0]} />

        <pointLight position={[0, 10, 0]} scale={100} intensity={0.3} />
        <pointLight position={[0, 10, 10]} scale={100} intensity={0.3} />

        <pointLight position={[20, 10, 0]} scale={100} intensity={0.2} />
        <pointLight position={[0, 10, -20]} scale={100} intensity={0.2} />

        <spotLight position={[0, 10, 0]} scale={100} intensity={0.2} />
        <spotLight position={[10, 10, 0]} scale={100} intensity={0.2} />
        <spotLight position={[10, 0, -10]} scale={100} intensity={0.1} />
        <spotLight position={[-10, 0, 10]} scale={100} intensity={0.1} />
        <spotLight position={[0, 0, -10]} scale={100} intensity={0.1} />

        <Floor scale={[slider2, slider1, 1]} />

        <Piller
          position={[slider2Side + 0.06, 0, slider1Side + 0.06]}
          scale={[7, slider3, 7]}
        />
        <Piller
          position={[-(slider2Side + 0.06), 0, -(slider1Side + 0.06)]}
          scale={[7, slider3, 7]}
        />
        <Piller
          position={[-(slider2Side + 0.06), 0, slider1Side + 0.06]}
          scale={[7, slider3, 7]}
        />
        <Piller
          position={[slider2Side + 0.06, 0, -(slider1Side + 0.06)]}
          scale={[7, slider3, 7]}
        />

        <Support
          position={[0, slider3 / 5 - 0.4, -slider1Side]}
          scale={[slider2 * 2.5 - 1.3, 10, 10]}
        />
        <Support
          position={[0, slider3 / 5 - 0.4, slider1Side]}
          rotation={[0, Math.PI, 0]}
          scale={[slider2 * 2.5 - 1.3, 10, 10]}
        />
        <Support
          position={[slider2Side, slider3 / 5 - 0.4, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[slider1 * 2.5 - 1.3, 10, 10]}
        />
        <Support
          position={[-slider2Side, slider3 / 5 - 0.4, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[slider1 * 2.5 - 1.3, 10, 10]}
        />

        {roofs.map((item, index) => (
          <Roof
            key={index}
            scale={[10, 10, (slider2*5)-2.5]}
            rotation={[slider4, Math.PI / 2, 0]}
            position={[
              0,
              slider3 / 5 - 0.26,
              -(slider1 / 2) + index / 2.5 + 0.4,
            ]}
          />
        ))}

        <Box scale={[25, 6, 25]} position={[0, 3, 0]} />

        <Controls />
      </Suspense>
    </Canvas>
  );
}

export default Scene;

