"use client";

import Particles from "react-tsparticles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function InteractiveParticles() {
  const init = async (engine: Engine) => {
    await loadSlim(engine);
  };

  const options: ISourceOptions = {
    // Let tsParticles attach a fixed, full-screen canvas to <body>
    fullScreen: { enable: true, zIndex: 0 },          // ⬅️ key change
    background: { color: { value: "#0b0b0b" } },
    fpsLimit: 60,
    detectRetina: true,
    particles: {
      number: { value: 80, density: { enable: true, area: 900 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.35 },
      size: { value: { min: 1, max: 3 } },
      links: { enable: true, color: "#ffffff", distance: 120, opacity: 0.25, width: 1 },
      move: { enable: true, speed: 1.2, outModes: { default: "out" } }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        repulse: { distance: 120, duration: 0.3 },
        push: { quantity: 3 }
      }
    }
  };

  // No wrapper div — the library will create a fixed full-screen canvas
  return <Particles id="tsparticles" init={init} options={options} className="pointer-events-none" />;
}
