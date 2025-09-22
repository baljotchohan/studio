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
    scene.background = new THREE.Color(0x1a1a2a);
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    camera.position.set(0, 1.5, 8);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);
    
    // Character
    const character = new THREE.Group();
    const material = new THREE.MeshStandardMaterial({ color: 0x0077ff, roughness: 0.5, metalness: 0.2 });

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), material);
    head.position.y = 2;

    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.5, 1.5, 32), material);
    body.position.y = 1;

    const leftArm = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 1, 32), material);
    leftArm.position.set(-0.7, 1.3, 0);
    leftArm.rotation.z = -Math.PI / 4;
    
    const rightArm = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 1, 32), material);
    rightArm.position.set(0.7, 1.3, 0);
    rightArm.rotation.z = Math.PI / 4;
    
    const leftLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.1, 1, 32), material);
    leftLeg.position.set(-0.25, 0, 0);

    const rightLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.1, 1, 32), material);
    rightLeg.position.set(0.25, 0, 0);

    character.add(head);
    character.add(body);
    character.add(leftArm);
    character.add(rightArm);
    character.add(leftLeg);
    character.add(rightLeg);
    
    scene.add(character);

    // Floor
    const floor = new THREE.Mesh(
        new THREE.PlaneGeometry(20, 20),
        new THREE.MeshStandardMaterial({ color: 0x111122, roughness: 0.8 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.5;
    scene.add(floor);

    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Simple wave animation
      rightArm.rotation.z = Math.PI / 4 + Math.sin(elapsedTime * 5) * 0.5;

      // Bobbing motion
      character.position.y = Math.sin(elapsedTime * 2) * 0.1;
      
      // Gentle rotation of the whole character
      character.rotation.y = elapsedTime * 0.2;

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
      cancelAnimationFrame(frameId);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.traverse(object => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
             if (Array.isArray(object.material)) {
                object.material.forEach(material => material.dispose());
             } else {
                object.material.dispose();
             }
          }
        }
      });
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default DAnimationExample;
