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
    renderer.setPixelRatio(window.devicePixelRatio);
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
    const sunGeometry = new THREE.SphereGeometry(15, 64, 64);
    
    const vertexShader = `
      uniform float uTime;
      uniform float uNoiseAmount;

      // 2D Random
      float random (vec2 st) {
          return fract(sin(dot(st.xy,
                              vec2(12.9898,78.233)))*
              43758.5453123);
      }

      // 2D Noise
      float noise (vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);

          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));

          vec2 u = f*f*(3.0-2.0*f);
          return mix(a, b, u.x) +
                  (c - a)* u.y * (1.0 - u.x) +
                  (d - b) * u.x * u.y;
      }

      varying float vNoise;
      varying vec2 vUv;

      void main() {
        vUv = uv;
        vec3 pos = position;
        vNoise = noise(pos.xy * 2.0 + uTime * 0.1);
        pos += normal * vNoise * uNoiseAmount;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float uTime;
      varying float vNoise;
      varying vec2 vUv;

      // 2D Random
      float random (vec2 st) {
          return fract(sin(dot(st.xy,
                              vec2(12.9898,78.233)))*
              43758.5453123);
      }

      // 2D Noise
      float noise (vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);

          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));

          vec2 u = f*f*(3.0-2.0*f);
          return mix(a, b, u.x) +
                  (c - a)* u.y * (1.0 - u.x) +
                  (d - b) * u.x * u.y;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy/vec2(1000.0, 1000.0);
        float n = noise(vUv * 5.0 + vNoise + uTime * 0.2);

        // Wave effect
        float wave = sin(distance(vUv, vec2(0.5)) * 20.0 - uTime * 2.0) * 0.1 + 0.9;
        n *= wave;
        
        vec3 color1 = vec3(1.0, 0.8, 0.0); // Orange
        vec3 color2 = vec3(1.0, 0.2, 0.0); // Red
        vec3 finalColor = mix(color1, color2, n);
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const sunMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uNoiseAmount: { value: 1.5 },
      },
      vertexShader,
      fragmentShader,
    });

    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);
    
    const pointLight = new THREE.PointLight(0xffffff, 1, 1000);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);

      stars.rotation.y += 0.0001;
      sun.rotation.y += 0.001;
      sunMaterial.uniforms.uTime.value = clock.getElapsedTime();

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
