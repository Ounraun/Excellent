import { useEffect, useMemo, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Engine } from "@tsparticles/engine"; // ✅ ใช้ @tsparticles/engine เท่านั้น
import { Container, IOptions, RecursivePartial } from "@tsparticles/engine"; // ✅ ใช้ @tsparticles/engine เท่านั้น
import { loadSlim } from "@tsparticles/slim";

interface ParticlesProps {
  id: string;
  height?: string; // เพิ่ม Props `height`
}

const ParticlesComponent: React.FC<ParticlesProps> = ({ id, height }) => {
  const [init, setInit] = useState(false);

  // เรียกใช้เฉพาะครั้งแรกของแอป
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  // ใช้ useCallback เพื่อป้องกัน Re-render ที่ไม่จำเป็น
  const particlesLoaded = useCallback(
    async (container?: Container): Promise<void> => {
      // console.log(container);
    },
    []
  );

  // ใช้ Type ของ `ParticlesOptions`
  const options: RecursivePartial<IOptions> = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "#000000" } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "repulse" },
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          push: { distance: 200, duration: 15 },
          grab: { distance: 150 },
        },
      },
      particles: {
        color: { value: "#FFFFFF" },
        links: {
          color: "#FFFFFF",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: true,
          speed: 1,
          straight: false,
        },
        number: { density: { enable: true }, value: 150 },
        opacity: { value: 1.0 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  );

  return init ? (
    <div style={{ width: "100%", height: height, position: "relative" }}>
      <Particles
        id={id}
        particlesLoaded={particlesLoaded}
        options={options}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  ) : null;
};

export default ParticlesComponent;
