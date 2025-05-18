import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ArchitectureView = ({ architecture, onBack }) => {
  const [expandedClass, setExpandedClass] = useState(null);

  const toggleClass = (index) => {
    setExpandedClass(expandedClass === index ? null : index);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" }
    }),
  };

  return (
    <motion.div
      className="p-8 max-w-5xl mx-auto rounded-3xl shadow-2xl bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <button
        onClick={onBack}
        className="mb-8 px-5 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl font-semibold text-indigo-100 hover:bg-opacity-40 transition"
      >
        ← Back
      </button>

      <motion.h2
        className="text-4xl font-extrabold mb-6 tracking-wide drop-shadow-lg"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        Overview
      </motion.h2>
      <motion.p
        className="text-lg max-w-3xl leading-relaxed drop-shadow-md"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        {architecture.overview}
      </motion.p>

      <motion.h3
        className="text-3xl font-bold mt-12 mb-4 underline decoration-pink-400 decoration-4 drop-shadow-lg"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        Hardware
      </motion.h3>
      <motion.ul
        className="list-disc list-inside space-y-2 text-lg text-indigo-200 drop-shadow-md"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        {architecture.hardware?.map((item, i) => (
          <li key={i} className="hover:text-pink-300 cursor-default">{item}</li>
        ))}
      </motion.ul>

      <motion.h3
        className="text-3xl font-bold mt-12 mb-4 underline decoration-pink-400 decoration-4 drop-shadow-lg"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={4}
      >
        Libraries
      </motion.h3>
      <motion.ul
        className="list-disc list-inside space-y-2 text-lg text-indigo-200 drop-shadow-md"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={5}
      >
        {architecture.libraries?.map((lib, i) => (
          <li key={i} className="hover:text-pink-300 cursor-default">{lib}</li>
        ))}
      </motion.ul>

      <motion.h3
        className="text-3xl font-bold mt-12 mb-6 underline decoration-pink-400 decoration-4 drop-shadow-lg"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={6}
      >
        Classes
      </motion.h3>
      <div className="space-y-6">
        {architecture.classes?.map((cls, i) => (
          <motion.div
            key={i}
            className="bg-white bg-opacity-10 rounded-2xl p-6 shadow-lg cursor-pointer select-none"
            onClick={() => toggleClass(i)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-2xl font-semibold text-pink-300 drop-shadow-lg">{cls.name}</h4>
              <motion.span
                animate={{ rotate: expandedClass === i ? 90 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-pink-300 text-3xl select-none"
              >
                ▶
              </motion.span>
            </div>

            <AnimatePresence initial={false}>
              {expandedClass === i && (
                <motion.ul
                  className="mt-4 list-disc list-inside text-indigo-100 space-y-3"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0, overflow: "hidden" }
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {cls.functions?.map((fn, j) => (
                    <li key={j} className="flex flex-wrap gap-2 items-center">
                      <span className="font-bold text-pink-400">{fn.name}</span>
                      <span className="italic text-indigo-300">({fn.inputs.join(", ") || "none"})</span>
                      <span className="text-green-400">→ {fn.outputs.join(", ") || "void"}</span>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ArchitectureView;
