import { useLoader } from '@react-three/fiber'
import { useMemo } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Support(props) {
    const {scene} = useLoader(GLTFLoader, '/assets/ConfiguratorModals/support/Project Name.gltf')

    const copiedScene = useMemo(() => scene.clone(), [scene])

    return (
        <group {...props}>
        <primitive object={copiedScene} />
        </group>
    )
}