import { motion } from "motion/react";

function GradientText({
  text,
  className = "",
  // Solo colores de la paleta: primary y secondary.
  gradient = "linear-gradient(90deg, var(--primary) 0%, var(--secondary) 50%, var(--primary) 100%)",
  neon = false,
  transition = {
    duration: 3,
    repeat: Infinity,
    ease: "linear",
  },
  ...props
}) {
  const baseStyle = {
    backgroundImage: gradient,
  };

  return (
    <span
      className={`relative inline-block ${className}`}
      {...props}
    >
      <motion.span
        animate={{
          backgroundPositionX: ["0%", "200%"],
        }}
        className="
          m-0
          bg-[length:200%_100%]
          bg-clip-text
          text-transparent
        "
        style={baseStyle}
        transition={transition}
      >
        {text}
      </motion.span>

      {neon && (
        <motion.span
          animate={{
            backgroundPositionX: ["0%", "200%"],
          }}
          className="
            absolute left-0 top-0
            m-0
            bg-[length:200%_100%]
            bg-clip-text
            text-transparent
            blur-[8px]
          "
          style={baseStyle}
          transition={transition}
        >
          {text}
        </motion.span>
      )}
    </span>
  );
}

export { GradientText };
export default GradientText;