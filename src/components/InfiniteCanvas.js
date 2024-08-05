import React, { useRef, useState, useEffect } from 'react';

const InfiniteCanvas = ({data}) => {

  const canvasRef = useRef(null)

  const [canvasData, setCanvasData] = useState(data)
  const [context, setContext] = useState(null)

  const [mouseMoveX, setMouseMoveX] = useState(0)
  const [mouseMoveY, setMouseMoveY] = useState(0)



  useEffect(() => {
    const canvas = canvasRef.current

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const context = canvas.getContext('2d')
    console.log(context)
    setContext(context)

  },[data])

  const draw = () => {


    context.fillStyle = 'white'
    context.fillRect(0, 0, window.innerWidth, window.innerHeight)

    context.fillStyle = 'black'
    for (let item in data) {
      context.fillRect(mouseMoveX,mouseMoveY, 20, 20)
    }


  }

  const onMouseMove = (event) => {
    console.log(event)
    setMouseMoveX(event.clientX);
    setMouseMoveY(event.clientY);

    draw()

  }


  return (
    <canvas ref = {canvasRef}
      onMouseMove={onMouseMove} />
  );
};

export default InfiniteCanvas;