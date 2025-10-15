import { motion } from "motion/react";
import { LampContainer } from "./ui/lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium text-transparent md:text-7xl"
      >
        {/* className="text-3xl md:text-5xl uppercase font-oswald font-bold text-center leading-snug" */}
        <div className="flex flex-col items-center justify-center gap-4 pb-4">
          <h1 className="uppercase font-oswald font-bold text-center leading-snug">
            Protect your investments with{" "}
            <span className="inline md:block text-blue-600">
              exacting precision.
            </span>
          </h1>
          <p className="text-center text-base md:text-xl text-gray-400 max-w-3xl">
            Our expert team offers personalized guidance, helping you{" "}
            <span className="inline md:block">
              navigate your financial journey with confidence
            </span>
          </p>
        </div>
      </motion.h1>
    </LampContainer>
  );
}
