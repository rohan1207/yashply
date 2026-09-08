import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-yp-espresso"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <img src="/logo.png" alt="Yashply" className="h-16 w-auto object-contain sm:h-20" />
      <div className="mt-8 h-[2px] w-40 overflow-hidden bg-white/15">
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
