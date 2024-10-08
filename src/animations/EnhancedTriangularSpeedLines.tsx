import React, { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";

const SpeedLines: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the container
  const [isVisible, setIsVisible] = useState(false); // State for visibility

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    const colors = ["#E4C47EFF", "#6e5622"];
    let animationFrameId: number;

    const drawLines = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2; // Centering it on the canvas
      const centerY = height / 2;
      const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2); // Calculate max distance here

      for (let i = 0; i < 60; i++) {
        drawTriangle(ctx, centerX, centerY, colors[1], 0.3, 3, maxDistance); // Pass maxDistance
      }
      for (let i = 0; i < 5; i++) {
        drawTriangle(ctx, centerX, centerY, colors[0], 0.3, 3, maxDistance); // Pass maxDistance
      }
    };

    const drawTriangle = (
      ctx: CanvasRenderingContext2D,
      centerX: number,
      centerY: number,
      color: string,
      opacity: number,
      blur: number,
      maxDistance: number // Add maxDistance here
    ) => {
      const angle = Math.random() * Math.PI * 2;
      const thickness = Math.random() * 20;

      const startDistance = Math.random() * (maxDistance - 90) + 90; // Now maxDistance is defined
      const startX = centerX + Math.cos(angle) * startDistance;
      const startY = centerY + Math.sin(angle) * startDistance;

      const endX = centerX + Math.cos(angle) * maxDistance;
      const endY = centerY + Math.sin(angle) * maxDistance;

      ctx.globalAlpha = opacity;
      ctx.filter = `blur(${blur}px)`;

      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX + Math.sin(angle) * thickness, endY - Math.cos(angle) * thickness);
      ctx.lineTo(endX - Math.sin(angle) * thickness, endY + Math.cos(angle) * thickness);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();

      ctx.filter = 'none';
      ctx.globalAlpha = 1;
    };

    const animate = () => {
      drawLines();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Resize the canvas when the container size changes
  useEffect(() => {
    const canvas = canvasRef.current;

    const resizeCanvas = () => {
      if (canvas && containerRef.current) {
        // Set the canvas dimensions to match the container
        canvas.width = containerRef.current.clientWidth;
        canvas.height = containerRef.current.clientHeight;
      }
    };

    const resizeObserver = new ResizeObserver(resizeCanvas);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current); // Observe the container size
    }

    resizeCanvas(); // Set initial size
    return () => {
      resizeObserver.disconnect(); // Cleanup observer on unmount
    };
  }, []);

  // Set visibility after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Make the canvas visible after 1.5 seconds
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      width="100%"
      height="100%"
      ref={containerRef}
      opacity={isVisible ? 1 : 0} // Set opacity based on visibility
      transition="opacity 1.5s ease" // Smooth transition effect
    >
      <canvas ref={canvasRef} />
    </Box>
  );
};

export default SpeedLines;
