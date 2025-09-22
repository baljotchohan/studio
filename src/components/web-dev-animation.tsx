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
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(0, 10, 10);
    scene.add(pointLight);

    const icons: THREE.Mesh[] = [];
    const fontLoader = new FontLoader();
    const fontUrl = 'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json';

    fontLoader.load(fontUrl, (font) => {
      const languages = ['JS', 'React', 'Next.js', 'HTML', 'CSS', 'TS', 'Node'];
      const colors = [0xffd700, 0x61dafb, 0x000000, 0xe34f26, 0x1572b6, 0x3178c6, 0x339933];
      
      languages.forEach((lang, index) => {
        const textGeometry = new TextGeometry(lang, {
          font: font,
          size: 1,
          height: 0.2,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.03,
          bevelSize: 0.02,
          bevelOffset: 0,
          bevelSegments: 5,
        });
        textGeometry.center();

        const textMaterial = new THREE.MeshStandardMaterial({
          color: colors[index % colors.length],
          metalness: 0.7,
          roughness: 0.2,
        });

        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        
        textMesh.position.set(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 8
        );
        textMesh.userData = {
            velocity: new THREE.Vector3(
                (Math.random() - 0.5) * 0.01,
                (Math.random() - 0.5) * 0.01,
                (Math.random() - 0.5) * 0.01
            )
        };

        icons.push(textMesh);
        scene.add(textMesh);
      });
    });

    const mouse = new THREE.Vector2();
    const handleMouseMove = (event: MouseEvent) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    window.addEventListener('mousemove', handleMouseMove);

    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      icons.forEach(icon => {
        icon.position.add(icon.userData.velocity);
        
        // Bounce off the walls
        if (Math.abs(icon.position.x) > 8) icon.userData.velocity.x *= -1;
        if (Math.abs(icon.position.y) > 5) icon.userData.velocity.y *= -1;
        if (Math.abs(icon.position.z) > 4) icon.userData.velocity.z *= -1;

        icon.rotation.x += 0.005;
        icon.rotation.y += 0.005;
      });

      camera.position.x += (mouse.x * 2 - camera.position.x) * 0.02;
      camera.position.y += (-mouse.y * 1 - camera.position.y) * 0.02;
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
      // Dispose geometries and materials
      scene.traverse(object => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) {
            object.geometry.dispose();
          }
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

export default WebDevAnimation;
