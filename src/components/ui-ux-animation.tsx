'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

const UiUxAnimation = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    let frameId: number;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);
    renderer.setClearColor(0x1a1a2a, 0);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xff00ff, 1.2, 200);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0x00ffff, 1.2, 200);
    pointLight2.position.set(-10, -10, 5);
    scene.add(pointLight2);

    const toolLogos: THREE.Mesh[] = [];

    const fontLoader = new FontLoader();
    const fontUrl = 'https://threejs.org/examples/fonts/helvetiker_bold.typeface.json';

    fontLoader.load(fontUrl, (font) => {
      const tools = ['Figma', 'Sketch', 'XD', 'InVision', 'Zeplin', 'Miro'];
      const colors = [0x0ACF83, 0xFDB931, 0xFF63F6, 0xFF3366, 0xFFA500, 0x4285F4];
      
      tools.forEach((tool, index) => {
        const textGeometry = new TextGeometry(tool, {
          font: font,
          size: 1.2,
          height: 0.2,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.03,
          bevelSize: 0.02,
        });
        textGeometry.center();

        const textMaterial = new THREE.MeshStandardMaterial({
          color: colors[index % colors.length],
          metalness: 0.7,
          roughness: 0.2,
        });

        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        
        textMesh.position.set(
          (Math.random() - 0.5) * 18,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 8
        );
        
        toolLogos.push(textMesh);
        scene.add(textMesh);
      });
    });

    // Abstract UI elements
    const uiElements = new THREE.Group();
    for (let i = 0; i < 20; i++) {
        const isWire = Math.random() > 0.5;
        const geometry = isWire ? new THREE.BoxGeometry(Math.random() * 2, Math.random() * 2, 0.1) : new THREE.PlaneGeometry(Math.random() * 2, Math.random() * 2);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: isWire, transparent: true, opacity: 0.15 });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set((Math.random() - 0.5) * 30, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 10);
        mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
        uiElements.add(mesh);
    }
    scene.add(uiElements);

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

      toolLogos.forEach((logo, index) => {
        logo.rotation.y += 0.005;
        logo.position.y += Math.sin(elapsedTime + index) * 0.005;
      });

      uiElements.rotation.y = elapsedTime * 0.05;

      camera.position.x += (mouse.x * 2 - camera.position.x) * 0.03;
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
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default UiUxAnimation;
