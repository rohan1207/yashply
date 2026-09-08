import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import QuoteForm from "./QuoteForm";

export default function EnquiryModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-yp-espresso/55 backdrop-blur-sm"
            aria-label="Close enquiry"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[min(92svh,40rem)] w-full max-w-lg overflow-y-auto rounded-[1.35rem] bg-yp-ivory p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-float sm:rounded-[2rem] sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">Enquire</p>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl">Get a quote</h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-yp-espresso text-yp-ivory"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
            <QuoteForm compact onSent={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
