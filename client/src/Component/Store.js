/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/store.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.store_collider008.geometry} material={materials['default']} position={[0, 0, -3.38]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.store_collider007.geometry} material={materials['default']} position={[0, 0, -3.38]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.store_collider006.geometry} material={materials['default']} position={[0, 0, -3.38]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.store_collider005.geometry} material={materials['default']} position={[0, 0, -3.38]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.store_collider004.geometry} material={materials['default']} position={[0, 0.05, -0.33]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.store_collider003.geometry} material={materials['default']} position={[0, 1.5, -8.32]} rotation={[0.23, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.store_collider001.geometry} material={materials['default']} position={[0, 0.85, 0]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.store_collider.geometry} material={materials['default']} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.store_collider009.geometry} material={materials['default']} position={[-3.27, 0.85, 2.25]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.store_collider010.geometry} material={materials['default']} position={[6.93, 0.85, 2.25]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.store_collider011.geometry} material={materials['default']} position={[6.03, 0.86, 10.65]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.store_collider012.geometry} material={materials['default']} position={[-2.37, 0.86, 10.65]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.Cylinder001.geometry} material={materials.METAL2_MAT} position={[0, 0.08, 0]} />
      <mesh geometry={nodes.Cylinder011.geometry} material={materials.CONCRETE1_MAT} position={[0, 0.08, 0]} />
      <mesh geometry={nodes.Cylinder010.geometry} material={materials.METAL1_MAT} position={[0, 0.08, -3.38]} />
      <mesh geometry={nodes.Cylinder018.geometry} material={materials.CONCRETE2_MAT} position={[0, 0.1, -3.38]} />
      <mesh geometry={nodes.Cube008.geometry} material={materials.CONCRETE1_MAT} position={[0, 0.02, 0]} />
      <mesh geometry={nodes.Cube013.geometry} material={materials.METAL2_MAT} position={[0, 4.4, -5.78]} rotation={[0.23, -Math.PI / 2, 0]} />
      <group position={[0.08, 0.45, -5.43]} rotation={[Math.PI, -1.56, Math.PI]}>
        <mesh geometry={nodes.Plane169.geometry} material={materials.METAL1_MAT} />
        <mesh geometry={nodes.Plane169_1.geometry} material={materials.Marble} />
      </group>
      <group position={[7.22, -0.01, 6.98]}>
        <mesh geometry={nodes.Cube034.geometry} material={materials.METAL3_MAT} />
        <mesh geometry={nodes.Cube034_1.geometry} material={materials.ground1B} />
        <mesh geometry={nodes.Plane009001.geometry} material={materials.Bushes_MAT} />
      </group>
      <mesh geometry={nodes.Cylinder002.geometry} material={materials.glass_MAT} position={[0, 0.08, -3.38]} />
      <mesh geometry={nodes.Plane033.geometry} material={materials.glass_MAT} position={[-4.16, 2.3, 6.24]} />
      <group position={[0, 0, -0.99]}>
        <mesh geometry={nodes.Cube015.geometry} material={materials['emissive_0.5_MAT']} />
        <mesh geometry={nodes.Cube015_1.geometry} material={materials.CONCRETE1_MAT} />
      </group>
      <group position={[-5.09, 4.1, -2.69]}>
        <mesh geometry={nodes.Cube037.geometry} material={materials.emissive_2_MAT} />
        <mesh geometry={nodes.Cube037_1.geometry} material={materials.METAL2_MAT} />
      </group>
      <group position={[0, 0, -3.38]}>
        <mesh geometry={nodes.Cylinder010_1.geometry} material={materials.CONCRETE1_MAT} />
        <mesh geometry={nodes.Cylinder010_2.geometry} material={materials.emissive_2_MAT} />
      </group>
      <group position={[0, -0.02, -3.38]}>
        <mesh geometry={nodes.Cylinder009.geometry} material={materials.CONCRETE1_MAT} />
        <mesh geometry={nodes.Cylinder009_1.geometry} material={materials['emissive_0.5_MAT']} />
      </group>
      <group position={[-6.97, 5.73, 6.45]}>
        <mesh geometry={nodes.Cube054.geometry} material={materials.CONCRETE1_MAT} />
        <mesh geometry={nodes.Cube054_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube054_2.geometry} material={materials.METAL1_MAT} />
      </group>
      <mesh geometry={nodes.Cube002.geometry} material={materials.Material} position={[-6.97, 5.73, 6.45]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials.METAL2_MAT} position={[-6.97, 5.73, 6.46]} />
      <group position={[0, 0.05, -0.33]}>
        <mesh geometry={nodes.Cylinder011_1.geometry} material={materials.METAL1_MAT} />
        <mesh geometry={nodes.Cylinder011_2.geometry} material={materials.emissive_2_MAT} />
      </group>
      <group position={[-4.2, 0.05, 5.1]} scale={[0.73, 1, 0.73]}>
        <mesh geometry={nodes.Plane420.geometry} material={materials.emissive_MAT} />
        <mesh geometry={nodes.Plane420_1.geometry} material={materials.METAL1_MAT} />
        <mesh geometry={nodes.Plane420_2.geometry} material={materials.Material} />
      </group>
      <group position={[4.2, 0.05, 5.1]} scale={[0.73, 1, 0.73]}>
        <mesh geometry={nodes.Plane002.geometry} material={materials.emissive_MAT} />
        <mesh geometry={nodes.Plane002_1.geometry} material={materials.METAL1_MAT} />
        <mesh geometry={nodes.Plane002_2.geometry} material={materials.Material} />
      </group>
      <group position={[0, 0.37, 0.7]} scale={[0.73, 1, 0.73]}>
        <mesh geometry={nodes.Plane005_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane005_2.geometry} material={materials['emissive_0.5_MAT']} />
      </group>
      <group position={[1, 0.37, -0.7]} scale={[0.73, 1, 0.73]}>
        <mesh geometry={nodes.Plane007_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane007_2.geometry} material={materials['emissive_0.5_MAT']} />
      </group>
      <group position={[-1, 0.37, -0.7]} scale={[0.73, 1, 0.73]}>
        <mesh geometry={nodes.Plane008_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane008_2.geometry} material={materials['emissive_0.5_MAT']} />
      </group>
      <group position={[-5.1, 0.05, -3.3]} scale={[0.73, 1, 0.73]}>
        <mesh geometry={nodes.Plane009_1.geometry} material={materials.emissive_MAT} />
        <mesh geometry={nodes.Plane009_2.geometry} material={materials.METAL1_MAT} />
        <mesh geometry={nodes.Plane009_3.geometry} material={materials.Material} />
      </group>
      <group position={[5.1, 0.05, -3.3]} scale={[0.73, 1, 0.73]}>
        <mesh geometry={nodes.Plane010_1.geometry} material={materials.emissive_MAT} />
        <mesh geometry={nodes.Plane010_2.geometry} material={materials.METAL1_MAT} />
        <mesh geometry={nodes.Plane010_3.geometry} material={materials.Material} />
      </group>
      <group position={[-4.2, 0.37, 5.1]} scale={[0.73, 1, 0.73]}>
        <mesh geometry={nodes.Plane022.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane022_1.geometry} material={materials['emissive_0.5_MAT']} />
      </group>
      <group position={[4.2, 0.37, 5.1]} scale={[0.73, 1, 0.73]}>
        <mesh geometry={nodes.Plane023.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane023_1.geometry} material={materials['emissive_0.5_MAT']} />
      </group>
      <group position={[5.1, 0.37, -3.3]} scale={[0.73, 1, 0.73]}>
        <mesh geometry={nodes.Plane024.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane024_1.geometry} material={materials['emissive_0.5_MAT']} />
      </group>
      <group position={[-5.1, 0.37, -3.3]} scale={[0.73, 1, 0.73]}>
        <mesh geometry={nodes.Plane025.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane025_1.geometry} material={materials['emissive_0.5_MAT']} />
      </group>
    </group>
  )
}

useGLTF.preload('/store.glb')
