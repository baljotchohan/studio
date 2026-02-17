
"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const NeuralNetwork: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (!mountRef.current) return;
        const mount = mountRef.current;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
        camera.position.z = 25;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mount.appendChild(renderer.domElement);

        const nodes = 100;
        const positions = new Float32Array(nodes * 3);
        const particles = new THREE.BufferGeometry();
        const sphere = new THREE.Sphere(new THREE.Vector3(0,0,0), 10);
        for(let i = 0; i < nodes; i++) {
            const vertex = new THREE.Vector3().randomDirection().multiplyScalar(10 + Math.random() * 5);
            positions[i * 3] = vertex.x;
            positions[i * 3 + 1] = vertex.y;
            positions[i * 3 + 2] = vertex.z;
        }
        particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particleMaterial = new THREE.PointsMaterial({
            color: 0x0077ff,
            size: 0.2,
            blending: THREE.AdditiveBlending,
            transparent: true,
            opacity: 0.7
        });
        const particleSystem = new THREE.Points(particles, particleMaterial);
        scene.add(particleSystem);
        
        const linesGeometry = new THREE.BufferGeometry();
        const linePositions = [];
        for (let i = 0; i < nodes; i++) {
            for (let j = i + 1; j < nodes; j++) {
                const p1 = new THREE.Vector3(positions[i*3], positions[i*3+1], positions[i*3+2]);
                const p2 = new THREE.Vector3(positions[j*3], positions[j*3+1], positions[j*3+2]);
                if(p1.distanceTo(p2) < 5) {
                    linePositions.push(p1.x, p1.y, p1.z);
                    linePositions.push(p2.x, p2.y, p2.z);
                }
            }
        }
        linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0x8800ff,
            blending: THREE.AdditiveBlending,
            transparent: true,
            opacity: 0.15
        });
        const lines = new THREE.LineSegments(linesGeometry, lineMaterial);
        scene.add(lines);

        const brainGeom = new THREE.IcosahedronGeometry(8, 4);
        const brainMat = new THREE.MeshBasicMaterial({
            color: 0x0077ff,
            wireframe: true,
            transparent: true,
            opacity: 0.1
        });
        const brain = new THREE.Mesh(brainGeom, brainMat);
        scene.add(brain);

        const handleResize = () => {
            if (!mountRef.current) return;
            camera.aspect = mount.clientWidth / mount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mount.clientWidth, mount.clientHeight);
        };
        
        const handleMouseMove = (event: MouseEvent) => {
            mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        const handleTouchMove = (event: TouchEvent) => {
            if (event.touches.length > 0) {
                mouse.current.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
                mouse.current.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);

        const clock = new THREE.Clock();
        const animate = () => {
            const elapsedTime = clock.getElapsedTime();
            
            particleSystem.rotation.y = elapsedTime * 0.05;
            lines.rotation.y = elapsedTime * 0.05;
            brain.rotation.y = elapsedTime * 0.1;
            
            camera.position.x += (mouse.current.x * 5 - camera.position.x) * 0.05;
            camera.position.y += (mouse.current.y * 5 - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            if (mount) {
                mount.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, width: '100vw', height: '100vh', opacity: 0.5 }} />;
};

export default NeuralNetwork;
