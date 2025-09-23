"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const SpaceBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
    
    // Starfield
    const starVertices: number[] = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Sun
    const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffdd00, emissive: 0xffdd00, emissiveIntensity: 1 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);
    
    const pointLight = new THREE.PointLight(0xffffff, 3, 300);
    sun.add(pointLight);

    // Planets
    const planets: { mesh: THREE.Mesh; distance: number; speed: number; offset: number }[] = [];
    const planetData = [
      { color: 0xaaaaaa, distance: 10, speed: 0.01, size: 0.8 }, // Mercury
      { color: 0xffa500, distance: 15, speed: 0.008, size: 1.2 }, // Venus
      { color: 0x0000ff, distance: 22, speed: 0.006, size: 1.3 }, // Earth
      { color: 0xff4500, distance: 30, speed: 0.005, size: 1.0 }, // Mars
      { color: 0xffd700, distance: 45, speed: 0.003, size: 2.5 }, // Jupiter
    ];

    planetData.forEach(data => {
      const planetGeometry = new THREE.SphereGeometry(data.size, 32, 32);
      const planetMaterial = new THREE.MeshStandardMaterial({ color: data.color });
      const planet = new THREE.Mesh(planetGeometry, planetMaterial);
      scene.add(planet);
      planets.push({ mesh: planet, distance: data.distance, speed: data.speed, offset: Math.random() * Math.PI * 2 });
    });


    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      planets.forEach(p => {
        const angle = elapsedTime * p.speed + p.offset;
        p.mesh.position.x = Math.cos(angle) * p.distance;
        p.mesh.position.z = Math.sin(angle) * p.distance;
      });

      stars.rotation.y += 0.0001;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    const currentMount = mountRef.current;
    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, width: '100vw', height: '100vh' }} />;
};

export default SpaceBackground;