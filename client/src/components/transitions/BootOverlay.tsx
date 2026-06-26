import { motion } from "framer-motion";

interface BootOverlayProps {
  show: boolean;
}

export default function BootOverlay({ show }: BootOverlayProps) {
  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
    >
      <div className="w-full max-w-3xl px-10">

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-cyan-400 text-5xl font-bold tracking-[0.35em]"
        >
          EXPLORIA OS
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 border border-cyan-500 rounded-xl bg-cyan-500/5 backdrop-blur-md p-8"
        >
          <p className="font-mono text-cyan-300 text-lg">
            Initializing Explorer Interface...
          </p>

          <div className="mt-8 h-5 rounded-full overflow-hidden bg-zinc-800">

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
              className="h-full bg-cyan-400"
            />

          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-8 text-zinc-400 font-mono"
          >
            Preparing your journey...
          </motion.p>

        </motion.div>

      </div>
    </motion.div>
  );
}