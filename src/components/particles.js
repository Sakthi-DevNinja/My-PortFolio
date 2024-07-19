// src/components/ParticlesComponent.js
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo } from "react";
import { useTheme } from '../context/ThemeContext';
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  const { theme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  // Move these functions inside the useMemo callback
  const options = useMemo(() => {
    const getBackgroundColor = () => {
      switch (theme) {
        case 'dark':
          return '#111';
        case 'blue':
          return '#1e2f97';
        case 'light':
        default:
          return '#fff';
      }
    };

    const getParticleColor = () => {
      return theme === 'light' ? '#000000' : '#FFFFFF'; // Black for light theme, white otherwise
    };

    const backgroundColor = getBackgroundColor();
    const particleColor = getParticleColor();
    
    return {
      background: {
        color: {
          value: backgroundColor,
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: particleColor,
        },
        links: {
          color: particleColor,
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 8,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    };
  }, [theme]); // Keep only 'theme' if it's used directly inside useMemo

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
