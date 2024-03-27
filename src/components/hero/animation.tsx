import { motion } from "framer-motion";
import BaseGraphic from "./graphics/base";
import Glow from "./graphics/glow";
import Screen from "./graphics/screen";
import WormholeCircle from "./graphics/wormhole-circle";
import WormholeSwoop from "./graphics/wormhole-swoop";

const AnimatedGlow = motion(Glow);
const AnimatedWormholeCircle = motion(WormholeCircle);
const AnimatedWormholeSwoop = motion(WormholeSwoop);

const numWormholeCircles = 6;

export function Animation() {
  return (
    <BaseGraphic className="fill-secondary">
      <Screen />
      <defs>
        <clipPath id="ScreenClippingMask">
          <use xlinkHref="#screen_svg__path" />
        </clipPath>
        <filter id="blur">
          <motion.feGaussianBlur
            in="SourceGraphic"
            animate={{
              stdDeviation: ["1.9", "0", "1.9"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
        </filter>
        <motion.linearGradient
          id="linearGradient"
          initial={{
            gradientTransform: "rotate(0)",
          }}
          animate={{
            gradientTransform: ["rotate(180)", "rotate(360)", "rotate(180)"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          <stop offset="0" stopColor="#fff" stopOpacity="0.33" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </motion.linearGradient>
      </defs>
      <g clipPath="url(#ScreenClippingMask)" className="opacity-60">
        {[...Array(numWormholeCircles)].map((_, index) => {
          return (
            <g key={index}>
              <AnimatedWormholeCircle
                animate={{
                  opacity: [1, 1, 0.9, 0.4],
                  scale: [1, 0.1],
                }}
                style={{ originX: 0.31, originY: 0.24 }}
                transition={{
                  duration: 6,
                  ease: "easeIn",
                  delay: index * 2,
                  repeat: Infinity,
                }}
                className="fill-none stroke-black"
              />
              <AnimatedWormholeSwoop
                animate={{
                  opacity: [1, 0.8, 0.5, 0],
                  scale: [1, 0.2],
                }}
                style={{ originX: 0.31, originY: 0.24 }}
                transition={{
                  duration: 6,
                  ease: "easeIn",
                  delay: index * 2,
                  repeat: Infinity,
                }}
                className="fill-none stroke-black"
              />
            </g>
          );
        })}
      </g>
      <AnimatedGlow
        style={{ originX: 0.24, originY: 0.25 }}
        transition={{ duration: 0.5, repeat: Infinity }}
        fill="url(#linearGradient)"
        className="opacity-60 mix-blend-overlay"
      />
      <g
        clipPath="url(#clipping-mask_svg__ScreenGlowClippingMask)"
        className="mix-blend-overlay"
      >
        <motion.use
          xlinkHref="#screen_svg__path"
          filter="url(#blur)"
          className="opacity-60 fill-white"
          animate={{
            scale: [1.15, 1, 1.15],
          }}
          style={{ originX: 0.5, originY: 0.5 }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
      </g>
    </BaseGraphic>
  );
}
