"use client";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import styles from "./index.module.scss";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

fetch("https://api.pokemontcg.io/v2/cards?q=name:raichu", {
  headers: {
    "X-Api-Key": "0fc773cb-d207-421a-a1c7-3bc3c3d91bdb",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));

export default function Cards() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Canvas>
          <OrbitControls enableZoom={true} enablePan={false} />
          <ambientLight intensity={2} />
          <pointLight position={[3, 1, 1]} />
          <Card1 />
        </Canvas>
        <Canvas>
          <OrbitControls enableZoom={true} enablePan={false} />
          <ambientLight intensity={2} />
          <pointLight position={[3, 1, 1]} />
          <Card2 />
        </Canvas>
        <Canvas>
          <OrbitControls enableZoom={true} enablePan={false} />
          <ambientLight intensity={2} />
          <pointLight position={[3, 1, 1]} />
          <Card3 />
        </Canvas>
      </div>
    </div>
  );
}

function Card1({ position }) {
  const mesh = useRef(null);

  useFrame((state, delta) => {
    //mesh.current.rotation.z += delta * 2;
  });

  const texture_1 = useLoader(TextureLoader, "https://picsum.photos/200");

  const texture_2 = useLoader(TextureLoader, "https://picsum.photos/200");

  const texture_3 = useLoader(TextureLoader, "https://picsum.photos/200");

  const texture_4 = useLoader(TextureLoader, "https://picsum.photos/200");

  const texture_5 = useLoader(
    TextureLoader,
    "https://images.pokemontcg.io/base1/14_hires.png"
  );

  const texture_6 = useLoader(
    TextureLoader,
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/41d3ac77-2823-4e18-8910-a48de63acf87/d8xl0ja-ca02368b-643f-42f4-9721-f3895e14690d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQxZDNhYzc3LTI4MjMtNGUxOC04OTEwLWE0OGRlNjNhY2Y4N1wvZDh4bDBqYS1jYTAyMzY4Yi02NDNmLTQyZjQtOTcyMS1mMzg5NWUxNDY5MGQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dUhAjPqt1Rkudg3gHjqPNOQAuaA2wmXZ7T-Lq6L28O8"
  );

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <boxGeometry args={[2.5, 3.7, 0.03]} />
      <meshStandardMaterial map={texture_1} attach="material-0" />
      <meshStandardMaterial map={texture_2} attach="material-1" />
      <meshStandardMaterial map={texture_3} attach="material-2" />
      <meshStandardMaterial map={texture_4} attach="material-3" />
      <meshStandardMaterial map={texture_5} attach="material-4" />
      <meshStandardMaterial map={texture_6} attach="material-5" />
    </mesh>
  );
}

function Card2({ position }) {
  const mesh = useRef(null);

  useFrame((state, delta) => {
    // mesh.current.rotation.z += delta * 2;
  });

  const texture_1 = useLoader(TextureLoader, "https://picsum.photos/200");

  const texture_2 = useLoader(TextureLoader, "https://picsum.photos/200");

  const texture_3 = useLoader(TextureLoader, "https://picsum.photos/200");

  const texture_4 = useLoader(TextureLoader, "https://picsum.photos/200");

  const texture_5 = useLoader(
    TextureLoader,
    "https://images.pokemontcg.io/base6/3_hires.png"
  );

  const texture_6 = useLoader(
    TextureLoader,
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/41d3ac77-2823-4e18-8910-a48de63acf87/d8xl0ja-ca02368b-643f-42f4-9721-f3895e14690d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQxZDNhYzc3LTI4MjMtNGUxOC04OTEwLWE0OGRlNjNhY2Y4N1wvZDh4bDBqYS1jYTAyMzY4Yi02NDNmLTQyZjQtOTcyMS1mMzg5NWUxNDY5MGQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dUhAjPqt1Rkudg3gHjqPNOQAuaA2wmXZ7T-Lq6L28O8"
  );

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <boxGeometry args={[2.5, 3.7, 0.03]} />
      <meshStandardMaterial map={texture_1} attach="material-0" />
      <meshStandardMaterial map={texture_2} attach="material-1" />
      <meshStandardMaterial map={texture_3} attach="material-2" />
      <meshStandardMaterial map={texture_4} attach="material-3" />
      <meshStandardMaterial map={texture_5} attach="material-4" />
      <meshStandardMaterial map={texture_6} attach="material-5" />
    </mesh>
  );
}

function Card3({ position }) {
  const mesh = useRef(null);

  useFrame((state, delta) => {
    // mesh.current.rotation.z += delta * 2;
  });

  const texture_1 = useLoader(TextureLoader, "https://picsum.photos/200");

  const texture_2 = useLoader(TextureLoader, "https://picsum.photos/200");

  const texture_3 = useLoader(TextureLoader, "https://picsum.photos/200");

  const texture_4 = useLoader(TextureLoader, "https://picsum.photos/200");

  const texture_5 = useLoader(
    TextureLoader,
    "https://images.pokemontcg.io/base1/1_hires.png"
  );

  const texture_6 = useLoader(
    TextureLoader,
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/41d3ac77-2823-4e18-8910-a48de63acf87/d8xl0ja-ca02368b-643f-42f4-9721-f3895e14690d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQxZDNhYzc3LTI4MjMtNGUxOC04OTEwLWE0OGRlNjNhY2Y4N1wvZDh4bDBqYS1jYTAyMzY4Yi02NDNmLTQyZjQtOTcyMS1mMzg5NWUxNDY5MGQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dUhAjPqt1Rkudg3gHjqPNOQAuaA2wmXZ7T-Lq6L28O8"
  );

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <boxGeometry args={[2.5, 3.7, 0.03]} />
      <meshStandardMaterial map={texture_1} attach="material-0" />
      <meshStandardMaterial map={texture_2} attach="material-0" />
      <meshStandardMaterial map={texture_3} attach="material-2" />
      <meshStandardMaterial map={texture_4} attach="material-3" />
      <meshStandardMaterial map={texture_5} attach="material-4" />
      <meshStandardMaterial map={texture_6} attach="material-5" />
    </mesh>
  );
}
