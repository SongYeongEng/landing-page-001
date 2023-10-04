import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Cube = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();

  const cubeRef = useRef();

  useEffect(() => {
    // Set up the scene
    camera.position.z = 5;
    renderer.setSize(window.innerWidth, window.innerHeight);
    cubeRef.current.appendChild(renderer.domElement);

    // Create a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    // Start the animation loop
    animate();

    // Clean up on component unmount
    return () => {
      renderer.dispose();
    };
  }, []); // Empty dependency array to run the useEffect only once

  return <div ref={cubeRef} />;
};

export default Cube;