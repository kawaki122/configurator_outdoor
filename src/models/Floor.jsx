import { Html } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function Floor(props) {
  // const gltf = useLoader(GLTFLoader, '/assets/ConfiguratorModals/floor/Project Name.gltf')
  const [slider2, slider1] = props.scale;
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    [
      "/assets/ConfiguratorModals/floor/Wood_Planks_009_COLOR.jpg",
      "/assets/ConfiguratorModals/floor/Wood_Planks_009_DISP.png",
      "/assets/ConfiguratorModals/floor/Wood_Planks_009_NORM.jpg",
      "/assets/ConfiguratorModals/floor/Wood_Planks_009_ROUGH.jpg",
      "/assets/ConfiguratorModals/floor/Wood_Planks_009_OCC.jpg",
    ]
  );
  return (
    <mesh {...props} position={[0, 0, 0]} rotation={[-1.57, 0, 0]}>
      <planeGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        displacementScale={0.2}
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
      />
      <Html distanceFactor={10} center={true} position={[0, 0.53, 0]}>
        <div className="content">{slider2*10}mm</div>
      </Html>
      <Html distanceFactor={10} center={true} position={[0.5, 0, 0]}>
        <div className="content">{slider1*10}mm</div>
      </Html>
    </mesh>
  );
}
