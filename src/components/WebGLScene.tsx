"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WebGLScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Volumetric Fog
    scene.fog = new THREE.FogExp2(0x050308, 0.08);

    // Dynamic Net Structure
    const netGeometry = new THREE.PlaneGeometry(100, 100, 40, 40);
    const netMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b2cf5,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const netMesh = new THREE.Mesh(netGeometry, netMaterial);
    netMesh.rotation.x = -Math.PI / 2;
    netMesh.position.y = -10;
    scene.add(netMesh);

    // Glowing Intersections (Points)
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xd8b9ff,
      size: 0.15,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const netPoints = new THREE.Points(netGeometry, pointsMaterial);
    netPoints.rotation.x = -Math.PI / 2;
    netPoints.position.y = -10;
    scene.add(netPoints);

    // Floating Abstract Meshes
    const meshes: THREE.Mesh[] = [];
    for (let i = 0; i < 15; i++) {
      const geo = new THREE.IcosahedronGeometry(Math.random() * 1.5, 0);
      const mat = new THREE.MeshBasicMaterial({
        color: 0x8c2bff,
        wireframe: true,
        transparent: true,
        opacity: 0.1,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40
      );
      mesh.rotation.set(Math.random(), Math.random(), Math.random());
      scene.add(mesh);
      meshes.push(mesh);
    }

    camera.position.z = 30;

    // Interactive Lighting
    const pointLight = new THREE.PointLight(0x8c2bff, 5, 100);
    scene.add(pointLight);

    // Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

      pointLight.position.x = mouseX * 25;
      pointLight.position.y = mouseY * 20;
      pointLight.position.z = 15;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animationId: number;
    function animate() {
      animationId = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Dynamic Net Animation (Wave effect)
      const positions = netGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        positions[i + 2] =
          Math.sin(x * 0.1 + time) * 2 + Math.cos(y * 0.1 + time) * 2;
      }
      netGeometry.attributes.position.needsUpdate = true;

      // Floating Meshes Animation
      meshes.forEach((m, i) => {
        m.rotation.x += 0.002;
        m.rotation.y += 0.003;
        m.position.y += Math.sin(time + i) * 0.005;
      });

      // Perspective Parallax
      camera.position.x += (mouseX * 8 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 8 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    }
    animate();

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return <canvas ref={canvasRef} id="webgl-canvas" />;
}
