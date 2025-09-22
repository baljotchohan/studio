'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const DAnimationExample = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    let frameId: number;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);
    scene.background = new THREE.Color(0x050515);

    // Lighting
    const pointLight1 = new THREE.PointLight(0xff00ff, 1, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x00ffff, 1, 100);
    pointLight2.position.set(-10, -10, 5);
    scene.add(pointLight2);
    
    // Particle System
    const particleCount = 5000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color = new THREE.Color();

    for (let i = 0; i < particleCount; i++) {
        const x = (Math.random() - 0.5) * 30;
        const y = (Math.random() - 0.5) * 30;
        const z = (Math.random() - 0.5) * 30;

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        // Color based on position
        color.setHSL((x / 30) + 0.5, 0.7, (y / 30) + 0.5);
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
    });
    
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);


    const mouse = new THREE.Vector2();

    const handleMouseMove = (event: MouseEvent) => {
        const rect = currentMount.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    }
    window.addEventListener('mousemove', handleMouseMove);


    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      particleSystem.rotation.y = elapsedTime * 0.1;
      
      camera.position.x += (mouse.x * 5 - camera.position.x) * 0.05;
      camera.position.y += (-mouse.y * 5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);


      renderer.render(scene, camera);
    };

    const handleResize = () => {
      if(currentMount) {
          camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      }
    }
    window.addEventListener('resize', handleResize);

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particles.dispose();
      particleMaterial.dispose();
      scene.remove(particleSystem);
      scene.remove(pointLight1);
      scene.remove(pointLight2);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default DAnimationExample;
