import React, { useEffect, useRef } from 'react';

interface Sparkle {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  speed: number;
  phase: number;
  color: string;
  isCross: boolean;
  vx: number;
  vy: number;
}

const SPARKLE_COLORS = [
  '#ffffff',
  '#60a5fa', // Light blue
  '#93c5fd', // Soft blue
  '#c084fc', // Purple sparkle
  '#38bdf8', // Sky blue
  '#e0f2fe', // Ice white
];

export const SparklesBackground: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initSparkles();
    };

    window.addEventListener('resize', handleResize);

    // Generate sparkles
    let sparkles: Sparkle[] = [];
    const count = Math.min(140, Math.floor((width * height) / 9000));

    const initSparkles = () => {
      sparkles = [];
      for (let i = 0; i < count; i++) {
        sparkles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2.2 + 0.6,
          baseAlpha: Math.random() * 0.7 + 0.3,
          alpha: Math.random(),
          speed: Math.random() * 0.02 + 0.008,
          phase: Math.random() * Math.PI * 2,
          color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
          isCross: Math.random() > 0.75, // 25% of stars are 4-pointed cross sparkles
          vx: (Math.random() - 0.5) * 0.2,
          vy: -Math.random() * 0.3 - 0.05, // gentle upward drift
        });
      }
    };

    initSparkles();

    const drawCross = (
      ctx: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      spikes: number,
      outerRadius: number,
      innerRadius: number
    ) => {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.fill();
    };

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Draw each sparkle
      for (let i = 0; i < sparkles.length; i++) {
        const s = sparkles[i];

        // Animate twinkle
        s.phase += s.speed;
        const currentAlpha = Math.max(0.05, Math.sin(s.phase) * s.baseAlpha);

        // Drift position
        s.x += s.vx;
        s.y += s.vy;

        // Wrap around boundaries
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;
        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;

        ctx.save();
        ctx.fillStyle = s.color;
        ctx.globalAlpha = currentAlpha;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = s.size * 4;

        if (s.isCross && currentAlpha > 0.4) {
          drawCross(ctx, s.x, s.y, 4, s.size * 2.8, s.size * 0.6);
        } else {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none ${className}`}>
      {/* Deep Obsidian Black Base */}
      <div className="absolute inset-0 bg-black pointer-events-none -z-20" />

      {/* Subtle Ambient Cosmic Glow Orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />

      {/* Sparkle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block pointer-events-none" />
    </div>
  );
};

export default SparklesBackground;
