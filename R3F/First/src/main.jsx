import { createRoot } from 'react-dom/client'
import React, { useRef, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment } from '@react-three/drei'
import { Box3, Vector3 } from 'three'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import "./index.css"

gsap.registerPlugin(ScrollTrigger)

function Model() {
  const { scene } = useGLTF("/cola_can.glb")
  const ref = useRef()

  // Center pivot
  useEffect(() => {
    const box = new Box3().setFromObject(scene)
    const center = new Vector3()
    box.getCenter(center)
    scene.position.sub(center)
  }, [scene])

  // Infinite spin
  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current.rotation, {
        y: Math.PI * 2,
        duration: 20,
        repeat: -1,
        ease: "linear"
      })
      gsap.to(ref.current.rotation, {
        z : 9,
        scale : 0.5,
        scrollTrigger : {
          trigger : "#root",
          scrub : 2,
          start : "10%",
          // markers : true
        }
      })
    }
  }, [])

  return (
    <group ref={ref}>
      <primitive object={scene} scale={10} />
    </group>
  )
}

function App() {
  const containerRef = useRef()

  // Animate whole container on scroll
  useEffect(() => {
    if (containerRef.current) {
      // gsap.to(containerRef.current, {
      //   position : "sticky",
      //   scrollTrigger: {
      //     trigger: "#root",
      //     scrub: 1,
      //     start: "top top",
      //     end: "bottom bottom"
      //   }
      // })
    }
  }, [])

  return (
    <div ref={containerRef} style={{ height: "500px", width: "100%",position:"sticky",top:"5%" }}>
      <Canvas style={{height:"100%",width:"100%"}} camera={{ position: [0, 0, 3], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight intensity={1.2} position={[5, 5, 5]} />
        <pointLight intensity={2} position={[-2,5,5]} />
        <Suspense fallback={null}>
          <Model />
          <Environment preset="city" />
        </Suspense>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
