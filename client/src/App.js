import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import TopChairModel from './Component/Raunakavtar'; /* highlight-line */
import Store from './Component/Store'
export default function App() {
   return (
      <Canvas
         camera={{ position: [2, 0, 12.25], fov: 15 }}
         style={{
            backgroundColor: '#fff',
            width: '100vw',
            height: '100vh',
         }}
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         {/* <Suspense fallback={null}>
            <TopChairModel position={[0.025, -3, 0]} /> 
            </Suspense> */}
            <Suspense fallback={null}>
            <Store position={[0.025, -3, 0]} /> 
            </Suspense>

         <OrbitControls />
         
      </Canvas>
   );
}