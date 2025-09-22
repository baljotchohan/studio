'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeAnimation = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    camera.position.set(0, 2, 10);
    camera.lookAt(scene.position);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xffffff, 1.5, 100);
    pointLight.position.set(0, 5, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x0000ff, 1, 100);
    pointLight2.position.set(-5, -2, 5);
    scene.add(pointLight2);
    
    // Helper function to create a robot
    const createRobot = (position: THREE.Vector3) => {
      const group = new THREE.Group();

      const head = new THREE.Mesh(
        new THREE.BoxGeometry(0.8, 0.8, 0.8),
        new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.3, metalness: 0.8 })
      );
      head.position.y = 1.4;

      const body = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1.5, 0.5),
        new THREE.MeshStandardMaterial({ color: 0xbbbbbb, roughness: 0.4, metalness: 0.6 })
      );
      
      group.add(head);
      group.add(body);
      group.position.copy(position);

      scene.add(group);
      return group;
    };
    
    // Create robots
    const robots = [
      createRobot(new THREE.Vector3(-4, 0.75, 0)),
      createRobot(new THREE.Vector3(4, 0.75, 0)),
      createRobot(new THREE.Vector3(0, 0.75, -2)),
    ];

    // Create dynamic circles
    const circles = new THREE.Group();
    for(let i=0; i<15; i++) {
        const geometry = new THREE.RingGeometry(0.1, 0.2, 32);
        const material = new THREE.MeshBasicMaterial({ color: Math.random() > 0.5 ? 0x0000FF : 0xFFFF00, side: THREE.DoubleSide });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set((Math.random() - 0.5) * 15, (Math.random()) * 5, (Math.random() - 0.5) * 8);
        mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
        circles.add(mesh);
    }
    scene.add(circles);

    // Floor
    const floor = new THREE.Mesh(
        new THREE.PlaneGeometry(20, 20),
        new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.8, metalness: 0.2 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;
    scene.add(floor);


    const mouse = new THREE.Vector2();
    const handleMouseMove = (event: MouseEvent) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    window.addEventListener('mousemove', handleMouseMove);

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      
      // Animate robots
      robots.forEach((robot, index) => {
          robot.children[0].rotation.y = elapsedTime * 0.5; // Rotate head
          robot.position.y = 0.75 + Math.sin(elapsedTime * 2 + index) * 0.2; // Bob up and down
      });

      // Animate circles
      circles.rotation.y = elapsedTime * 0.1;
      circles.children.forEach((circle, i) => {
          circle.rotation.x += 0.01 * (i % 5 + 1);
          circle.rotation.y += 0.01 * (i % 3 + 1);
      })

      // Animate camera
      camera.position.x += (mouse.x * 2 - camera.position.x) * 0.02;
      camera.position.y += (-mouse.y * 2 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
        if(currentMount) {
            camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        }
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default ThreeAnimation;
