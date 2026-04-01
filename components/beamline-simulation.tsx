"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type BeamlineSimulationProps = {
  className?: string;
};

type ChamberParticle = {
  alpha: number;
  angle: number;
  angularVelocity: number;
  orbitRadius: number;
  phase: number;
  radialAmplitude: number;
  radialSpeed: number;
  size: number;
};

type BeamParticle = {
  alpha: number;
  offset: number;
  phase: number;
  progress: number;
  size: number;
  speed: number;
  wobble: number;
};

type Layout = {
  beamDirX: number;
  beamDirY: number;
  beamHalfHeight: number;
  beamLength: number;
  beamNormalX: number;
  beamNormalY: number;
  centerX: number;
  centerY: number;
  chamberRadius: number;
  emissionX: number;
  emissionY: number;
  height: number;
  width: number;
};

const INK = 163;
const PARTICLE_COLOR = `rgba(${INK}, ${INK}, ${INK},`;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function getLayout(width: number, height: number): Layout {
  const chamberRadius = Math.min(width * 0.24, height * 0.35, 214);
  const rightMargin = width < 640 ? 72 : 176;
  const centerX = clamp(
    width * (width < 640 ? 0.26 : 0.33),
    chamberRadius + 40,
    width - rightMargin - chamberRadius - 24
  );
  const centerY = clamp(
    height * (width < 640 ? 0.35 : 0.38),
    chamberRadius + 36,
    height * 0.54
  );
  const extractionAngle = width < 640 ? -1.42 : -1.36;
  const emissionRadius = chamberRadius * 0.88;
  const emissionX = centerX + Math.cos(extractionAngle) * emissionRadius;
  const emissionY = centerY + Math.sin(extractionAngle) * emissionRadius;
  const beamDirX = -Math.sin(extractionAngle);
  const beamDirY = Math.cos(extractionAngle);
  const beamNormalX = -beamDirY;
  const beamNormalY = beamDirX;
  const beamLength = Math.max(width * 0.22, width - rightMargin - emissionX);
  const beamHalfHeight = Math.max(8, chamberRadius * 0.11);

  return {
    beamDirX,
    beamDirY,
    beamHalfHeight,
    beamLength,
    beamNormalX,
    beamNormalY,
    centerX,
    centerY,
    chamberRadius,
    emissionX,
    emissionY,
    height,
    width,
  };
}

function createChamberParticle(layout: Layout): ChamberParticle {
  const edgeBias = Math.pow(Math.random(), 1.8);

  return {
    alpha: 0.16 + Math.random() * 0.28,
    angle: Math.random() * Math.PI * 2,
    angularVelocity: 0.46 + Math.random() * 0.22,
    orbitRadius: layout.chamberRadius * (0.76 + edgeBias * 0.16),
    phase: Math.random() * Math.PI * 2,
    radialAmplitude: 0.8 + Math.random() * 2.4,
    radialSpeed: 0.45 + Math.random() * 1.2,
    size: 0.72 + Math.random() * 0.34,
  };
}

function createBeamParticle(layout: Layout, seededProgress = Math.random()): BeamParticle {
  return {
    alpha: 0.22 + Math.random() * 0.34,
    offset: (Math.random() - 0.5) * layout.beamHalfHeight * 1.5,
    phase: Math.random() * Math.PI * 2,
    progress: seededProgress,
    size: 1 + Math.random() * 1.8,
    speed: 0.26 + Math.random() * 0.3,
    wobble: 0.8 + Math.random() * 1.8,
  };
}

function resetBeamParticle(particle: BeamParticle, layout: Layout) {
  particle.alpha = 0.22 + Math.random() * 0.34;
  particle.offset = (Math.random() - 0.5) * layout.beamHalfHeight * 1.5;
  particle.phase = Math.random() * Math.PI * 2;
  particle.progress = -Math.random() * 0.16;
  particle.size = 1 + Math.random() * 1.8;
  particle.speed = 0.26 + Math.random() * 0.3;
  particle.wobble = 0.8 + Math.random() * 1.8;
}

function drawParticle(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, alpha: number) {
  ctx.beginPath();
  ctx.fillStyle = `${PARTICLE_COLOR}${alpha})`;
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fill();
}

function drawTrail(
  ctx: CanvasRenderingContext2D,
  points: Array<{ x: number; y: number }>,
  size: number,
  alpha: number
) {
  if (points.length < 2) {
    return;
  }

  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);

  for (let index = 1; index < points.length; index += 1) {
    ctx.lineTo(points[index].x, points[index].y);
  }

  ctx.strokeStyle = `${PARTICLE_COLOR}${alpha})`;
  ctx.lineWidth = size * 2.6;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.stroke();
}

