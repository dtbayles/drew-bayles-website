import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import '../../App.css'
import html5 from '../../assets/images/logos/html5.svg';
import mongodb from '../../assets/images/logos/mongodb.svg';
import javascript from '../../assets/images/logos/javascript.svg';
import typescript from '../../assets/images/logos/typescript.svg';
import python from '../../assets/images/logos/python.svg';
import react from '../../assets/images/logos/react.svg';
import flutter from '../../assets/images/logos/flutter.svg';
import mysql from '../../assets/images/logos/mysql.svg';
import aws from '../../assets/images/logos/aws.svg';
import googlecloud from '../../assets/images/logos/googlecloud.svg';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
            opacity: "1",
          },
          fullScreen: {
            enable: false,
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "attract",
              },
              onHover: {
                enable: true,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              bubble: {
                distance: 200,
                size: 50,
                duration: 0.4,
              }
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "image",
              image: [
                {
                  // any path or url to your image that will be used as a particle
                  src: html5,
                  // the pixel width of the image, you can use any value, the image will be scaled
                  width: 64,
                  // the pixel height of the image, you can use any value, the image will be scaled
                  height: 64,
                  // if true and the image type is SVG, it will replace all the colors with the particle color
                  replaceColor: false
                },
                {
                  src: mongodb,
                  width: 60,
                  height: 129,
                  replaceColor: false
                },
                {
                  src: javascript,
                  width: 16,
                  height: 16,
                  replaceColor: false
                },
                {
                  src: typescript,
                  width: 512,
                  height: 512,
                  replaceColor: false
                },
                {
                  src: python,
                  width: 112,
                  height: 113,
                  replaceColor: false
                },
                {
                  src: react,
                  width: 16,
                  height: 16,
                  replaceColor: false
                },
                {
                  src: flutter,
                  width: 64,
                  height: 64,
                  replaceColor: false
                },
                {
                  src: mysql,
                  width: 64,
                  height: 64,
                  replaceColor: false
                },
                {
                  src: aws,
                  width: 512,
                  height: 307,
                  replaceColor: false
                },
                {
                  src: googlecloud,
                  width: 64,
                  height: 64,
                  replaceColor: false
                },
              ]
            },
            size: {
              value: { min: 5, max: 20 },
            },
          },
          detectRetina: true,
        }}
      />
  );
};

export default ParticlesBackground;