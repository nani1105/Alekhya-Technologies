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
  '#00b4d8', // Electric Cyan (Logo Primary)
  '#0077b6', // Vivid Royal Blue (Logo Primary)
  '#0284c7', // Cobalt / Sky Blue
  '#38bdf8', // Light Electric Cyan
  '#0ea5e9', // Ocean Blue
  '#06b6d4', // Bright Cyan
  '#ffffff', // Crisp Star White
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
      {/* Clean High-Tech Canvas Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F0F9FF] via-[#F8FAFC] to-[#EFF6FF] pointer-events-none -z-20" />

      {/* Alekhya Logo Ambient Glow Orbs */}
      {/* Electric Cyan Glow Orb (Upper Left) */}
      <div className="absolute -top-36 -left-36 w-[450px] h-[450px] bg-[#00B4D8]/20 rounded-full blur-3xl pointer-events-none" />
      {/* Vivid Royal Blue Glow Orb (Right Center) */}
      <div className="absolute top-1/3 -right-36 w-[550px] h-[550px] bg-[#0077B6]/18 rounded-full blur-3xl pointer-events-none" />
      {/* Deep Ocean Blue Glow Orb (Bottom Left) */}
      <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] bg-[#0284C7]/16 rounded-full blur-3xl pointer-events-none" />
      {/* Soft Sky Blue Glow Orb (Center-Top) */}
      <div className="absolute top-1/2 left-1/3 w-[360px] h-[360px] bg-[#38BDF8]/12 rounded-full blur-3xl pointer-events-none" />

      {/* Sparkle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block pointer-events-none" />
    </div>
  );
};

export default SparklesBackground;
