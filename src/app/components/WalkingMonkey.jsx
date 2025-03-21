'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WalkingMonkey() {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 400 }}
      transition={{ duration: 2, ease: 'easeOut' }}
      className="fixed bottom-0 left-0"
    >
      <Image
        src="/logo_pink.svg"
        alt="Walking Monkey"
        width={200}
        height={200}
        className="pointer-events-none select-none"
      />
    </motion.div>
  );
}