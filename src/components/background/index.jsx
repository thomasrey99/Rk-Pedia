"use client"
import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <div className="absolute inset-0 -z-10 w-full h-full">
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="w-full h-full"
        options={{
          particles: {
            number: {
              value: 246,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              out_mode: "out",
              bounce: false,
            },
          },
          interactivity: {
            events: {
              resize: true,
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  )
}

export default ParticlesBackground
