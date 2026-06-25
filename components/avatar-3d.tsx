'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

interface AvatarHeadProps {
  mousePos: { x: number; y: number }
}

function AvatarHead({ mousePos }: AvatarHeadProps) {
  const headRef = useRef<THREE.Group>(null)
  const eyesRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (eyesRef.current) {
      // Calculate look direction based on mouse position
      const targetX = (mousePos.x / window.innerWidth - 0.5) * 0.3
      const targetY = -(mousePos.y / window.innerHeight - 0.5) * 0.3

      // Smooth lerp to target
      eyesRef.current.rotation.x += (targetY - eyesRef.current.rotation.x) * 0.1
      eyesRef.current.rotation.y += (targetX - eyesRef.current.rotation.y) * 0.1
    }
  })

  return (
    <group ref={headRef}>
      {/* Head base (skin tone sphere) */}
      <mesh position={[0, 0.2, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhongMaterial color="#d4a574" />
      </mesh>

      {/* Hair (black) */}
      <mesh position={[0, 0.6, 0]}>
        <sphereGeometry args={[0.55, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.6]} />
        <meshPhongMaterial color="#1a1a1a" />
      </mesh>

      {/* Lightning bolt hair accent (right side) */}
      <mesh position={[0.45, 0.55, 0.1]}>
        <boxGeometry args={[0.08, 0.15, 0.05]} />
        <meshPhongMaterial color="#ffd700" />
      </mesh>
      <mesh position={[0.42, 0.4, 0.1]}>
        <boxGeometry args={[0.06, 0.15, 0.04]} />
        <meshPhongMaterial color="#ffd700" />
      </mesh>

      {/* Eyes group for mouse tracking */}
      <group ref={eyesRef}>
        {/* Left eye white */}
        <mesh position={[-0.15, 0.35, 0.45]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshPhongMaterial color="#ffffff" />
        </mesh>

        {/* Right eye white */}
        <mesh position={[0.15, 0.35, 0.45]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshPhongMaterial color="#ffffff" />
        </mesh>

        {/* Left pupil */}
        <mesh position={[-0.15, 0.35, 0.53]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshPhongMaterial color="#3d5a3d" />
        </mesh>

        {/* Right pupil */}
        <mesh position={[0.15, 0.35, 0.53]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshPhongMaterial color="#3d5a3d" />
        </mesh>
      </group>

      {/* Nose */}
      <mesh position={[0, 0.2, 0.48]}>
        <boxGeometry args={[0.08, 0.1, 0.04]} />
        <meshPhongMaterial color="#c9956f" />
      </mesh>

      {/* Mouth (smile) */}
      <mesh position={[0, 0.05, 0.48]}>
        <boxGeometry args={[0.2, 0.05, 0.02]} />
        <meshPhongMaterial color="#8b5a3c" />
      </mesh>
    </group>
  )
}

function Hoodie() {
  return (
    <group>
      {/* Main hoodie body */}
      <mesh position={[0, -0.4, 0]}>
        <boxGeometry args={[0.7, 0.8, 0.4]} />
        <meshPhongMaterial color="#2a2a2a" />
      </mesh>

      {/* Hoodie hood */}
      <mesh position={[0, 0.1, -0.15]}>
        <sphereGeometry args={[0.55, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        <meshPhongMaterial color="#1f1f1f" />
      </mesh>

      {/* Planet/Saturn on hoodie */}
      <group position={[0, -0.35, 0.2]}>
        {/* Planet core */}
        <mesh>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshPhongMaterial color="#4a9d5f" />
        </mesh>

        {/* Planet ring */}
        <mesh rotation={[0.3, 0, 0]}>
          <torusGeometry args={[0.22, 0.04, 8, 32]} />
          <meshPhongMaterial color="#7bc97f" />
        </mesh>
      </group>

      {/* Left sleeve */}
      <mesh position={[-0.55, -0.3, 0]}>
        <boxGeometry args={[0.25, 0.6, 0.35]} />
        <meshPhongMaterial color="#2a2a2a" />
      </mesh>

      {/* Right sleeve */}
      <mesh position={[0.55, -0.3, 0]}>
        <boxGeometry args={[0.25, 0.6, 0.35]} />
        <meshPhongMaterial color="#2a2a2a" />
      </mesh>
    </group>
  )
}

function Arm() {
  return (
    <group>
      {/* Upper arm */}
      <mesh position={[0, -0.4, 0]}>
        <boxGeometry args={[0.12, 0.4, 0.12]} />
        <meshPhongMaterial color="#d4a574" />
      </mesh>

      {/* Forearm */}
      <mesh position={[0, -0.75, 0]}>
        <boxGeometry args={[0.11, 0.35, 0.11]} />
        <meshPhongMaterial color="#d4a574" />
      </mesh>

      {/* Hand */}
      <mesh position={[0, -0.95, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshPhongMaterial color="#d4a574" />
      </mesh>

      {/* Peace sign fingers */}
      <mesh position={[-0.05, -0.92, 0.1]}>
        <boxGeometry args={[0.04, 0.2, 0.03]} />
        <meshPhongMaterial color="#d4a574" />
      </mesh>
      <mesh position={[0.05, -0.92, 0.1]}>
        <boxGeometry args={[0.04, 0.2, 0.03]} />
        <meshPhongMaterial color="#d4a574" />
      </mesh>
    </group>
  )
}

function Avatar() {
  const groupRef = useRef<THREE.Group>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame(() => {
    if (groupRef.current) {
      // Gentle body rotation to follow mouse
      const targetRotY = (mousePos.x / window.innerWidth - 0.5) * 0.4
      groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      <AvatarHead mousePos={mousePos} />
      <Hoodie />

      {/* Left arm (rest) */}
      <group position={[-0.5, 0, 0]} rotation={[0, 0, -0.3]}>
        <Arm />
      </group>

      {/* Right arm (peace sign, raised) */}
      <group position={[0.5, 0.2, 0]} rotation={[-1.2, 0, 0.4]}>
        <Arm />
      </group>
    </group>
  )
}

export default function Avatar3D() {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0, 2]} fov={50} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, 5, 5]} intensity={0.5} />
      
      <Avatar />
    </Canvas>
  )
}
