'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

const WebDevAnimation = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    let frameId: number;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);
    renderer.setClearColor(0x0a0a1a); // Dark blue background

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x61dafb, 1.5, 200);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffd700, 1, 200);
    pointLight2.position.set(-15, -5, 5);
    scene.add(pointLight2);
    
    const pointLight3 = new THREE.PointLight(0xe34f26, 1, 200);
    pointLight3.position.set(0, -10, -10);
    scene.add(pointLight3);

    // Add stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
    const starVertices = [];
    for (let i = 0; i < 500; i++) {
        const x = (Math.random() - 0.5) * 50;
        const y = (Math.random() - 0.5) * 50;
        const z = (Math.random() - 0.5) * 50;
        starVertices.push(x, y, z);
    }
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    const icons: THREE.Mesh[] = [];
    const fontLoader = new FontLoader();
    const fontUrl = 'https://threejs.org/examples/fonts/helvetiker_bold.typeface.json';

    fontLoader.load(fontUrl, (font) => {
      const languages = ['JS', 'React', 'Next.js', 'HTML', 'CSS', 'TS', 'Node'];
      const colors = [0xffd700, 0x61dafb, 0xffffff, 0xe34f26, 0x1572b6, 0x3178c6, 0x68a063];
      
      languages.forEach((lang, index) => {
        const textGeometry = new TextGeometry(lang, {
          font: font,
          size: 1,
          height: 0.2,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.05,
          bevelSize: 0.04,
          bevelOffset: 0,
          bevelSegments: 8,
        });
        textGeometry.center();

        const textMaterial = new THREE.MeshStandardMaterial({
          color: colors[index % colors.length],
          metalness: 0.8,
          roughness: 0.1,
          emissive: colors[index % colors.length],
          emissiveIntensity: 0.1,
        });

        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        
        textMesh.position.set(
          Math.cos(index * (Math.PI * 2) / languages.length) * 5,
          Math.sin(index * (Math.PI * 2) / languages.length) * 3,
          (Math.random() - 0.5) * 4
        );
        
        textMesh.userData = {
            basePosition: textMesh.position.clone(),
            angle: index * (Math.PI * 2) / languages.length
        };

        icons.push(textMesh);
        scene.add(textMesh);
      });
    });

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

      icons.forEach((icon, index) => {
        icon.rotation.y += 0.005 + (index % 3) * 0.002;
        icon.rotation.x += 0.002;
        
        icon.position.y = icon.userData.basePosition.y + Math.sin(elapsedTime * 0.5 + icon.userData.angle) * 0.5;
      });

      stars.rotation.y = elapsedTime * 0.05;

      camera.position.x += (mouse.x * 3 - camera.position.x) * 0.03;
      camera.position.y += (mouse.y * 2 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    const handleResize = () => {
      if (currentMount) {
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      }
    };
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
      if (starsGeometry) starsGeometry.dispose();
      if (starsMaterial) starsMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default WebDevAnimation;