function getChamberParticlePosition(
  particle: ChamberParticle,
  layout: Layout,
  time: number,
  angle: number
) {
  const orbitRadius = clamp(
    particle.orbitRadius + Math.sin(time * particle.radialSpeed + particle.phase) * particle.radialAmplitude,
    layout.chamberRadius * 0.72,
    layout.chamberRadius * 0.96
  );
  const microJitter = Math.sin(time * (particle.radialSpeed * 1.7) + particle.phase) * 1.2;

  return {
    x: layout.centerX + Math.cos(angle) * orbitRadius,
    y: layout.centerY + Math.sin(angle) * orbitRadius + microJitter,
  };
}

export function BeamlineSimulation({ className }: BeamlineSimulationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !container || !ctx) {
      return;
    }

    let animationFrameId = 0;
    let resizeObserver: ResizeObserver | null = null;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let layout = getLayout(0, 0);
    let chamberParticles: ChamberParticle[] = [];
    let beamParticles: BeamParticle[] = [];
    let lastTime = 0;

    const initializeScene = () => {
      const bounds = container.getBoundingClientRect();

      width = bounds.width;
      height = bounds.height;
      dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      layout = getLayout(width, height);

      const chamberCount = width < 640 ? 42 : 74;
      const beamCount = width < 640 ? 48 : 72;

      chamberParticles = Array.from({ length: chamberCount }, () => createChamberParticle(layout));
      beamParticles = Array.from({ length: beamCount }, (_, index) =>
        createBeamParticle(layout, index / beamCount)
      );
    };

    const clearFrame = () => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const updateChamberParticles = (time: number, deltaTime: number) => {
      const trailSteps = 24;
      const trailTimeStep = 0.06;

      for (const particle of chamberParticles) {
        particle.angle += particle.angularVelocity * deltaTime;
        const trailPoints: Array<{ x: number; y: number }> = [];

        for (let step = trailSteps; step >= 0; step -= 1) {
          const sampleTime = time - trailTimeStep * step;
          const sampleAngle = particle.angle - particle.angularVelocity * trailTimeStep * step;
          trailPoints.push(getChamberParticlePosition(particle, layout, sampleTime, sampleAngle));
        }

        drawTrail(ctx, trailPoints, particle.size, particle.alpha * 0.72);
        const position = getChamberParticlePosition(particle, layout, time, particle.angle);
        drawParticle(ctx, position.x, position.y, particle.size, particle.alpha);
      }
    };

    const updateBeamParticles = (time: number, deltaTime: number) => {
      const leadOffset = layout.chamberRadius * 0.03;

      for (const particle of beamParticles) {
        particle.progress += particle.speed * deltaTime;

        if (particle.progress > 1.04) {
          resetBeamParticle(particle, layout);
        }

        const travel = Math.max(particle.progress, 0);
        const taper = 1 - Math.min(travel * 0.82, 0.82);
        const entrance = Math.min(travel / 0.06, 1);
        const exit = 1 - Math.max((travel - 0.88) / 0.12, 0);
        const axialDistance = leadOffset + layout.beamLength * travel;
        const lateralOffset =
          particle.offset * taper +
          Math.sin(time * (1.2 + particle.wobble) + particle.phase) * 1.4 * taper;
        const x =
          layout.emissionX +
          layout.beamDirX * axialDistance +
          layout.beamNormalX * lateralOffset;
        const y =
          layout.emissionY +
          layout.beamDirY * axialDistance +
          layout.beamNormalY * lateralOffset;
        const alpha = particle.alpha * entrance * Math.max(exit, 0);

        drawParticle(ctx, x, y, particle.size, alpha);
      }
    };

    const render = (timestamp: number) => {
      if (lastTime === 0) {
        lastTime = timestamp;
      }

      const time = timestamp / 1000;
      const deltaTime = Math.min((timestamp - lastTime) / 1000, 0.032);
      lastTime = timestamp;

      clearFrame();
      updateChamberParticles(time, deltaTime);
      updateBeamParticles(time, deltaTime);

      animationFrameId = window.requestAnimationFrame(render);
    };

    initializeScene();
    resizeObserver = new ResizeObserver(() => {
      initializeScene();
    });
    resizeObserver.observe(container);
    animationFrameId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      resizeObserver?.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
