
export default function Box(props) {

    return (
        <mesh {...props}>
            <boxBufferGeometry />
            <meshStandardMaterial side={1} color={'lightgray'} />
        </mesh>
    )
}