import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white px-6"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img
        src="/logo.png"
        alt="Yashply"
        className="h-auto w-[min(72vw,18rem)] object-contain sm:w-[min(52vw,22rem)] md:w-[min(42vw,26rem)] lg:w-[28rem]"
        initial={{ opacity: 0, scale: 0.82 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="mt-10 h-[2px] w-[min(56vw,14rem)] overflow-hidden rounded-full bg-yp-espresso/10 sm:mt-12 sm:w-48">
        <motion.div
          className="h-full bg-yp-red"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}
