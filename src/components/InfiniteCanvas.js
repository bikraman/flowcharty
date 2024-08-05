import React, { useRef, useState, useEffect } from 'react';

const InfiniteCanvas = () => {

  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

  },[])

  

  return (
    <canvas ref = {canvasRef} />
  );
};

export default InfiniteCanvas;