import React from "react";
import styles from "./hero.module.scss";
import { motion } from "framer-motion";
import BaseGraphic from "../../images/vignette.svg";
import Glow from "../../images/glow.svg";
import Screen from "../../images/screen.svg";
import ScreenGlowClippingMask from "../../images/clipping-mask.svg";
import WormholeCircle from "../../images/wormhole-circle.svg";
import WormholeSwoop from "../../images/wormhole-swoop.svg";

const AnimatedGlow = motion(Glow);
const AnimatedWormholeCircle = motion(WormholeCircle);
const AnimatedWormholeSwoop = motion(WormholeSwoop);

const numWormholeCircles = 6;

function Hero({ title, subTitle }) {
  return (
    <section>
      <header className={styles.header}>
        <div className={styles.graphicContainer}>
          <BaseGraphic className={styles.graphic}>
            <ScreenGlowClippingMask />
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
                  edgeMode=""
                />
              </filter>
              <motion.linearGradient
                id="linearGradient"
                animate={{
                  gradientTransform: [
                    "rotate(180)",
                    "rotate(360)",
                    "rotate(180)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <stop
                  offset="0"
                  stopColor="var(--accent-white)"
                  stopOpacity="0.33"
                />
                <stop
                  offset="1"
                  stopColor="var(--accent-white)"
                  stopOpacity="0"
                />
              </motion.linearGradient>
            </defs>
            <g
              clipPath="url(#ScreenClippingMask)"
              className={styles.screenDisplay}
            >
              {[...Array(numWormholeCircles)].map((_, index) => {
                return (
                  <>
                    <AnimatedWormholeCircle
                      className={styles.wormholeCircle}
                      animate={{
                        opacity: [1, 1, 0.9, 0.4],
                        scale: [1, 0.1],
                      }}
                      style={{ originX: 0.31, originY: 0.24 }}
                      transition={{
                        duration: 20,
                        ease: "easeIn",
                        delay: index * 5,
                        repeat: Infinity,
                      }}
                    />
                    <AnimatedWormholeSwoop
                      className={styles.wormholeCircle}
                      animate={{
                        opacity: [1, 0.8, 0.5, 0],
                        scale: [1, 0.2],
                      }}
                      style={{ originX: 0.31, originY: 0.24 }}
                      transition={{
                        duration: 20,
                        ease: "easeIn",
                        delay: index * 5,
                        repeat: Infinity,
                      }}
                    />
                  </>
                );
              })}
            </g>
            <AnimatedGlow
              className={styles.animatedGlow}
              style={{ originX: 0.24, originY: 0.25 }}
              transition={{ duration: 0.5, repeat: Infinity }}
              fill="url(#linearGradient)"
            />
            <g
              className={styles.screenWrapper}
              clipPath="url(#clipping-mask_svg__ScreenGlowClippingMask)"
            >
              <motion.use
                className={styles.screen}
                xlinkHref="#screen_svg__path"
                filter="url(#blur)"
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
        </div>
        <div className={styles.text}>
          <div className={styles.measureConstraint}>
            {React.cloneElement(title, { className: styles.title })}
            {subTitle}
          </div>
        </div>
      </header>
    </section>
  );
}

export { Hero };
